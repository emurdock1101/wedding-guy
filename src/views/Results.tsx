import { Aspect, Ocean } from "../constants/schema";
import { Button, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Interpretations from "../components/Interpretations";
import OceanAccordion from "../components/OceanAccordion";
import ReactApexChart from "react-apexcharts";
import ResultTable from "../components/ResultTable";
import { aspectOptions } from "../constants/aspectSpecs";
import { getPercentiles } from "../util";
import { oceanOptions } from "../constants/oceanSpecs";
import { theme } from "../theme";
import { white } from "material-ui/styles/colors";

interface ResultsProps {}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    top: {
      marginTop: "10px",
    },
    subheading: {
      textAlign: "center",
      color: "white",
      padding: "10px",
      marginBottom: "10px",
      marginTop: "20px",
      fontSize: isMobile ? 60 : 80,
    },
    info: {
      marginBottom: "20px",
      fontSize: 18,
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
    },
    pdf: {
      width: "100%",
      height: "50px",
    },
    pdfPaper: {
      marginBottom: "10px",
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
  const Intellect: number = percentiles.get(Aspect.Intellect.toString()) ?? 99;
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
      data: [AestheticOpenness, Industriousness, Enthusiasm, Compassion, Withdrawal],
    },
    {
      data: [Intellect, Orderliness, Assertiveness, Politeness, Volatility],
    },
  ];

  // data for ocean chart
  const oceanSeries = [
    {
      data: [Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism],
    },
  ];

  return (
    <div id="resultsPdf">
      <Grid container spacing={6} justify="center" alignItems="flex-start" className={styles.top}>
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.titlePaper}>
            <Typography variant="h3" className={styles.subheading}>
              Results and Explanation
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.pdfPaper}>
            <Button className={styles.pdf}>Click to download a PDF of this page</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={11} lg={5}>
          <Paper elevation={2} className={styles.explanation}>
            <Typography variant="subtitle1" className={styles.info}>
              Your results are shown in the table and in the bar charts below.{" "}
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              The Big 5 traits are Openness, Conscientiousness, Extraversion, Agreeableness, and
              Compassion (think "OCEAN"). Each of the Big 5 traits is composed of two subcategories
              known as the 10 Aspects.
            </Typography>
            <Typography variant="subtitle1" className={styles.info}>
              Each score is shown as a percentile of the population. This means a score of 60% shows
              that you are higher in this trait than 60% of people. The meaning of each trait can be
              different from the trait name's common use, so please be sure to read the
              interpretation section below.
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
          <Paper elevation={2}>
            <ReactApexChart options={oceanOptions} series={oceanSeries} type="bar" height={550} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={11} lg={5}>
          <Paper elevation={2}>
            <ReactApexChart options={aspectOptions} series={aspectSeries} type="bar" height={550} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.titlePaper}>
            <Typography variant="h3" className={styles.subheading}>
              Interpretation of Results
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={11} lg={10}>
          <Paper elevation={2} className={styles.interpretations}>
            <Interpretations
              oceanName={"Openness"}
              oceanScore={Openness}
              aspect1Name={"Openness"}
              aspect1Score={AestheticOpenness}
              aspect2Name={"Intellect"}
              aspect2Score={Intellect}
              hex={theme.palette.error.main}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations}>
            <Interpretations
              oceanName={"Conscientiousness"}
              oceanScore={Conscientiousness}
              aspect1Name={"Industriousness"}
              aspect1Score={Industriousness}
              aspect2Name={"Orderliness"}
              aspect2Score={Orderliness}
              hex={theme.palette.warning.main}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations}>
            <Interpretations
              oceanName={"Extraversion"}
              oceanScore={Extraversion}
              aspect1Name={"Enthusiasm"}
              aspect1Score={Enthusiasm}
              aspect2Name={"Assertiveness"}
              aspect2Score={Assertiveness}
              hex={theme.palette.success.main}
            />
          </Paper>
          <Paper elevation={2} className={styles.interpretations}>
            <Interpretations
              oceanName={"Agreeableness"}
              oceanScore={Agreeableness}
              aspect1Name={"Compassion"}
              aspect1Score={Compassion}
              aspect2Name={"Politeness"}
              aspect2Score={Politeness}
              hex={theme.palette.primary.main}
            />
          </Paper>
          <Paper elevation={2}>
            <Interpretations
              oceanName={"Neuroticism"}
              oceanScore={Neuroticism}
              aspect1Name={"Withdrawal"}
              aspect1Score={Withdrawal}
              aspect2Name={"Volatility"}
              aspect2Score={Volatility}
              hex={theme.palette.secondary.main}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
