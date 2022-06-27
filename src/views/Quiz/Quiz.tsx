import QuestionPack from "../../components/QuestionPack.tsx/QuestionPack";
import Submit from "../Submit/Submit";
import { questionData } from "../../constants/questionData";
import { useState } from "react";

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  // Change this value to divide the array into a different number of chunks.
  const slices = 2;
  const chunks = [];
  const chunkSize = Math.ceil(questionData.length / slices);

  for (let i = 0; i < questionData.length; i += chunkSize) {
    chunks.push(questionData.slice(i, i + chunkSize));
  }

  return (
    <div>
      {chunks.map((chunk, index) => {
        return (
          step === index && (
            <QuestionPack
              questions={chunk}
              prevStep={prevStep}
              nextStep={nextStep}
              page={index + 1}
            />
          )
        );
      })}
      {step === chunks.length && <Submit prevStep={prevStep} nextStep={nextStep}/>}
      {/* {step === chunks.length + 1 && <Submit prevStep={prevStep}/>} */}
    </div>
  );
};

export default Quiz;
