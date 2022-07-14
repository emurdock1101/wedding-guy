import { Aspect, Ocean } from "../constants/schema";
import { Button, Grid, Paper, Typography, makeStyles } from "@material-ui/core";

import Explanation from "../components/Explanation";
import OceanAccordion from "../components/OceanAccordion";
import ReactApexChart from "react-apexcharts";
import RecipeReviewCard from "../components/OceanCard";
import ResultTable from "../components/ResultTable";
import { aspectOptions } from "../constants/aspectSpecs";
import { getPercentiles } from "../util";
import { oceanOptions } from "../constants/oceanSpecs";

export const useStyles = makeStyles((theme) => ({
  subheading: {
    textAlign: "center",
    color: theme.palette.info.main,
    padding: "10px",
    marginBottom: "25px",
    marginTop: "25px",
  },
  chart: {
    // marginTop: "1vw",
  },
  info: {
    marginBottom: "20px",
    fontSize: 18,
  },
  explanation: {
    padding: "15px",
    marginBottom: "70px",
  },
  accordion: {
    marginBottom: "25px",
  },
}));

interface ResultsProps {}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const styles = useStyles();

  const percentiles: Map<string, number> = getPercentiles();

  const OpennessToExperience: number =
    percentiles.get(Ocean.OpennessToExperience.toString()) ?? 101;
  const Openness: number = percentiles.get(Aspect.Openness.toString()) ?? 101;
  const Industriousness: number = percentiles.get(Aspect.Industriousness.toString()) ?? 101;
  const Conscientiousness: number = percentiles.get(Ocean.Conscientiousness.toString()) ?? 101;
  const Intellect: number = percentiles.get(Aspect.Intellect.toString()) ?? 101;
  const Orderliness: number = percentiles.get(Aspect.Orderliness.toString()) ?? 101;

  // data for aspects chart
  const aspectSeries = [
    {
      data: [Openness, Industriousness, 33, 11, 77],
    },
    {
      data: [Intellect, Orderliness, 66, 22, 88],
    },
  ];

  // data for ocean chart
  const oceanSeries = [
    {
      data: [OpennessToExperience, Conscientiousness, 55, 66, 99],
    },
  ];

  return (
    <div>
      <Grid container spacing={6} justify="center" alignItems="flex-start">
        <Grid item xs={12} md={10}>
          <Paper elevation={2}>
            <Typography variant="h3" className={styles.subheading}>
              Results and explanation
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={5}>
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
        <Grid item xs={12} sm={5} lg={5}>
          <ResultTable />
        </Grid>
        <Grid item xs={12} sm={10} lg={5} className={styles.chart}>
          <Paper elevation={2}>
            <ReactApexChart options={oceanOptions} series={oceanSeries} type="bar" height={550} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10} lg={5} className={styles.chart}>
          <Paper elevation={2}>
            <ReactApexChart options={aspectOptions} series={aspectSeries} type="bar" height={550} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={10}>
          <Paper elevation={2}>
            <Typography variant="h3" className={styles.subheading}>
              Interpretation of results
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Button onClick={getPercentiles}>hey</Button>
    </div>
  );
};

export default Results;
