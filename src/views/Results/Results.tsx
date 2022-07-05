import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { aspectOptions, aspectSeries } from "../../constants/aspectSpecs";
import { oceanOptions, oceanSeries } from "../../constants/oceanSpecs";

import CategoryScore from "../../components/CategoryScore/CategoryScore";
import Explanation from "../../components/Explanation/Explanation";
import ReactApexChart from "react-apexcharts";
import ResultTable from "../../components/ResultTable/ResultTable";
import { categoryData } from "../../constants/categoryData";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "1vw",
  },
  title: {
    marginBottom: "0.1vw",
    textAlign: "center",
  },
  subheading: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));

interface ResultsProps {}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const styles = useStyles();

  return (
    <div>
      <Grid container spacing={6} className={styles.info} justify="center" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography variant="h2" className={styles.title}>
            Big 5 Results
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.subheading}>
            Results and explanation
          </Typography>
        </Grid>
        <Grid item sm={12} lg={5}>
          <Explanation  />
        </Grid>
        <Grid item sm={12} lg={5}>
          <ResultTable />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.subheading}>
            Graphical representation
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ReactApexChart options={oceanOptions} series={oceanSeries} type="bar" height={550} />
        </Grid>
        <Grid item xs={12} lg={6}>
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
