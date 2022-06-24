import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  makeStyles,
} from "@material-ui/core";

import { Aspect } from "../../constants/schema";
import { useState } from "react";

interface QuestionProps {
  uid: string;
  question: string;
  reverse: boolean;
}

function QuestionComp(props: QuestionProps) {
  const [selected, setSelected] = useState(99);
  const radio1: number = props.reverse ? 5 : 1;
  const radio2: number = props.reverse ? 4 : 2;
  const radio3: number = 3;
  const radio4: number = props.reverse ? 2 : 4;
  const radio5: number = props.reverse ? 1 : 5;

  const handleClick = (value: number) => {
    setSelected(value);
    
  }

  return (
    <FormControl>
      <FormLabel id="questionFormLabel">{props.question}</FormLabel>
      <RadioGroup
        row={true}
        aria-labelledby="questionFormLabel"
        value={selected}
        onChange={() => {
          alert(selected);
        }}
      >
        <FormControlLabel
          value={radio1}
          control={
            <Radio
              color="primary"
              checked={selected === radio1}
              onClick={() => setSelected(radio1)}
            />
          }
          label="Strongly Disagree"
        />
        <FormControlLabel
          value={radio2}
          control={
            <Radio
              color="primary"
              checked={selected === radio2}
              onClick={() => setSelected(radio2)}
            />
          }
          label="Disagree"
        />
        <FormControlLabel
          value={radio3}
          control={
            <Radio
              color="primary"
              checked={selected === radio3}
              onClick={() => setSelected(radio3)}
            />
          }
          label="Neutral"
        />
        <FormControlLabel
          value={radio4}
          control={
            <Radio
              color="primary"
              checked={selected === radio4}
              onClick={() => setSelected(radio4)}
            />
          }
          label="Agree"
        />
        <FormControlLabel
          value={radio5}
          control={
            <Radio
              color="primary"
              checked={selected === radio5}
              onClick={() => setSelected(radio5)}
            />
          }
          label="Strongly Agree"
        />
      </RadioGroup>
    </FormControl>
  );
}
export default QuestionComp;
