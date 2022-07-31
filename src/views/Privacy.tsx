import { Grid, Typography, makeStyles } from "@material-ui/core";

import PageShell from "../components/PageShell";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
  },
  info: {
    marginTop: 80,
  },
}));

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = (props: PrivacyProps) => {
  const styles = useStyles();
  return (
    <div>
      <Grid container justify="center" alignItems="center" className={styles.container}>
        <PageShell pageTitle="Privacy" />

        <Grid item xs={10} sm={8} lg={6}>
          <Typography variant="subtitle1" className={styles.info}>
            Part of the information you share on our website is stored and used. We collect test
            results, gender, and time of test submission. Your browser info, IP address, and
            fingerprint are not stored.
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            Google Analytics measures traffic to the site and how users interact the site.
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            No personal data is sold or shared with anyone. Never have, never will.
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            If you have any questions about this privacy policy, please reach out on our contact
            page.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Privacy;
