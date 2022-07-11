import { Typography, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  category: {
    marginBottom: "6.3vw",
    color: theme.palette.common.white,
    borderRadius: "10px",
    padding: "5px",
    boxShadow: "2px 2px 2px grey",
  },
  c1: {
    backgroundColor: theme.palette.error.light,
    marginTop: "3.4vw",
  },
  c2: {
    backgroundColor: theme.palette.warning.light,
  },
  c3: {
    backgroundColor: theme.palette.success.light,
  },
  c4: {
    backgroundColor: theme.palette.primary.light,
  },
  c5: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

interface ExplanationProps {}

const Explanation: React.FC<ExplanationProps> = (props: ExplanationProps) => {
  const styles = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" className={`${styles.category}  ${styles.c1}`}>
        &#160;&#160;Openness (also referred to as "Openness to Experience") is composed of Openness
        and Intellect.
      </Typography>

      <Typography variant="subtitle1" className={`${styles.category}  ${styles.c2}`}>
        &#160;&#160;Conscientious is composed of Industriousness and Orderliness.
      </Typography>

      <Typography variant="subtitle1" className={`${styles.category}  ${styles.c3}`}>
        &#160;&#160;Extraversion is composed of Enthusiasm and Assertiveness.
      </Typography>

      <Typography variant="subtitle1" className={`${styles.category}  ${styles.c4}`}>
        &#160;&#160;Agreeableness is composed of Politeness and Compassion.
      </Typography>

      <Typography variant="subtitle1" className={`${styles.category}  ${styles.c5}`}>
        &#160;&#160;Neuroticism is composed of Withdrawal and Volatility.
      </Typography>
    </div>
  );
};

export default Explanation;
