import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

import Banner from "../components/Banner";
import { useEffect } from "react";

export const useStyles = makeStyles((theme) => ({
  info: {
    marginTop: 30,
    fontSize: 20,
  },
  top: {
    fontSize: 20,
  },
  paper: {
    padding: 20,
    color: theme.palette.info.main,
    borderLeft: `6px solid #111840`,
    borderRadius: 10
  },
  footer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  container: {
    padding: 0
  },
}));

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = (props: PrivacyProps) => {
  const styles = useStyles();

  useEffect(() => {
    document?.querySelector("body")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Banner pageTitle="Privacy" />
      <Grid container justify="center" alignItems="center" className={styles.container}>
        <Grid item xs={10} sm={11} lg={10}>
          <Paper elevation={2} className={styles.paper}>
            <Typography variant="subtitle1" className={styles.top}>
              Part of the information you share on our website is stored and used. We collect your email and test
              results. Your credit card info, browser info, IP address, and
              fingerprint are not stored.
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              No personal data is sold or shared with anyone. Never have, never will.
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              If you have any questions about this privacy policy, please reach out on our contact
              page.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Privacy;
