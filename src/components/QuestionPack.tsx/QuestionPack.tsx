import { Button, Grid } from "@material-ui/core";

import { Question } from "../../constants/schema";
import QuestionComp from "../../components/QuestionComp/QuestionComp";

interface QuestionPackProps {
  questions: Question[];
  prevStep: () => void;
  nextStep: () => void;
}

const QuestionPack: React.FC<QuestionPackProps> = (props: QuestionPackProps) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {props.questions.map((question) => {
          return (
            <Grid item xs={12}>
              <QuestionComp
                uid={question.uid}
                reverse={question.reverse}
                question={question.question}
              />
            </Grid>
          );
        })}
        <Button onClick={props.prevStep}>Previous</Button>
        <Button onClick={props.nextStep}>Next</Button>
      </Grid>
    </div>
  );
};

export default QuestionPack;
