import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import PageShell from "../components/PageShell";

interface AboutProps {}

const About: React.FC<AboutProps> = (props: AboutProps) => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      bottom: 0,
      position: "absolute",
      width: "100%",
    },
    container: {
      minHeight: "100vh" /* will cover the 100% of viewport */,
      overflow: "hidden",
      display: "block",
      position: "relative",
      paddingBottom: 120,
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
    <div className={styles.container}>
      <PageShell pageTitle="Our Team" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10}>
          <Grid container spacing={10} justify="center">
            <Grid item xs={10} sm={9} md={5}>
              <AboutCard member="elliot" />
            </Grid>
            <Grid item xs={10} sm={9} md={5}>
              <AboutCard member="patrick" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
