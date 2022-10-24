import { Button, Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  plus: {
    color: theme.palette.primary.main,
  },
  bigTitle: {
    fontWeight: 600,
    font: "Monaco",
    color: "#111840", //navy blue
  },
  paper: {
    borderRadius: 10,
    padding: 30,
  },
  secondTitle: {
    marginBottom: 40,
  },
  firstItem: {
    marginTop: 40,
  },
}));

interface PreTestProps {
  nextStep: () => void;
}

const PreTest: React.FC<PreTestProps> = (props: PreTestProps) => {
  const navigate = useNavigate();

  const nav = (path: string) => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
    }
    navigate(path);
  };

  useEffect(() => {
    sessionStorage.clear();
  });

  const styles = useStyles();
  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8}>
              <Paper elevation={2} className={styles.paper}>
                <Typography variant="h1" className={styles.bigTitle}>
                  Personality<span className={styles.plus}>+</span>
                </Typography>
                <Typography variant="h6" className={styles.secondTitle}>
                  Big 5 10 Aspects Personality Assessment
                </Typography>
                <Divider />
                <Typography variant="h5" className={styles.firstItem}>
                  What is the format of this test?
                </Typography>
                <br></br>
                <Typography variant="subtitle1">
                  You will be presented with 100 phrases, such as: “I am sad much of the time”. You
                  will then be asked to choose one of five options that indicates how much you agree
                  or disagree with the phrase as it applies to you.
                </Typography>
                <br></br>
                <Typography variant="h5">How many times can I take this test?</Typography>
                <br></br>
                <Typography variant="subtitle1">
                  You can only take the test once. A genuinely accurate personality test must be
                  taken and scored in a standardized manner to make it as similar to those of the
                  comparison group as possible. Furthermore, if you take the test, look at your
                  results, and then re-take it, your second results will be subject to biases
                  introduced by your now-expanded knowledge of your personality. That means you will
                  change your responses, likely distorting your answers.
                </Typography>
                <br></br>
                <Typography variant="h5">Before the Test:</Typography>
                <br></br>
                <Typography variant="subtitle1">
                  As you can only take the test once, you should answer the 100 questions carefully
                  and thoughtfully. Answer them so they describe you as you are, typically or on
                  average, in your day-to-day life. Please consider the following seriously:
                </Typography>
                <br></br>
                <Typography variant="subtitle1">
                  1. Make sure you've eaten recently and are not hungry.
                </Typography>
                <br></br>
                <Typography variant="subtitle1">2. Make sure you are well rested.</Typography>
                <br></br>
                <Typography variant="subtitle1">
                  3. If you are feeling unhappier or more anxious than usual, pick another time to
                  complete the questions.
                </Typography>
                <br></br>
                <Typography variant="subtitle1">
                  4. If you are currently depressed or suffering from an anxiety disorder, then your
                  results will be skewed unreasonably toward the negative, so it’s better to wait to
                  assess your personality until you are more stable in your emotional responses.
                </Typography>
                <br></br>
                <Typography variant="subtitle1">
                  5. Turn off any phones, tablets, or other devices that can serve as distractions.
                </Typography>
                <br></br>
                <Typography variant="subtitle1">6. Make sure you are not rushed.</Typography>
                <br></br>
                <Typography variant="subtitle1">
                  7. Locate to a quiet area with no other people around.
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h5">While taking the test:</Typography>
                <br></br>
                <Typography variant="subtitle1">
                  1. Don't spent too much time on any one question. If you are not sure of an
                  answer, trust your instinct.
                </Typography>
                <br></br>
                <Typography variant="subtitle1">
                  2. Be as honest with yourself as you can.
                </Typography>
                <br></br>
                <div className={styles.buttons}>
                  <Button
                    color="default"
                    variant="outlined"
                    onClick={() => nav("/")}
                    className={styles.buttonOne}
                  >
                    BACK TO HOME
                  </Button>
                  <Button color="primary" variant="contained" onClick={props.nextStep}>
                    BEGIN ASSESSMENT
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

export default PreTest;
