export enum Aspect {
  Withdrawal,
  Volatility,
  Politeness,
  Compassion,
  Industriousness,
  Orderliness,
  Enthusiasm,
  Assertiveness,
  Openness,
  Intellect,
}

export enum Ocean {
  OpennessToExperience,
  Conscientiousness,
  Extraversion,
  Agreeableness,
  Neuroticism,
}

export type Question = {
  uid: string;
  question: string;
  reverse: boolean;
  aspect: Aspect;
  ocean: Ocean
};
