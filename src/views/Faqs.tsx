import { Grid, makeStyles } from "@material-ui/core";

import FaqsAccordion from "../components/FaqsAccordion";
import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import { useEffect } from "react";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh" /* will cover the 100% of viewport */,
    overflow: "hidden",
    display: "block",
    position: "relative",
    paddingBottom: 120,
  },
  footer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
}));

interface FAQsProps {}

const FAQs: React.FC<FAQsProps> = (props: FAQsProps) => {
  const styles = useStyles();

  useEffect(() => {
    document?.querySelector("body")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.container}>
      <PageShell pageTitle="Frequently Asked Questions" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10} style={{padding: 15}}>
          <FaqsAccordion />
        </Grid>
      </Grid>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default FAQs;
