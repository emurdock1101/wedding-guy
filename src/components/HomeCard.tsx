import { Paper, makeStyles } from "@material-ui/core";

import Typography from "@mui/material/Typography";

interface HomeCardProps {
  title: string;
  description: string;
}
const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    padding: 30,
    color: theme.palette.info.main,
    borderRadius: 10,
    borderLeft: `6px solid ${theme.palette.primary.main}`,
  },
}));

 const HomeCard = (props: HomeCardProps) =>{
  const styles = useStyles();
  return (
    <Paper className={styles.card}>
      <Typography variant="h5" component="div">
        {props.title}
      </Typography>
      <br></br>
      <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
        {props.description}
      </Typography>
    </Paper>
  );
}

export default HomeCard;