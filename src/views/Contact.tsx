import { Facebook, Instagram, Mail, Phone, Twitter } from "@material-ui/icons";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Banner from "../components/Banner";

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const useStyles = makeStyles((theme) => ({
    facebook: {
      fontSize: isMobile ? 40 : 60,
      "&:hover": {
        color: theme.palette.primary.main,
      },
      marginRight: isMobile ? 30 : 60,
      color: theme.palette.info.main,
    },
    phoneLink: {
      marginTop: 40,
      display: "flex",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      color: theme.palette.info.main,
      justifyItems: "middle",
      width: 310,
    },
    reachOut: {
      marginTop: 20,
    },
    phone: {
      fontSize: 35,
      marginRight: 20,
    },
    number: {
      fontSize: 25,
    },
    socialLinks: {
      marginLeft: -10,
      marginTop: 60,
    },
    paper: {
      padding: 40,
      color: theme.palette.info.main,
      borderLeft: `6px solid #111840`,
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
        <Grid item xs={12} sm={11} lg={10} style={{ padding: 15 }}>
          <Paper elevation={2} className={styles.paper} style={{ borderRadius: "10px" }}>
            <Typography variant="h4">How can we help?</Typography>
            <Typography variant="h6" className={styles.reachOut}>
              Ask about the Personality+ test or our data-driven psychological coaching services.{" "}
            </Typography>
            <a href="mailto:discoverpersonalityplus@gmail.com" className={styles.phoneLink}>
              <Mail className={styles.phone} />
              <Typography variant="h5" className={styles.number}>
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
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
