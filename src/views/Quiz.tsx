import PreTest from './PreTest';
import QuestionPack from '../components/QuestionPack';
import {Question} from '../constants/schema';
import Submit from './Submit';
import {useState} from 'react';

interface QuizProps {
  onComplete: () => void;
  questionData: Question[];
}

const Quiz: React.FC<QuizProps> = (props: QuizProps) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  const slices = 10; // number of pages
  const chunks = [];
  const chunkSize = Math.ceil(props.questionData.length / slices); // number of questions on each page

  for (let i = 0; i < props.questionData.length; i += chunkSize) {
    chunks.push(props.questionData.slice(i, i + chunkSize));
  }

  return (
    <div>
      {step === 0 && <PreTest nextStep={nextStep} />}
      {chunks.map((chunk, index) => {
        return (
          step === index + 1 && (
            <QuestionPack
              totalQuestions={props.questionData.length}
              questions={chunk}
              prevStep={prevStep}
              nextStep={nextStep}
              page={index + 1}
            />
          )
        );
      })}
      {step === chunks.length + 1 && <Submit prevStep={prevStep} onComplete={props.onComplete} />}
    </div>
  );
};

export default Quiz;
