import { Aspect, Ocean } from "../constants/schema";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import BigFooter from "../components/BigFooter";
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer";
import HeaderDrawer from "../components/HeaderDrawer";
import HomeCard from "../components/HomeCard";
import Loading from "../components/Loading";
import OceanBanner from "../components/OceanBanner";
import content from "../constants/content";
import prism from "../images/prism.jpeg";
import spiral from "../images/spiral.jpeg";
import { theme } from "../theme";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [isMedium, setIsMedium] = useState(window.innerWidth < 960);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 600);
  const [loading, setLoading] = useState(true);

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
      fontSize: isMedium ? "59px" : "80px",
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
    oceanRow: {
      marginTop: 60,
    },
    spiralBox: {
      backgroundColor: "white",
      minHeight: 920,
      width: "100%",
      marginTop: 120,
      backgroundImage: `url(${spiral})`,
      backgroundPosition: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    aboutTheTest: {
      marginTop: 100,
      color: theme.palette.info.main,
      padding: 30,
      backgroundColor: "white",
      opacity: 0.92,
      marginBottom: 100,
    },
    aboutTestTitle: {
      fontWeight: 900,
      font: "Monaco",
      minWidth: 380,
      fontSize: isMedium ? "40px" : "60px",
      opacity: 1,
    },
    aboutDesc: {
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 20,
    },
    big5: {
      marginTop: 50,
      marginBottom: 40,
    },
    oceanBanner: {
      marginBottom: 40,
    },
    big5Title: {
      fontSize: isMedium ? "40px" : "50px",
      fontWeight: 400,
      font: "Monaco",
      paddingLeft: isMedium || isSmall ? 20 : 0,
    },
    big5Desc: {
      font: "Monaco",
      marginBottom: 40,
      paddingLeft: isMedium ? 20 : 0,
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
      paddingBottom: 700,
    },
  }));

  const styles = useStyles();
  const navigate = useNavigate();

  const buyPage = () => {
    navigate("/buy");
  };

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsSmall(true);
    } else if (window.innerWidth < 724) {
      setIsSmall(false);
    } else if (window.innerWidth < 960) {
      setIsSmall(false);
      setIsMedium(true);
    } else {
      setIsSmall(false);
      setIsMedium(false);
    }
  };

  useEffect(() => {
    setLoading(false);
    window.addEventListener("resize", handleResize);
  });

  if (loading) {
    return <Loading />;
  } else
    return (
      <div className={styles.container}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <HeaderDrawer />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.titleOverlay}>
              <Typography variant="h1" className={styles.mainTitle}>
                Personality <span className={styles.plus}>+</span>
              </Typography>
              <Typography className={styles.secondTitle}>Discover a New You</Typography>
              <Button variant="contained" onClick={buyPage} className={styles.buyNowButton}>
                BUY NOW $9.99
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
                Why do you think or act the way you do? What moves you to feel emotions or stirs
                your desires? Better yet, can you change those things?
              </Typography>
              <Typography variant="subtitle1" className={styles.thirdTitleDescription}>
                Who we are stems from our personality, and Personality+ is an assessment based on
                the Big Five 10 Aspect Model of personality.
              </Typography>
              <Typography variant="subtitle1" className={styles.thirdTitleDescription}>
                Also known as the Five Factor Model or OCEAN, it is an empirical model of
                personality within psychology that reveals the core of your personality, your
                strengths, and areas you can grow.
              </Typography>
              <Typography variant="subtitle1" className={styles.thirdTitleDescription}>
                Discover a new you and start a new journey!
              </Typography>
            </div>
            <Grid
              container
              spacing={8}
              justify="center"
              alignItems="center"
              className={styles.oceanRow}
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
                    <Typography variant="h6" className={styles.aboutDesc}>
                      Length:
                    </Typography>
                    <Typography variant="subtitle1" className={styles.aboutDesc}>
                      The test takes 10 - 20 minutes and consists of 100 questions.
                    </Typography>
                    <Typography variant="h6" className={styles.aboutDesc}>
                      Results:
                    </Typography>
                    <Typography variant="subtitle1" className={styles.aboutDesc}>
                      {content["aboutTheTest"]["results"]}
                    </Typography>
                    <Typography variant="h6" className={styles.aboutDesc}>
                      Background:
                    </Typography>
                    <Typography variant="subtitle1" className={styles.aboutDesc}>
                      {content["aboutTheTest"]["background"]}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={11}>
            <div className={styles.big5}>
              <Typography className={styles.big5Title}>Big 5 Traits and 10 Aspects</Typography>
              <br></br>
              <Typography variant={"subtitle1"} className={styles.big5Desc}>
                Your results will explain your unique personality as it relates to the Big-5 and its
                10 aspects, which are 2 subcategories for each of the 5 dimensions. These categories
                and subcategories are listed below.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={11} className={styles.oceanBanner}>
            <OceanBanner
              ocean={Ocean.Extraversion}
              aspect1={Aspect.Enthusiasm}
              aspect2={Aspect.Assertiveness}
              hex={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} sm={11} className={styles.oceanBanner}>
            <OceanBanner
              ocean={Ocean.Neuroticism}
              aspect1={Aspect.Withdrawal}
              aspect2={Aspect.Volatility}
              hex={theme.palette.secondary.main}
            />
          </Grid>
          <Grid item xs={12} sm={11} className={styles.oceanBanner}>
            <OceanBanner
              ocean={Ocean.Agreeableness}
              aspect1={Aspect.Compassion}
              aspect2={Aspect.Politeness}
              hex={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} sm={11} className={styles.oceanBanner}>
            <OceanBanner
              ocean={Ocean.Conscientiousness}
              aspect1={Aspect.Industriousness}
              aspect2={Aspect.Orderliness}
              hex={theme.palette.warning.main}
            />
          </Grid>
          <Grid item xs={12} sm={11} className={styles.oceanBanner}>
            <OceanBanner
              ocean={Ocean.Openness}
              aspect1={Aspect.AestheticOpenness}
              aspect2={Aspect.Interest}
              hex={theme.palette.error.main}
            />
          </Grid>
        </Grid>
        <div className={styles.footer}>
          <BigFooter />
        </div>
      </div>
    );
};

export default Home;
