import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

import PageShell from "../components/PageShell";

export const useStyles = makeStyles((theme) => ({
  info: {
    marginTop: 30,
    fontSize: 20,
  },
  top: {
    fontSize: 20,
  },
  paper: {
    padding: 40,
    color: theme.palette.info.main,
    borderLeft: `6px solid #111840`
  },
}));

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = (props: PrivacyProps) => {
  const styles = useStyles();
  return (
    <div>
      <PageShell pageTitle="Privacy" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.paper} style={{borderRadius:"10px"}}>
            <Typography variant="subtitle1" className={styles.top}>
              Part of the information you share on our website is stored and used. We collect test
              results, gender, and time of test submission. Your browser info, IP address, and
              fingerprint are not stored.
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              Google Analytics measures traffic to the site and how users interact the site.
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
    </div>
  );
};

export default Privacy;
