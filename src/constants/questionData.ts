import { Aspect, Ocean, Question } from "./schema";

export const questionData: Question[] = [
  {
    uid: "q0",
    question: "Do not like poetry",
    reverse: true,
    aspect: Aspect.Openness,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q1",
    question: "Need a creative outlet",
    reverse: false,
    aspect: Aspect.Openness,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q2",
    question: "Avoid philosophical discussions",
    reverse: true,
    aspect: Aspect.Intellect,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q3",
    question: "Think quickly",
    reverse: false,
    aspect: Aspect.Intellect,
    ocean: Ocean.OpennessToExperience,
  },
];
