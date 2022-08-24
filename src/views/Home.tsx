import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";
import { DriveEta } from "@material-ui/icons";
import HeaderDrawer from "../components/HeaderDrawer";
import HomeCard from "../components/HomeCard";
import content from "../constants/content";
import prism from "../images/prism.jpeg";
import spiral from "../images/spiral.jpeg";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [isMedium, setIsMedium] = useState(window.innerWidth < 960);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 600);
  const [isDiff, setIsDiff] = useState(window.innerWidth < 724);

  const useStyles = makeStyles((theme) => ({
    plus: {
      color: theme.palette.primary.main,
    },
    titleOverlay: {
      position: "absolute",
      top: 400,
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
    mainTitle: {
      color: theme.palette.common.white,
      marginTop: 30,
      marginBottom: 30,
      fontSize: isMedium ? "60px" : "80px",
      fontWeight: 600,
      font: "Monaco",
      minWidth: 380,
      padding: 10,
    },
    secondTitle: {
      color: theme.palette.common.white,
      fontSize: isMedium ? "40px" : "50px",
      fontWeight: 300,
      font: "Monaco",
      padding: 10,
    },
    prismImage: {
      marginTop: isSmall ? -8 : 0,
      height: isMedium ? 800 : 910,
      width: "100%",
      objectFit: "cover",
    },
    buyNowButton: {
      marginTop: 200,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
      color: theme.palette.common.white,
      width: "320px",
      height: "60px",
      borderRadius: "30px",
    },
    thirdTitle: {
      fontSize: isMedium ? "40px" : "50px",
      fontWeight: 300,
      font: "Monaco",
      marginBottom: 20,
    },
    openingBlurb: {
      textAlign: "left",
      marginTop: 50,
      color: theme.palette.info.main,
    },
    thirdTitleDescription: {
      marginTop: 20,
    },
    cardsRow: {
      marginTop: 0,
    },
    spiralBox: {
      backgroundColor: "white",
      minHeight: 904,
      width: "100%",
      marginTop: 120,
      backgroundImage: `url(${spiral})`,
      backgroundPosition: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    aboutTheTest: {
      marginTop: 120,
      color: "black",
      padding: 10,
      backgroundColor: "white",
      opacity: 0.8,
    },
    aboutTestTitle: {
      fontWeight: 900,
      font: "Monaco",
      minWidth: 380,
      fontSize: isMedium ? "40px" : "60px",
      opacity: 1,
    },
  }));

  const styles = useStyles();
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsSmall(true);
    } else if (window.innerWidth < 724) {
      setIsSmall(false);
      setIsDiff(true);
    } else if (window.innerWidth < 960) {
      setIsDiff(false);
      setIsSmall(false);
      setIsMedium(true);
    } else {
      setIsDiff(false);
      setIsSmall(false);
      setIsMedium(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <HeaderDrawer />
      </Grid>
      <Grid item xs={12}>
        <div className={styles.titleOverlay}>
          <Typography variant="h1" className={styles.mainTitle}>
            Personality <span className={styles.plus}>+</span>
          </Typography>
          <Typography className={styles.secondTitle}>Personality assessment</Typography>
          <Button variant="contained" onClick={startQuiz} className={styles.buyNowButton}>
            BUY NOW
          </Button>
        </div>
        <img src={prism} className={styles.prismImage} alt="personality-prism"></img>
      </Grid>
      <Grid item xs={10} sm={11} md={10} lg={8}>
        <div className={styles.openingBlurb}>
          <Typography className={styles.thirdTitle}>
            Personality <span className={styles.plus}>+</span>
          </Typography>
          <Divider />
          <Typography variant="subtitle1" className={styles.thirdTitleDescription}>
            Is an assessment based on the Five Factor Model of personality. Also known as the Big-5
            or OCEAN, it is an empirical model of personality within psychology that displays your
            personality in five dimensions and ten aspects.
          </Typography>
        </div>
        <Grid
          container
          spacing={8}
          justify="center"
          alignItems="center"
          className={styles.cardsRow}
        >
          <Grid item xs={12} sm={11} md={4}>
            <HomeCard
              title="Why Take It?"
              description="Everyone has a unique personality that is a combination of 5 dimensions. Discovering how your personality has been shaped can help you understand who you are."
            />
          </Grid>
          <Grid item xs={12} sm={11} md={4}>
            <HomeCard
              title="Strengths"
              description="Personality+ shows natural strengths within your personality. Are you a leader? A healer? An Artist? Learn how to discover and unlock your hidden potential."
            />
          </Grid>
          <Grid item xs={12} sm={11} md={4}>
            <HomeCard
              title="Grow"
              description="Personality+ shows natural areas of growth and improvement. Discover how to change and how your emotions, behavior, thinking, and desires work together."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box className={styles.spiralBox}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={10}>
              <div className={styles.aboutTheTest}>
                <Typography variant="h2" className={styles.aboutTestTitle}>
                  About the test
                </Typography>
                <Typography variant="h6">Length:</Typography>
                <Typography variant="subtitle1">
                  There are 100 questions, which will take 15-30min to answer.
                </Typography>
                <Typography variant="h6">Results:</Typography>
                <Typography variant="subtitle1">{content["aboutTheTest"]["results"]}</Typography>
                <Typography variant="h6">Background:</Typography>
                <Typography variant="subtitle1">{content["aboutTheTest"]["background"]}</Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
