import { Button, Grid, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { Question } from "../constants/schema";
import QuestionComp from "./QuestionComp";
import { useState } from "react";

export const useStyles = makeStyles((theme) => ({
  questionPack: {
    padding: "10px",
  },
  page: {
    marginTop: "60px",
    textAlign: "center",
  },
  homeLink: {
    textAlign: "center",
    marginTop: 60,
  },
  linkText: {
    color: theme.palette.success.main,
    "&:hover": {
      color: theme.palette.success.dark,
    },
    textDecoration: "underline",
    fontSize: 18,
  },
  question: {
    padding: "20px",
  },
  link: {
    textDecoration: "none",
  },
}));
interface QuestionPackProps {
  totalQuestions: number;
  questions: Question[];
  page: number;
  prevStep: () => void;
  nextStep: () => void;
}

const QuestionPack: React.FC<QuestionPackProps> = (props: QuestionPackProps) => {
  const styles = useStyles();
  const numberOfPages = props.totalQuestions / props.questions.length;
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);

  const countAnswer = (uid: string) => {
    if (!answeredQuestions.includes(uid)) {
      setAnsweredQuestions([...answeredQuestions, uid]);
    }
  };

  return (
    <div>
      <Grid container justify="center" alignItems="center" className={styles.questionPack}>
        <Grid item xs={12} className={styles.question}>
          <ProgressBar
            progress={
              (((props.page - 1) * props.questions.length + answeredQuestions.length) /
                props.totalQuestions) *
              100
            }
          />
        </Grid>
        {props.questions.map((question) => {
          return (
            <Grid item xs={12} className={styles.question}>
              <QuestionComp question={question} countAnswer={countAnswer} />
            </Grid>
          );
        })}
        <Grid item xs={3} sm={2} md={1} className={styles.page}>
          <Button
            style={{ visibility: props.page === 1 ? "hidden" : "visible" }}
            color="default"
            variant="outlined"
            onClick={props.prevStep}
          >
            PREV
          </Button>
        </Grid>
        <Grid item xs={6} sm={4} md={2} className={styles.page}>
          <p>
            Page {props.page} of {numberOfPages}
          </p>
        </Grid>
        <Grid item xs={3} sm={2} md={1} className={styles.page}>
          <Button
            disabled={answeredQuestions.length !== props.questions.length}
            color="default"
            variant="outlined"
            onClick={props.nextStep}
          >
            NEXT
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className={styles.homeLink}>
            <Link to="/" className={styles.link}>
              <p className={styles.linkText}>Back to home</p>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionPack;
