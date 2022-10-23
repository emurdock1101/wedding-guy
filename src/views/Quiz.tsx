import PreTest from "./PreTest";
import QuestionPack from "../components/QuestionPack";
import Results from "./Results";
import Submit from "./Submit";
import { questionData as qd } from "../constants/questionData";
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

  const questionData = qd.slice(0, 20);

  const slices = 2; // number of pages
  const chunks = [];
  const chunkSize = Math.ceil(questionData.length / slices); // number of questions on each page

  for (let i = 0; i < questionData.length; i += chunkSize) {
    chunks.push(questionData.slice(i, i + chunkSize));
  }

  return (
    <div>
      {step === 0 && <PreTest nextStep={nextStep} />}
      {chunks.map((chunk, index) => {
        return (
          step === index + 1 && (
            <QuestionPack
              totalQuestions={questionData.length}
              questions={chunk}
              prevStep={prevStep}
              nextStep={nextStep}
              page={index + 1}
            />
          )
        );
      })}
      {step === chunks.length + 1 && <Submit prevStep={prevStep} />}
    </div>
  );
};

export default Quiz;
