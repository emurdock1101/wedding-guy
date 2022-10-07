import { Aspect, Ocean } from "../constants/schema";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Interpretations from "../components/Interpretations";
import OceanAccordion from "../components/OceanAccordion";
import ReactApexChart from "react-apexcharts";
import ResultTable from "../components/ResultTable";
import { aspectOptions } from "../constants/aspectSpecs";
import { getPercentiles } from "../util";
import { oceanOptions } from "../constants/oceanSpecs";
import { theme } from "../theme";

interface ResultsProps {}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    subheading: {
      textAlign: "center",
      color: "white",
      padding: "10px",
      marginBottom: "10px",
      fontSize: isMobile ? 60 : 80,
    },
    info: {
      marginBottom: "20px",
      fontSize: 18,
      color: theme.palette.info.main,
    },
    explanation: {
      padding: "20px",
      marginBottom: "50px", //this needs change if anything changes - should line up with table
    },
    accordion: {
      marginBottom: "20px",
    },
    interpretations: {
      marginBottom: "45px", //Not sure why this isn't the same pixel ratio as others
    },
    titlePaper: {
      backgroundColor: "#111840", // navy blue
      minHeight: 200,
    },
    interpretationTitle: {
      marginTop: 80,
      marginBottom: 80,
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

  const percentiles: Map<string, number> = getPercentiles();

  const Openness: number = percentiles.get(Ocean.Openness.toString()) ?? 99;
  const AestheticOpenness: number = percentiles.get(Aspect.AestheticOpenness.toString()) ?? 99;
  const Industriousness: number = percentiles.get(Aspect.Industriousness.toString()) ?? 99;

  const Conscientiousness: number = percentiles.get(Ocean.Conscientiousness.toString()) ?? 99;
  const Interest: number = percentiles.get(Aspect.Interest.toString()) ?? 99;
  const Orderliness: number = percentiles.get(Aspect.Orderliness.toString()) ?? 99;

  // fake data
  const Extraversion: number = percentiles.get(Ocean.Extraversion.toString()) ?? 99;
  const Enthusiasm: number = percentiles.get(Aspect.Enthusiasm.toString()) ?? 99;
  const Assertiveness: number = percentiles.get(Aspect.Assertiveness.toString()) ?? 99;

  const Agreeableness: number = percentiles.get(Ocean.Agreeableness.toString()) ?? 99;
  const Compassion: number = percentiles.get(Aspect.Compassion.toString()) ?? 99;
  const Politeness: number = percentiles.get(Aspect.Politeness.toString()) ?? 99;

  const Neuroticism: number = percentiles.get(Ocean.Neuroticism.toString()) ?? 99;
  const Withdrawal: number = percentiles.get(Aspect.Withdrawal.toString()) ?? 99;
  const Volatility: number = percentiles.get(Aspect.Volatility.toString()) ?? 99;

  // data for aspects chart
  const aspectSeries = [
    {
      data: [Enthusiasm, Withdrawal, Compassion, Industriousness, AestheticOpenness],
    },
    {
      data: [Assertiveness, Volatility, Politeness, Orderliness, Interest],
    },
  ];

  // data for ocean chart
  const oceanSeries = [
    {
      data: [Extraversion, Neuroticism, Agreeableness, Conscientiousness, Openness],
    },
  ];

  return (
    <div>
      <Banner pageTitle="Results and Explanation" />
      <Grid container spacing={6} justify="center" alignItems="flex-start">
        <Grid item xs={12} sm={11} lg={5}>
          <Paper elevation={2} className={styles.explanation} style={{ borderRadius: "10px" }}>
            <Typography variant="subtitle1" className={styles.info}>
              Your results are shown in the table and in the bar charts below.{" "}
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              Remember that each personality trait and aspect and your relative position with
              respect to them has advantages and disadvantages. It is for that reason that variation
              exists in the human population: there is a niche for each personality configuration.
              Much of what constitutes success in life is therefore the consequence of finding the
              place in relationships, work and personal commitment that corresponds to your unique
              personality structure. Good luck with your personality journey!
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              Note also that if you find that the descriptions harsher than you might consider
              appropriate this may mean that you were more self-critical than necessary when
              completing the questions. Remember, the results are based on your own self-report,
              compared to that of others. This can occur if you were feeling temporarily or
              chronically unhappy or anxious, or hungry, angry or judgmental when you completed the
              questions.
            </Typography>
          </Paper>
          <div className={styles.accordion}>
            <OceanAccordion />
          </div>
        </Grid>
        <Grid item xs={12} sm={11} lg={5}>
          <ResultTable percentiles={percentiles} />
        </Grid>
        <Grid item xs={12} sm={11} lg={5}>
          <Paper elevation={2} style={{ borderRadius: "10px" }}>
            <ReactApexChart options={oceanOptions} series={oceanSeries} type="bar" height={550} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={11} lg={5}>
          <Paper elevation={2} style={{ borderRadius: "10px" }}>
            <ReactApexChart options={aspectOptions} series={aspectSeries} type="bar" height={550} />
          </Paper>
        </Grid>
        <Grid item xs={12} className={styles.interpretationTitle}>
          <Banner pageTitle="Interpretation of Results" />
        </Grid>
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.interpretations} style={{ borderRadius: "10px" }}>
            <Interpretations
              oceanName={Ocean.Extraversion}
              oceanScore={Extraversion}
              aspect1Name={Aspect.Enthusiasm}
              aspect1Score={Enthusiasm}
              aspect2Name={Aspect.Assertiveness}
              aspect2Score={Assertiveness}
              hex={theme.palette.success.main}
              index={2}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations} style={{ borderRadius: "10px" }}>
            <Interpretations
              oceanName={Ocean.Neuroticism}
              oceanScore={Neuroticism}
              aspect1Name={Aspect.Withdrawal}
              aspect1Score={Withdrawal}
              aspect2Name={Aspect.Volatility}
              aspect2Score={Volatility}
              hex={theme.palette.secondary.main}
              index={4}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations} style={{ borderRadius: "10px" }}>
            <Interpretations
              oceanName={Ocean.Agreeableness}
              oceanScore={Agreeableness}
              aspect1Name={Aspect.Compassion}
              aspect1Score={Compassion}
              aspect2Name={Aspect.Politeness}
              aspect2Score={Politeness}
              hex={theme.palette.primary.main}
              index={3}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations} style={{ borderRadius: "10px" }}>
            <Interpretations
              oceanName={Ocean.Conscientiousness}
              oceanScore={Conscientiousness}
              aspect1Name={Aspect.Industriousness}
              aspect1Score={Industriousness}
              aspect2Name={Aspect.Orderliness}
              aspect2Score={Orderliness}
              hex={theme.palette.warning.main}
              index={1}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations} style={{ borderRadius: "10px" }}>
            <Interpretations
              oceanName={Ocean.Openness}
              oceanScore={Openness}
              aspect1Name={Aspect.AestheticOpenness}
              aspect1Score={AestheticOpenness}
              aspect2Name={Aspect.Interest}
              aspect2Score={Interest}
              hex={theme.palette.error.main}
              index={0}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
