import { Grid, Typography, makeStyles } from "@material-ui/core";

import Percent from "../components/Percent";
import interpretations from "../constants/interpretations";
import { scoreAdjective } from "../util";

export const useStyles = makeStyles((theme) => ({
  oceanScoreRow: {
    minHeight: "120px",
    display: "flex",
    alignItems: "center",
  },
  aspectScoreRow: {
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
    // border: "blue 1px solid",
  },
  aspects: {
    paddingLeft: "30px",
    // border: "red 1px solid"
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
  percent: {
    paddingLeft: "15px",
  },
}));

interface InterpretationsProps {
  oceanScore: number;
  oceanName: string;
  aspect1Score: number;
  aspect1Name: string;
  aspect2Score: number;
  aspect2Name: string;
  hex: string;
  index: number;
}

const Interpretations: React.FC<InterpretationsProps> = (props: InterpretationsProps) => {
  const styles = useStyles();

  return (
    <div>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={9} sm={10} className={styles.oceanScoreRow}>
          <Typography variant="h5">{props.oceanName}</Typography>
        </Grid>
        <Grid item xs={3} sm={2} className={styles.oceanScoreRow}>
          <Percent progress={props.oceanScore} hex={props.hex} size={90} />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1">
            <strong>
              {interpretations[props.index]["category"][scoreAdjective(props.oceanScore)]["part1"]}
            </strong>
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            {interpretations[props.index]["category"][scoreAdjective(props.oceanScore)]["part2"]}
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            {interpretations[props.index]["category"][scoreAdjective(props.oceanScore)]["part3"]}
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            {interpretations[props.index]["category"][scoreAdjective(props.oceanScore)]["part4"]}
          </Typography>
        </Grid>
        <Grid item xs={9} sm={10} className={styles.aspectScoreRow}>
          <Typography variant="h6" className={styles.aspects}>
            {props.aspect1Name}
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} className={styles.aspectScoreRow}>
          <div className={styles.percent}>
            <Percent progress={props.aspect1Score} hex={props.hex} size={60} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={styles.aspects}>
            {interpretations[props.index]["aspect1"][scoreAdjective(props.aspect1Score)]["part1"]}
          </Typography>
        </Grid>
        <Grid item xs={9} sm={10} className={styles.aspectScoreRow}>
          <Typography variant="h6" className={styles.aspects}>
            {props.aspect2Name}
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} className={styles.aspectScoreRow}>
          <div className={styles.percent}>
            <Percent progress={props.aspect2Score} hex={props.hex} size={60} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={styles.aspects}>
            {interpretations[props.index]["part1"]}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Interpretations;
