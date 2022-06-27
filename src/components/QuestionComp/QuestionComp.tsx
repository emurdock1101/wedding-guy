import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { useEffect, useState } from "react";

interface QuestionProps {
  uid: string;
  question: string;
  reverse: boolean;
  countAnswer: (uid: string) => void;
}

const QuestionComp: React.FC<QuestionProps> = (props: QuestionProps) => {
  const [selected, setSelected] = useState(() => {
    const selected = sessionStorage.getItem(props.uid);
    return selected !== null ? parseInt(selected) : 99;
  });
  const radio1: number = props.reverse ? 5 : 1;
  const radio2: number = props.reverse ? 4 : 2;
  const radio3: number = 3;
  const radio4: number = props.reverse ? 2 : 4;
  const radio5: number = props.reverse ? 1 : 5;

  useEffect(() => {
    sessionStorage.setItem(props.uid, "" + selected);
    if (selected !== 99) {
      props.countAnswer(props.uid);
    }
  });

  return (
    <FormControl>
      <FormLabel>{props.question}</FormLabel>
      <RadioGroup row={true} value={selected}>
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
};
export default QuestionComp;
