import { Paper, makeStyles } from "@material-ui/core";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface OceanCardProps {
  ocean: string;
  aspect1: string;
  aspect2: string;
  hex: string;
}

const OceanCard = (props: OceanCardProps) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      color: theme.palette.info.main,
      borderRadius: 10,
      borderLeft: `6px solid ${theme.palette.primary.main}`,
      minHeight: 150,
    },
    title: {
      marginTop: 60,
      padding: 10,
      paddingTop: 25,
      textAlign: "center",
    },
    aspects: {
      padding: 5,
      width: "50%",
      textAlign: "center",
      fontSize: 2,
    },
    row: {
      display: "flex",
      marginTop: 10,
    },
  }));
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <Typography variant="h5" className={styles.title}>
        {props.ocean}
      </Typography>
      <Divider variant="middle" />
      <div className={styles.row}>
        <Typography className={styles.aspects}> {props.aspect1}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography className={styles.aspects}>{props.aspect2}</Typography>
      </div>
    </Paper>
  );
};

export default OceanCard;
