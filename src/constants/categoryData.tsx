import { Aspect, Ocean } from "./schema";

import { Big5Data } from "./schema";

/**
 * Master Order
 *
 * 1. Open 2. Opn 3. Int
 *
 * 4. Con 5. Ind 6. Ord
 *
 * 7. Ext 8. Ent. 9. Asr
 *
 * 10. Agr. 11. Com. 12. Pol.
 *
 * 13. Neu 14. Wit. 15. Vol.
 */
export const categoryData: Big5Data[] = [
  {
    category: Ocean.Openness,
    categoryAbbr: "Opn.",
    isOcean: true,
  },
  {
    category: Aspect.AestheticOpenness,
    categoryAbbr: "Aes.",
    isOcean: false,
  },
  {
    category: Aspect.Intellect,
    categoryAbbr: "Int.",
    isOcean: false,
  },
  {
    category: Ocean.Conscientiousness,
    categoryAbbr: "Con.",
    isOcean: true,
  },
  {
    category: Aspect.Industriousness,
    categoryAbbr: "Ind.",
    isOcean: false,
  },
  {
    category: Aspect.Orderliness,
    categoryAbbr: "Ord.",
    isOcean: false,
  },
  {
    category: Ocean.Extraversion,
    categoryAbbr: "Ext.",
    isOcean: true,
  },
  {
    category: Aspect.Enthusiasm,
    categoryAbbr: "Ent.",
    isOcean: false,
  },
  {
    category: Aspect.Assertiveness,
    categoryAbbr: "Asr.",
    isOcean: false,
  },
  {
    category: Ocean.Agreeableness,
    categoryAbbr: "Agr.",
    isOcean: true,
  },
  {
    category: Aspect.Compassion,
    categoryAbbr: "Com.",
    isOcean: false,
  },
  {
    category: Aspect.Politeness,
    categoryAbbr: "Pol.",
    isOcean: false,
  },
  {
    category: Ocean.Neuroticism,
    categoryAbbr: "Neu.",
    isOcean: true,
  },
  {
    category: Aspect.Withdrawal,
    categoryAbbr: "Wit.",
    isOcean: false,
  },
  {
    category: Aspect.Volatility,
    categoryAbbr: "Vol.",
    isOcean: false,
  },
];
