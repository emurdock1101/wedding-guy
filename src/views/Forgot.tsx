import { makeStyles, TextField, Button, Grid, Typography, Paper, Box } from "@material-ui/core";
import { useState } from "react";
import { Auth } from "aws-amplify";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

interface ForgotProps {
  onLogIn: () => void;
}

const Forgot = (props: ForgotProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const useStyles = makeStyles((theme) => ({
    plus: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.primary.dark,
      },
    },
    input: {
      minWidth: "100%",
      marginBottom: 30,
      marginTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
    },
    button: {
      minWidth: "20%",
      margin: 20,
    },
    thirdTitle: {
      fontSize: 25,
      fontWeight: 300,
      font: "Monaco",
      marginLeft: 20,
      marginTop: 30,
      marginBottom: 30,
    },
    paper: {
      padding: 20,
      marginBottom: 60,
    },
    alert: {
      marginBottom: 15,
      border: "1px solid #EF5350",
    },
    box: {
      height: 50,
      marginBottom: 15,
    },
    forgot: {
      fontSize: 16,
      fontWeight: 300,
      font: "Monaco",
      marginTop: 20,
      marginLeft: 20,
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.primary.dark,
      },
    },
    title: {
      minWidth: "100%",
      paddingLeft: 20,
      color: theme.palette.info.light,
    },
  }));

  const styles = useStyles();
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
    }
    navigate(path, { replace: true });
  };

  const sendCode = async (e: any) => {
    e.preventDefault();
    try {
      // Send confirmation code to user's email
      const success = await Auth.forgotPassword(email);
      setCodeSent(true);
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (!email || !email.length) {
        setAlertContent("Registered email must be provided.");
      } else if (error.code === "UserNotFoundException") {
        setAlertContent(
          "User is not found. Try again with a registered email, or sign up below to create an account."
        );
      } else if (error.code.length) {
        setAlertContent(error.code);
      } else if (error.log.length) {
        setAlertContent(error.code);
      }
      setAlert(true);
    }
  };

  const reset = async (e: any) => {
    e.preventDefault();
    try {
      // Collect confirmation code and new password, then
      const success = await Auth.forgotPasswordSubmit(email, code, password);

      if (success) {
        const user = await Auth.signIn(email, password);
        console.log(user);
        props.onLogIn();
        handleNav("/");
      } else {
        console.log(success);
      }
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (!email || !email.length) {
        setAlertContent("Username must be provided.");
      } else if (!code || !code.length) {
        setAlertContent("Confirmation code must be provided.");
      } else if (!password || !password.length) {
        setAlertContent("Password must be provided.");
      } else if (error.code === "UserNotFoundException") {
        setAlertContent(
          "User is not found. Try again with your registered email, or sign up below to create an account."
        );
      } else if (error.code.length) {
        setAlertContent(error.code);
      } else if (error.log.length) {
        setAlertContent(error.code);
      }
      setAlert(true);
    }
  };

  return (
    <>
      <Banner pageTitle="Reset Password" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} md={7}>
          {alert ? (
            <Alert
              severity="error"
              className={styles.alert}
              onClose={() => {
                setAlert(false);
              }}
            >
              {alertContent}
            </Alert>
          ) : (
            <>
              <Box className={styles.box} />
            </>
          )}
          {!codeSent && (
            <Paper elevation={2} className={styles.paper}>
              <Typography variant="h5" className={styles.title}>
                Click to send a reset code to your email.
              </Typography>
              <TextField
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <Button
                color="primary"
                variant="contained"
                onClick={sendCode}
                className={styles.button}
              >
                Send reset code
              </Button>
            </Paper>
          )}
          {codeSent && (
            <Paper elevation={2} className={styles.paper}>
              <Typography variant="h5" className={styles.title}>
                Enter your reset code and your new password.
              </Typography>
              <TextField
                type="text"
                placeholder="confirmation code"
                onChange={(e) => setCode(e.target.value)}
                className={styles.input}
              />
              <TextField
                type="password"
                placeholder="new password"
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />

              <Button color="primary" variant="contained" onClick={reset} className={styles.button}>
                Change password{" "}
              </Button>
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Forgot;
