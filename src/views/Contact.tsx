import { Facebook, Instagram, Mail, Twitter } from "@material-ui/icons";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Banner from "../components/Banner";

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const useStyles = makeStyles((theme) => ({
    facebook: {
      fontSize: isMobile ? 37 : 50,
      "&:hover": {
        color: theme.palette.primary.main,
      },
      marginRight: isMobile ? 30 : 60,
      color: theme.palette.info.main,
    },
    emailLink: {
      marginTop: 20,
      display: "flex",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      color: theme.palette.info.main,
      justifyItems: "middle",
      width: 310,
    },
    help: {
      fontSize: isMobile ? 20 : 25
    },
    reachOut: {
      marginTop: 20,
      fontSize: isMobile ? 17 : 20
    },
    email: {
      fontSize: isMobile ? 17 : 20
    },
    socialLinks: {
      marginLeft: -10,
      marginTop: 60,
    },
    paper: {
      padding: 20,
      color: theme.palette.info.main,
      borderLeft: `6px solid #111840`,
      borderRadius: 10
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
    document?.querySelector("body")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const styles = useStyles();
  return (
    <>
      <Banner pageTitle="Contact Us" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10}>
          <Paper elevation={2} className={styles.paper}>
            <Typography variant="h5" className={styles.help}>How can we help?</Typography>
            <Typography variant="subtitle1" className={styles.reachOut}>
              Ask about the Personality+ test or our data-driven psychological coaching services.{" "}
            </Typography>
            <a href="mailto:discoverpersonalityplus@gmail.com" className={styles.emailLink}>
              <Typography variant="h5" className={styles.email}>
                discoverpersonalityplus@gmail.com
              </Typography>
            </a>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/DiscoverPersonalityPlus/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className={styles.facebook} />
              </a>
              <a
                href="https://instagram.com/discover_personalityplus"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className={styles.facebook} />
              </a>
              <a href="https://twitter.com/PersonalityB5" target="_blank" rel="noreferrer">
                <Twitter className={styles.facebook} />
              </a>
              <a href="mailto:discoverpersonalityplus@gmail.com">
                <Mail className={styles.facebook} />
              </a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
