import { Button, Grid, Paper, Typography, makeStyles } from "@material-ui/core";

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
  heading: {
    textAlign: "center",
  },
  question: {
    padding: "20px",
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
          <p>Page {props.page} of 10</p>
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
      </Grid>
    </div>
  );
};

export default QuestionPack;
