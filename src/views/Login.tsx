import { makeStyles, TextField, Button, Grid, Typography, Paper, Box } from "@material-ui/core";
import { useState } from "react";
import { Auth } from "aws-amplify";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

interface LoginProps {
  onLogIn: () => void;
}

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

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
  }));

  const styles = useStyles();
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
    }
    navigate(path, { replace: true });
  };

  const logIn = async (e: any) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      props.onLogIn();
      setAlert(true);
      handleNav("/");
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (!username || !username.length) {
        setAlertContent("Username must be provided.");
      } else if (!password || !password.length) {
        setAlertContent("Password must be provided.");
      } else if (error.code === "UserNotFoundException") {
        setAlertContent(
          "User is not found. Try again with the correct credentials, or sign up below to create an account."
        );
      } else if (error.code === "NotAuthorizedException") {
        setAlertContent(
          "Incorrect password. Try a different password with this email."
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
      <Banner pageTitle="Log In" />
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
          <Paper elevation={2} className={styles.paper}>
            <TextField
              type="text"
              placeholder="email"
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
            <TextField
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <Button color="primary" variant="contained" onClick={logIn} className={styles.button}>
              LOG IN
            </Button>
            <Link className={styles.forgot} to={"/reset"}>
              Forgot password?
            </Link>
            <Typography className={styles.thirdTitle}>
              Don't have an account?{" "}
              <Link className={styles.plus} to={"/buy"}>
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;