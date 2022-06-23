import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import eyeOpen from "../../images/eyeopen.mp4";
import glowface from "../../images/glowface.png";

// import { useStyles } from "./styles";

export const useStyles = makeStyles((theme) => ({
  h1: {
    color: "black",
  },
  h2: {
    color: "black",
  },
  h3: {
    color: "black",
  },
  h4: {
    color: "black",
  },
  h5: {
    color: "black",
  },
  plus: {
    color: theme.palette.lime,
  },
  centered: {
    position: "absolute",
    zIndex: "1",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  smallTitle: {
    color: theme.palette.cream,
    fontSize: "50px",
    marginBottom: "30px",
  },
  vidText: {
    color: theme.palette.cream,
    fontSize: "100px",
  },
  video: {
    height: "700px",
    width: "100%",
    objectFit: "cover",
  },
  buyNowButton: {
    top: "60px",
    backgroundColor: theme.palette.lime,
    color: theme.palette.black,
    width: "320px",
    height: "60px",
    borderRadius: "30px",
  },
  p: {
    textAlign: "center",
  },
  jumbotron: {
    height: "700px",
  },
  glowface: {
    maxWidth: "90%",

    // border: `40px solid ${theme.palette.lime}`,
    padding: "5%",
  },
  openingBlurb: {
    border: `1px solid black`,
    paddingTop: "40%",
    marginRight: "-80px",
    textAlign: "center",
  },
  blurbText: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingBottom: "120px",
    paddingTop: "60px",
    fontSize: "20px"
  },
  imgBox: {
    backgroundColor: theme.palette.lime,
  },
}));

function Home() {
  const styles = useStyles();

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className={styles.jumbotron}>
          <div className={styles.centered}>
            <Typography variant="h4" className={styles.smallTitle}>
              Personality <span className={styles.plus}>+</span>
            </Typography>
            <Typography variant="h1" className={styles.vidText}>
              Discover Yourself for a better You
            </Typography>
            <Button variant="contained" className={styles.buyNowButton}>
              Buy Now
            </Button>
          </div>
          <video loop autoPlay muted className={styles.video}>
            <source src={eyeOpen} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div>
            <Box className={styles.imgBox}>
              <img src={glowface} alt="glowing profile" className={styles.glowface}></img>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.openingBlurb}>
            <Typography variant="h2">Personality+</Typography>
            <div className={styles.blurbText}>
              <Typography variant="p">
                Is an assessment based on the Five Factor Model of personality. Also known as the
                Big-5, it is the only atheoretical, empirical model of personality within
                psychology. This assessment uses the Big Five 10 Aspects Scale.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
