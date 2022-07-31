import { Grid, Typography, makeStyles } from "@material-ui/core";

import Percent from "../components/Percent";
import content from "../constants/content";
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
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>
              Your {props.oceanName} score is {scoreAdjective(props.oceanScore)}.
            </strong>{" "}
            {content["interpretations"][props.oceanName]}
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
            {content["interpretations"][props.aspect1Name === "Aesthetic Openness" ? "AestheticOpenness" : props.aspect1Name]}
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
            {content["interpretations"][props.aspect2Name]}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Interpretations;
