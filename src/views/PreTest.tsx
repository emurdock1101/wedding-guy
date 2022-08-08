import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import HeaderDrawer from "../components/HeaderDrawer";
import { useNavigate } from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "15px",
    marginTop: 30
  },
  buttons: {
    marginTop: 60
  },
  buttonOne: {
    marginRight: 25,
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
  const styles = useStyles();
  return (
    <div>
      <HeaderDrawer />
      <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8}>
              <Typography variant="h4">
                To ensure the most accurate results, before you begin the test:
              </Typography>
              <br></br>
              <Typography variant="h6">
                1. Make sure you've eaten recently and are not hungry.
              </Typography>
              <br></br>
              <Typography variant="h6">2. Make sure you're well-rested.</Typography>
              <br></br>
              <Typography variant="h6">
                3. Turn off any phones, tablets, or other devices that can serve as distractions.
              </Typography>
              <br></br>
              <Typography variant="h6">
                4. Locate to a quiet area with no other people around.
              </Typography>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Typography variant="h4">While taking the test:</Typography>
              <br></br>
              <Typography variant="h6">
                1. Don't spent too much time on any one question. If not sure of an answer, trust
                your instinct.
              </Typography>
              <br></br>
              <Typography variant="h6">2. Be as honest with yourself as you can.</Typography>
              <br></br>
              <div className={styles.buttons}>
                <Button color="default" variant="outlined" onClick={() => nav("/")} className={styles.buttonOne}>
                  BACK TO HOME
                </Button>
                <Button color="primary" variant="contained" onClick={props.nextStep}>
                  BEGIN ASSESSMENT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PreTest;
