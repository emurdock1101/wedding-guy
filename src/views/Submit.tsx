import { Button, Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import { Storage } from "@aws-amplify/storage";
import { Auth } from "aws-amplify";
import { getPercentiles } from "../util";
import { useNavigate } from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "15px",
    marginTop: 90,
  },
  buttons: {
    marginTop: 60,
  },
  buttonOne: {
    marginRight: 25,
  },
  text: {
    fontSize: 30,
  },
  paper: {
    padding: 30,
  },
}));

interface SubmitProps {
  prevStep: () => void;
  onComplete: () => void;
}

const Submit: React.FC<SubmitProps> = (props: SubmitProps) => {
  const navigate = useNavigate();
  const styles = useStyles();

  const processResults = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const email: string = user.attributes.email;
    const subId: string = user.attributes.sub;
    const percentiles: Record<string, number> = getPercentiles();

    Storage.configure({
      bucket: process.env.APP_bucket_name ?? "big5-amplify-test-results-bucket210923-dev",
      level: "private",
      region: process.env.APP_region ?? "us-east-1",
    });

    await Storage.put(`${email}-${subId}/${email}-results`, percentiles, {
      contentType: "application/json",
    });

    props.onComplete();
    navigate("/results");
  };

  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8}>
              <Paper elevation={2} className={styles.paper}>
                <Typography variant="h4" className={styles.text}>
                  You have completed the assessment.
                </Typography>
                <br></br>
                <Typography variant="h4" className={styles.text}>
                  If you are satisfied with your answers, submit below to see your results.
                </Typography>
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
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Submit;
