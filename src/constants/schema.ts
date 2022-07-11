export enum Aspect {
  Withdrawal = "Withdrawal",
  Volatility = "Volatility",
  Politeness = "Politeness",
  Compassion = "Compassion",
  Industriousness = "Industriousness",
  Orderliness = "Orderliness",
  Enthusiasm = "Enthusiasm",
  Assertiveness = "Assertiveness",
  Openness = "Openness",
  Intellect = "Intellect",
}

export enum Ocean {
  OpennessToExperience = "OpennessToExperience",
  Conscientiousness = "Conscientiousness",
  Extraversion = "Extraversion",
  Agreeableness = "Agreeableness",
  Neuroticism = "Neuroticism",
}

export type Big5Data = {
  category: string;
  categoryAbbr: string;
  isOcean: boolean;
};

export type Question = {
  uid: string;
  text: string;
  reverse: boolean;
  aspect: Aspect;
  ocean: Ocean;
};

export type Answer = {
  percentile: number;
  aspect: Aspect;
  ocean: Ocean;
};

export type EscsData = {
  mean: number;
  stdDev: number;
};
