import {Typography, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px"
  },
  info: {
    marginBottom: "15px",
    fontSize: 20
  },
  info2: {
    marginBottom: "23px",
    fontSize: 20
  },
  category: {
    marginBottom: "4vw",
    color: theme.palette.common.white,
    borderRadius: "10px",
    padding: "5px",
    boxShadow: "2px 2px 2px grey"
  },
  c1: {
    backgroundColor: theme.palette.error.light,
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
    <div className={styles.container}>
      <Typography variant="subtitle1" className={styles.info}>
        Your results are shown in the table and in the bar charts below.{" "}
      </Typography>

      <Typography variant="subtitle1" className={styles.info2}>
        The Big 5 traits are Openness, Conscientiousness, Extraversion, Agreeableness, and
        Compassion. Each of the Big 5 traits is composed of two subcategories known as the 10
        Aspects. Each score is shown as a
        percentile of the population. This means a score of 60% shows that you are higher in this
        trait than 60% of people. The meaning of each trait can be different from the trait name's common use, so please be sure to read the interpretation section below.
      </Typography>

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
