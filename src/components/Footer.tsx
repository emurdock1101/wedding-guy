import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { useEffect, useState } from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    box: {
      borderTop: "1px solid #111840",
    },
    row: {
      display: "flex",
      paddingTop: 30,
      paddingBottom: 30,
    },
    facebook: {
      fontSize: 32,
      "&:hover": {
        color: theme.palette.primary.main,
      },
      marginRight: 20,
      marginLeft: 20,
      color: "#111840",
    },
    copyright: {
      color: "#111840",
      textAlign: isMobile ? "center" : "right",
      padding: 20
    },
    socialMedia: {
      width: isMobile ? "100%" : "80%",
      textAlign: isMobile ? "center" : "left",
    },
  }));

  const styles = useStyles();

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

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Box className={styles.box}>
          {/* <div className={styles.row}>
            <div className={styles.socialMedia}>
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
            {!isMobile && (
              <Typography variant="subtitle1" className={styles.copyright}>
                © 2022 Personality+ All rights reserved
              </Typography>
            )}
          </div> */}

          <Typography variant="subtitle1" className={styles.copyright}>
            © 2022 Personality+ All rights reserved
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
