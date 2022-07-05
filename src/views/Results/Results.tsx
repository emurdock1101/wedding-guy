import { Grid, Typography, makeStyles } from "@material-ui/core";
import { aspectOptions, aspectSeries } from "../../constants/aspectSpecs";
import { oceanOptions, oceanSeries } from "../../constants/oceanSpecs";

import Explanation from "../../components/Explanation/Explanation";
import ReactApexChart from "react-apexcharts";
import ResultTable from "../../components/ResultTable/ResultTable";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px",
  },
  subheading: {
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    textDecoration: "underline",
  },
  chart: {
    marginTop: "1vw",
  },
  info1: {
    marginBottom: "15px",
    fontSize: 20,
  },
  info2: {
    marginBottom: "23px",
    fontSize: 20,
  },
}));

interface ResultsProps {}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const styles = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={6}
        className={styles.container}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.subheading}>
            Results and explanation
          </Typography>
        </Grid>
        <Grid item sm={10} lg={10}>
          <Typography variant="subtitle1" className={styles.info1}>
            Your results are shown in the table and in the bar charts below.{" "}
          </Typography>

          <Typography variant="subtitle1" className={styles.info2}>
            The Big 5 traits are Openness, Conscientiousness, Extraversion, Agreeableness, and
            Compassion. Each of the Big 5 traits is composed of two subcategories known as the 10
            Aspects. Each score is shown as a percentile of the population. This means a score of
            60% shows that you are higher in this trait than 60% of people. The meaning of each
            trait can be different from the trait name's common use, so please be sure to read the
            interpretation section below.
          </Typography>
        </Grid>
        <Grid item sm={10} lg={5}>
          <Explanation />
        </Grid>
        <Grid item sm={10} lg={5}>
          <ResultTable />
        </Grid>
        <Grid item xs={12} lg={5} className={styles.chart}>
          <ReactApexChart options={oceanOptions} series={oceanSeries} type="bar" height={550} />
        </Grid>
        <Grid item xs={12} lg={5} className={styles.chart}>
          <ReactApexChart options={aspectOptions} series={aspectSeries} type="bar" height={550} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.subheading}>
            Interpretation of scores
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
