import { makeStyles, TextField, Button, Grid, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import { Auth } from "aws-amplify";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
interface LoginProps {
  onLogIn: () => void;
}

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      paddingLeft: 30,
      paddingRight: 30,
    },
    button: {
      minWidth: "20%",
      margin: 30,
    },
    thirdTitle: {
      fontSize: 25,
      fontWeight: 300,
      font: "Monaco",
      margin: 30,
    },
    paper: {
      padding: 30,
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
      const user = await Auth.signIn(username, password);
      console.log(user)
      props.onLogIn();
      handleNav("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Banner pageTitle="Log In" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} md={7}>
          <Paper elevation={2} className={styles.paper}>
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
            <Button color="primary" variant="contained" onClick={logIn} className={styles.button}>
              LOG IN
            </Button>
            <Typography className={styles.thirdTitle}>
              Don't have an account?{" "}
              <Link className={styles.plus} to={"/signup"}>
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
