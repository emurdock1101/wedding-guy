import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import AboutCard from "../components/AboutCard";
import PageShell from "../components/PageShell";

interface AboutProps {}

const About: React.FC<AboutProps> = (props: AboutProps) => {
  const useStyles = makeStyles((theme) => ({
    aboutCard: {
      // margin: 20,
    },
  }));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const styles = useStyles();
  return (
    <div>
      <PageShell pageTitle="Our Team" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10}>
          <Grid container spacing={10} justify="center">
            <Grid item xs={10} sm={9} md={5} className={styles.aboutCard}>
              <AboutCard member="elliot" />
            </Grid>
            <Grid item xs={10} sm={9} md={5} className={styles.aboutCard}>
              <AboutCard member="patrick" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
