import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "15px",
    marginTop: 60,
  },
  buttons: {
    marginTop: 60,
  },
  buttonOne: {
    marginRight: 25,
  },
}));

interface BuyTestProps {}

const BuyTest: React.FC<BuyTestProps> = (props: BuyTestProps) => {
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
    <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={10} lg={7}>
            <Typography variant="h2">What's included for $9.99?</Typography>
            <br></br>
            <Typography variant="h6">
              1. 100-question scientifically-backed, peer-reviewed assessment of personality.
            </Typography>
            <br></br>
            <Typography variant="h6">
              2. In-depth analysis of results, specific to your scores.
            </Typography>
            <br></br>
            <Typography variant="h6">
              3. Discount offerings towards coaching services with Personality+ staff, where you can
              further learn about your behaviors and discover more about yourself.
            </Typography>
            <div className={styles.buttons}>
              <Button
                color="default"
                variant="outlined"
                onClick={() => nav("/")}
                className={styles.buttonOne}
              >
                BACK TO HOME
              </Button>
              <Button color="primary" variant="contained" onClick={() => nav("/signup")}>
                PURCHASE PERSONALITY+
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BuyTest;
