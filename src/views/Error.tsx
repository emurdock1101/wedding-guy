import {Grid, Typography, makeStyles, Button} from '@material-ui/core';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Banner from '../components/Banner';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = (props: ErrorPageProps) => {
  const useStyles = makeStyles((theme) => ({
    buttonContainer: {
      marginTop: 60,
      marginBottom: 60,
    },
    buttonItem: {
      textAlign: 'center',
    },
    info: {
      textAlign: 'center',
    },
  }));
  const styles = useStyles();

  const navigate = useNavigate();
  const handleNav = (path: string) => {
    navigate(path, {replace: true});
  };

  useEffect(() => {
    document?.querySelector('body')?.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <Banner pageTitle='404 - Page Not Found' />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={10} className={styles.info}>
          <Typography variant='h5'>
            We're guessing this isn't the page you wanted. Sorry about that.
          </Typography>
          <br></br>
          <br></br>
          <Typography variant='h5'>
            Click below to return home or select a page from the sidebar.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            className={styles.buttonContainer}>
            <Grid item xs={4} sm={2} className={styles.buttonItem}>
              <Button color='default' variant='contained' onClick={() => handleNav('/')}>
                Go to home
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
