import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import HeaderDrawer from "../components/HeaderDrawer";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "15px",
    marginTop: 30,
  },
  buttons: {
    marginTop: 60,
  },
  buttonOne: {
    marginRight: 25,
  },
}));

interface SubmitProps {
  prevStep: () => void;
  nextStep: () => void;
}

const Submit: React.FC<SubmitProps> = (props: SubmitProps) => {
  const styles = useStyles();
  return (
    <div>
      <HeaderDrawer />
      <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8}>
              <Typography variant="h4">
                You have completed the Big 5 10 Aspects personality assessment.
              </Typography>
              <br></br>
              <Typography variant="h4">Click submit below to see your results.</Typography>
              <div className={styles.buttons}>
                <Button
                  color="default"
                  variant="outlined"
                  onClick={props.prevStep}
                  className={styles.buttonOne}
                >
                  BACK TO TEST
                </Button>
                <Button color="primary" variant="contained" onClick={props.nextStep}>
                  SUBMIT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Submit;
