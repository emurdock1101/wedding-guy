import {Typography, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  info: {
    marginBottom: "15px",
  },
  info2: {
    marginBottom: "23px",
  },
  category: {
    marginBottom: "121px",
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
    <div>
      <Typography variant="subtitle1" className={styles.info}>
        Your results are shown in the table and in the bar charts below.{" "}
      </Typography>

      <Typography variant="subtitle1" className={styles.info2}>
        The Big 5 traits are Openness, Conscientiousness, Extraversion, Agreeableness, and
        Compassion. Each of the Big 5 traits is composed of two subcategories known as the 10
        Aspects. For each of Big 5 trait, and for each of the 10 Aspects, your score is shown as a
        percentile of the population. For example, a score of 22% means that you are higher in this
        trait than 22% of people.
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
