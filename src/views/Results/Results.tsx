import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { aspectsOptions, aspectsSeries } from "../../constants/chartSpecs";

import ReactApexChart from "react-apexcharts";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "60px",
    textAlign: "center",
  },
}));

interface ResultsProps {}

const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const styles = useStyles();

  return (
    <div>
      <Grid container justify="center" alignItems="center" spacing={4} className={styles.info}>
        <Grid item xs={12}>
          <Typography variant="h4">Big 5 Aspects Results</Typography>
        </Grid>
        <Grid item xs={6}>
          <ReactApexChart
            options={aspectsOptions}
            series={aspectsSeries}
            type="bar"
            height={400}
          />
        </Grid>
        <Grid item xs={6}>
          <ReactApexChart
            options={aspectsOptions}
            series={aspectsSeries}
            type="bar"
            height={400}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
