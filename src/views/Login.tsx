import {makeStyles, TextField, Button, Grid, Typography, Paper, Box} from '@material-ui/core';
import {useState} from 'react';
import {Auth} from 'aws-amplify';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import {useNavigate} from 'react-router-dom';

interface LoginProps {
  onLogIn: () => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, showAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  const useStyles = makeStyles((theme) => ({
    plus: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
    input: {
      minWidth: '100%',
      marginTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
    },
    button: {
      minWidth: '30%',
      margin: 20,
    },
    noAccount: {
      fontSize: 25,
      fontWeight: 300,
      font: 'Monaco',
      marginLeft: 20,
      marginTop: 30,
      marginBottom: 30,
    },
    paper: {
      padding: 20,
      marginBottom: 60,
      borderRadius: 10,
    },
    alert: {
      marginBottom: 15,
      border: '1px solid #EF5350',
    },
    box: {
      height: 50,
      marginBottom: 15,
    },
    forgot: {
      fontSize: 15,
      fontWeight: 300,
      font: 'Monaco',
      marginLeft: 20,
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
  }));

  const styles = useStyles();
  const navigate = useNavigate();

  // On clicking log in, redirect to Login page
  const handleNav = (path: string) => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
    }
    navigate(path);
  };

  const logIn = async (e: any) => {
    e.preventDefault();
    showAlert(false);
    try {
      await Auth.signIn(username, password);
      props.onLogIn();
      handleNav('/results');
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (!username || !username.length) {
        setAlertContent('Username must be provided.');
      } else if (!password || !password.length) {
        setAlertContent('Password must be provided.');
      } else if (error.code === 'UserNotFoundException') {
        setAlertContent(
          'User is not found. Try again with the correct credentials, or sign up below to create an account.',
        );
      } else if (error.code === 'NotAuthorizedException') {
        setAlertContent('Incorrect password or email.');
      } else if (error.code.length) {
        setAlertContent(error.code);
      } else if (error.log.length) {
        setAlertContent(error.code);
      }
      showAlert(true);
    }
  };

  return (
    <>
      <Banner pageTitle='Log In' />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={10} md={7}>
          {alert ? (
            <Alert
              severity='error'
              className={styles.alert}
              onClose={() => {
                showAlert(false);
              }}>
              {alertContent}
            </Alert>
          ) : (
            <>
              <Box className={styles.box} />
            </>
          )}
          <Paper elevation={2} className={styles.paper}>
            <TextField
              type='text'
              placeholder='email'
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
            <TextField
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <br></br>
            <br></br>
            <Link className={styles.forgot} to={'/reset'}>
              Forgot password?
            </Link>
            <br></br>
            <br></br>
            <Button color='primary' variant='contained' onClick={logIn} className={styles.button}>
              LOG IN
            </Button>
            <Typography className={styles.noAccount}>
              Don't have an account?{' '}
              <Link className={styles.plus} to={'/buy'}>
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
