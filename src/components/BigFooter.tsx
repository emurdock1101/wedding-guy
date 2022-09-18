import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { useEffect, useState } from "react";

interface BigFooterProps {}

const BigFooter: React.FC<BigFooterProps> = (props: BigFooterProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    followUs: {
      color: "#111840",
      fontSize: isMobile ? 30 : 40,
    },
    box: {
      borderTop: `1px solid ${theme.palette.info.main}`,
    },
    row: {
      display: "block",
      marginTop: 40,
    },
    facebook: {
      fontSize: isMobile ? 60 : 80,
      border: "1x solid red",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      marginRight: 20,
      marginLeft: 20,
      color: theme.palette.info.main,
    },
    socialMedia: {
      textAlign: "center",
      paddingTop: 180,
      paddingBottom: 160,
    },
    copyright: {
      padding: 20,
      color: theme.palette.info.main,
      textAlign: isMobile ? "center" : "right",
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
          <div className={styles.socialMedia}>
            <Typography variant="h3" className={styles.followUs}>
              Follow us on social media
            </Typography>
            <div className={styles.row}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <Facebook className={styles.facebook} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <Instagram className={styles.facebook} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <Twitter className={styles.facebook} />
              </a>
            </div>
          </div>
          <Typography variant="subtitle1" className={styles.copyright}>
            © 2022 Personality+ All rights reserved.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BigFooter;
