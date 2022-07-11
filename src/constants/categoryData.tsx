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
    category: "Openness",
    categoryAbbr: "Opn.",
    isOcean: true,
  },
  {
    category: "Openness",
    categoryAbbr: "Opn.",
    isOcean: false,
  },
  {
    category: "Intellect",
    categoryAbbr: "Int.",
    isOcean: false,
  },
  {
    category: "Conscientiousness",
    categoryAbbr: "Con.",
    isOcean: true,
  },
  {
    category: "Industriousness",
    categoryAbbr: "Ind.",
    isOcean: false,
  },
  {
    category: "Orderliness",
    categoryAbbr: "Ord.",
    isOcean: false,
  },
  {
    category: "Extraversion",
    categoryAbbr: "Ext.",
    isOcean: true,
  },
  {
    category: "Enthusiasm",
    categoryAbbr: "Ent.",
    isOcean: false,
  },
  {
    category: "Assertiveness",
    categoryAbbr: "Asr.",
    isOcean: false,
  },
  {
    category: "Agreeableness",
    categoryAbbr: "Agr.",
    isOcean: true,
  },
  {
    category: "Compassion",
    categoryAbbr: "Com.",
    isOcean: false,
  },
  {
    category: "Politeness",
    categoryAbbr: "Pol.",
    isOcean: false,
  },
  {
    category: "Neuroticism",
    categoryAbbr: "Neu.",
    isOcean: true,
  },
  {
    category: "Withdrawal",
    categoryAbbr: "Wit.",
    isOcean: false,
  },
  {
    category: "Volatility",
    categoryAbbr: "Vol.",
    isOcean: false,
  },
];
