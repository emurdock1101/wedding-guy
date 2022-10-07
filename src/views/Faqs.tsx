import { Grid } from "@material-ui/core";

import FaqsAccordion from "../components/FaqsAccordion";
import Banner from "../components/Banner";
import { useEffect } from "react";

interface FAQsProps {}

const FAQs: React.FC<FAQsProps> = (props: FAQsProps) => {
  useEffect(() => {
    document?.querySelector("body")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Banner pageTitle="Frequently Asked Questions" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10} style={{ padding: 15 }}>
          <FaqsAccordion />
        </Grid>
      </Grid>
    </>
  );
};

export default FAQs;
