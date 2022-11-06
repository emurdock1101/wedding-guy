import { Grid } from "@material-ui/core";
import { useEffect } from "react";

import AboutCard from "../components/AboutCard";
import Banner from "../components/Banner";

interface AboutProps {}

const About: React.FC<AboutProps> = (props: AboutProps) => {
  useEffect(() => {
    document?.querySelector("body")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Banner pageTitle="Our Team" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10}>
          <Grid container spacing={10} justify="center">
            <Grid item xs={11} sm={10} md={5}>
              <AboutCard member="patrick" />
            </Grid>
            <Grid item xs={11} sm={10} md={5}>
              <AboutCard member="elliot" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
