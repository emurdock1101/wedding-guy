import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { Storage } from "@aws-amplify/storage";
import { Auth } from "aws-amplify";
import { getPercentiles } from "../util";
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
}

const Submit: React.FC<SubmitProps> = (props: SubmitProps) => {
  const percentiles: Map<string, number> = getPercentiles();

  const processResults = async () => {
    const email = await Auth.currentAuthenticatedUser();

    console.log(JSON.stringify(email));
    console.log(JSON.stringify([percentiles]));

    // const { key } = await Storage.put(`private/${email}/results`, JSON.stringify(percentiles));
  };

  const styles = useStyles();
  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8}>
              <Typography variant="h4">
                You have completed the Personality+ personality assessment.
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
                <Button color="primary" variant="contained" onClick={processResults}>
                  SUBMIT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Submit;
