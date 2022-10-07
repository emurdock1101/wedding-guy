import { makeStyles, TextField, Button, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Auth } from "aws-amplify";

interface SignupProps {
  onSignUp: () => void;
}

const Signup = (props: SignupProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  const useStyles = makeStyles((theme) => ({
    plus: {
      color: theme.palette.primary.main,
    },
    input: {
      minWidth: "80%",
      marginBottom: 50,
      marginLeft: 50,
    },
    button: {
      minWidth: "20%",
      marginLeft: 50,
    },
    footer: {
      bottom: 0,
      position: "absolute",
      width: "100%",
    },
    form: {
      padding: isMobile ? 10 : 30,
    },
    thirdTitle: {
      fontSize: 30,
      fontWeight: 300,
      font: "Monaco",
      marginBottom: 50,
      marginTop: isMobile ? 100 : 0,
      marginLeft: 50,
    },
  }));

  const styles = useStyles();

  const signUp = async (e: any) => {
    e.preventDefault();
    try {
      const user = await Auth.signUp(username, password);
      console.log(user)
      props.onSignUp();
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Banner pageTitle="Sign up" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} md={7} className={styles.form}>
          <Typography className={styles.thirdTitle}>
            For a small fee, we steal your information {" "}
            <span className={styles.plus}>:)</span>
          </Typography>
          <TextField
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <br></br>
          <TextField
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <br></br>
          <Button color="primary" variant="contained" onClick={signUp} className={styles.button}>
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
