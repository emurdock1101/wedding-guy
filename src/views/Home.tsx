import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";

import HeaderDrawer from "../components/HeaderDrawer";
import eyeOpen from "../images/eyeopen.mp4";
import glowface from "../images/glowface.png";
import rubix from "../images/rubix.jpeg";
import { useNavigate } from "react-router-dom";

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
    color: theme.palette.primary.main,
  },
  rightSide: {
    position: "absolute",
    top: "30%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    textAlign: "right",
    // border: "white solid 1px",
    minWidth: 600
  },
  mainTitle: {
    color: theme.palette.common.white,
    marginBottom: "30px",
    fontSize: "3vw"
  },
  secondTitle: {
    color: theme.palette.common.white,
    marginBottom: "30px",
  },
  video: {
    height: "700px",
    width: "100%",
    objectFit: "cover",
  },
  buyNowButton: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    color: theme.palette.common.white,
    width: "320px",
    height: "60px",
    borderRadius: "30px",
    marginTop: "30px"
  },
  p: {
    textAlign: "center",
  },
  jumbotron: {
    height: "700px",
  },
  glowface: {
    maxWidth: "90%",
    padding: "5%",
  },
  openingBlurb: {
    marginRight: "-80px",
    textAlign: "center",
  },
  blurbText: {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingBottom: "120px",
    fontSize: "20px",
  },
  imgBox: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    marginBottom: 100,
  },
}));

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <Grid container justify="center" alignItems="center" className={styles.container}>
      <Grid item xs={12}>
        <HeaderDrawer />
      </Grid>
      <Grid item xs={12} className={styles.jumbotron}>
        <div className={styles.rightSide}>
          <Typography variant="h1" className={styles.mainTitle}>
            Personality <span className={styles.plus}>+</span>
          </Typography>
          <Typography variant="h3" className={styles.secondTitle}>
            Personality Assessment
          </Typography>
          <Button variant="contained" onClick={startQuiz} className={styles.buyNowButton}>
            BUY NOW
          </Button>
        </div>
        {/* <video loop autoPlay muted className={styles.video}>
          <source src={eyeOpen} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src={rubix} className={styles.video}></img>
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
            <Typography variant="subtitle1">
              Is an assessment based on the Five Factor Model of personality. Also known as the
              Big-5, it is the only atheoretical, empirical model of personality within psychology.
              This assessment uses the Big Five 10 Aspects Scale.
            </Typography>
          </div>

          
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
