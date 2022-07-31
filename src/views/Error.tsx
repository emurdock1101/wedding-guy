import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import PageShell from "../components/PageShell";
import { useNavigate } from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
  },
  info: {
    marginTop: 80,
    padding: 15,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 80,
  },
}));

interface ErrorProps {}

const Error: React.FC<ErrorProps> = (props: ErrorProps) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const handleNav = (path: string) => {
    navigate(path, { replace: true });
  };
  return (
    <div>
      <Grid container justify="center" alignItems="center" className={styles.container}>
        <PageShell pageTitle="404 Error" />

        <Grid item xs={10} sm={8} className={styles.info}>
          <Typography variant="h4">
            We're guessing this isn't the page you wanted. Sorry about that.{" "}
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="h4">
            Click below to return home or select a page from the sidebar.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center" className={styles.buttonContainer}>
            <Grid item xs={1}>
              <Button color="default" variant="contained" onClick={() => handleNav("/")}>
                Return to home
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Error;
