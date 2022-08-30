import { Grid, makeStyles } from "@material-ui/core";

import FaqsAccordion from "../components/FaqsAccordion";
import PageShell from "../components/PageShell";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
  },
  info: {
    marginTop: 30,
    fontSize: 20,
  }
}));

interface FAQsProps {}

const FAQs: React.FC<FAQsProps> = (props: FAQsProps) => {
  const styles = useStyles();
  return (
    <div>
      <PageShell pageTitle="Frequently Asked Questions" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10}>
          <FaqsAccordion />
        </Grid>
      </Grid>
    </div>
  );
};

export default FAQs;
