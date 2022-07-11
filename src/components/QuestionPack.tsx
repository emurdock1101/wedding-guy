import { Button, Grid, makeStyles } from "@material-ui/core";

import { Question } from "../constants/schema";
import QuestionComp from "./QuestionComp";
import { useState } from "react";

export const useStyles = makeStyles((theme) => ({
  questionPack: {
    padding: "60px",
  },
}));
interface QuestionPackProps {
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
      <Grid
        container
        justify="center"
        alignItems="center"
        className={styles.questionPack}
        spacing={4}
      >
        {props.questions.map((question) => {
          return (
            <Grid item xs={12}>
              <QuestionComp question={question} countAnswer={countAnswer} />
            </Grid>
          );
        })}
        <Grid item>
          <Button
            style={{ visibility: props.page === 1 ? "hidden" : "visible" }}
            color="default"
            variant="outlined"
            onClick={props.prevStep}
          >
            PREV
          </Button>
        </Grid>
        <Grid item>
          <p>Page {props.page} of 10</p>
        </Grid>
        <Grid item>
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
