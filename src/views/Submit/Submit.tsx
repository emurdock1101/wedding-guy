import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "60px",
    textAlign: "center",
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
      <Grid container justify="center" alignItems="center" spacing={4} className={styles.info}>
        <Grid item xs={12}>
          <Typography variant="h4">You have completed the test.</Typography>
          <br></br>
          <Typography variant="h4">Click Submit to view your results.</Typography>
        </Grid>
        <Grid item>
          <Button color="default" variant="outlined" onClick={props.prevStep}>
            BACK TO TEST
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={props.nextStep}>
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Submit;
