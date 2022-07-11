import { Aspect, Ocean, Question } from "./schema";

export const questionData: Question[] = [
  {
    uid: "q0",
    text: "Do not like poetry",
    reverse: false,
    aspect: Aspect.Openness,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q1",
    text: "Need a creative outlet",
    reverse: true,
    aspect: Aspect.Openness,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q2",
    text: "Avoid philosophical discussions",
    reverse: false,
    aspect: Aspect.Intellect,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q3",
    text: "Think quickly",
    reverse: true,
    aspect: Aspect.Intellect,
    ocean: Ocean.OpennessToExperience,
  },
  {
    uid: "q4",
    text: "Does a jig",
    reverse: false,
    aspect: Aspect.Industriousness,
    ocean: Ocean.Conscientiousness
  },
  {
    uid: "q5",
    text: "Likes it",
    reverse: true,
    aspect: Aspect.Industriousness,
    ocean: Ocean.Conscientiousness,
  },
  {
    uid: "q6",
    text: "Whoa whoa",
    reverse: false,
    aspect: Aspect.Orderliness,
    ocean: Ocean.Conscientiousness,
  },
  {
    uid: "q7",
    text: "Be there",
    reverse: true,
    aspect: Aspect.Orderliness,
    ocean: Ocean.Conscientiousness,
  },
];
