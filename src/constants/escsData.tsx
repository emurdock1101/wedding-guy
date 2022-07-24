import { Aspect, EscsData, Ocean } from "./schema";

export const ESCS_SAMPLE_SIZE = 480;

export const escsMap: Map<string, EscsData> = new Map([
  [
    Ocean.Openness.toString(),
    {
      mean: 3.72,
      stdDev: 0.53,
    },
  ],

  [
    Aspect.AestheticOpenness.toString(),
    {
      mean: 3.74,
      stdDev: 0.61,
    },
  ],

  [
    Aspect.Intellect.toString(),
    {
      mean: 3.7,
      stdDev: 0.68,
    },
  ],
  [
    Ocean.Conscientiousness.toString(),
    {
      mean: 3.76,
      stdDev: 0.51,
    },
  ],

  [
    Aspect.Industriousness.toString(),
    {
      mean: 3.8,
      stdDev: 0.61,
    },
  ],

  [
    Aspect.Orderliness.toString(),
    {
      mean: 3.73,
      stdDev: 0.62,
    },
  ],

  [
    Ocean.Extraversion.toString(),
    {
      mean: 3.48,
      stdDev: 0.6,
    },
  ],

  [
    Aspect.Enthusiasm.toString(),
    {
      mean: 3.59,
      stdDev: 0.72,
    },
  ],

  [
    Aspect.Assertiveness.toString(),
    {
      mean: 3.36,
      stdDev: 0.7,
    },
  ],

  [
    Ocean.Agreeableness.toString(),
    {
      mean: 4.11,
      stdDev: 0.45,
    },
  ],

  [
    Aspect.Compassion.toString(),
    {
      mean: 4.11,
      stdDev: 0.54,
    },
  ],

  [
    Aspect.Politeness.toString(),
    {
      mean: 4.1,
      stdDev: 0.53,
    },
  ],

  [
    Ocean.Neuroticism.toString(),
    {
      mean: 2.46,
      stdDev: 0.63,
    },
  ],

  [
    Aspect.Withdrawal.toString(),
    {
      mean: 2.45,
      stdDev: 0.71,
    },
  ],

  [
    Aspect.Volatility.toString(),
    {
      mean: 2.48,
      stdDev: 0.7,
    },
  ],
]);
