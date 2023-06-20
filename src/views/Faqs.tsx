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
      <Banner pageTitle='Frequently Asked Questions' />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={10}>
          <FaqsAccordion />
        </Grid>
      </Grid>
    </>
  );
};

export default FAQs;
