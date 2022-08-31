import { Facebook, Instagram, Mail, Phone, Twitter } from "@material-ui/icons";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import PageShell from "../components/PageShell";

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const useStyles = makeStyles((theme) => ({
    facebook: {
      fontSize: isMobile ? 60 : 80,
      border: "1x solid red",
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
      <PageShell pageTitle="Contact Us" />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.paper} style={{ borderRadius: "10px" }}>
            <Typography variant="h4">How can we help?</Typography>
            <Typography variant="h6" className={styles.reachOut}>
              Ask about the Personality+ Big 5 10 Aspects test or our data-driven psychological
              counseling services.{" "}
            </Typography>
            <a href="tel:15409999898" className={styles.phoneLink}>
              <Phone className={styles.phone} />
              <Typography variant="h5" className={styles.number}>
                {" "}
                +1-(540)-999-8989
              </Typography>
            </a>
            <a href="mailto:example@gmail.com" className={styles.phoneLink}>
              <Mail className={styles.phone} />
              <Typography variant="h5" className={styles.number}>
                example@gmail.com
              </Typography>
            </a>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com" target="_blank">
                <Facebook className={styles.facebook} />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <Instagram className={styles.facebook} />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <Twitter className={styles.facebook} />
              </a>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
