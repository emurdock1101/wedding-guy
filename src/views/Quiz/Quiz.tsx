import { Button, Grid } from "@material-ui/core";

import { Aspect } from "../../constants/schema";
import QuestionComp from "../../components/QuestionComp/QuestionComp";
import { questionData } from "../../constants/questionData";

function Quiz() {
  const foo = () => {
    alert();
  };

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <div>
            <QuestionComp reverse={true} question="Do you like bees?" uid="00"></QuestionComp>
            <Button onClick={foo}>hey</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Quiz;
