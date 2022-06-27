import { Button, Grid, makeStyles } from "@material-ui/core";

import { Question } from "../../constants/schema";
import QuestionComp from "../../components/QuestionComp/QuestionComp";
import { useState } from "react";

export const useStyles = makeStyles((theme) => ({
  questionPack: {
    padding: "60px",
  },
  pageButton: {
    margin: "100px",
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
      <Grid container justify="center" alignItems="center" className={styles.questionPack}>
        {props.questions.map((question) => {
          return (
            <Grid item xs={12}>
              <QuestionComp
                uid={question.uid}
                reverse={question.reverse}
                question={question.question}
                countAnswer={countAnswer}
              />
            </Grid>
          );
        })}
        <Button
          color="default"
          variant="outlined"
          onClick={props.prevStep}
          className={styles.pageButton}
        >
          Previous
        </Button>
        <p>Page {props.page} of 10</p>
        <Button
          disabled={answeredQuestions.length !== props.questions.length}
          color="default"
          variant="outlined"
          onClick={props.nextStep}
          className={styles.pageButton}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
};

export default QuestionPack;
