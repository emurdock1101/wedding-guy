import { cumulativeStdNormalProbability, zScore } from "simple-statistics";

import { escsMap } from "./constants/escsData";
import { questionData } from "./constants/questionData";

/**
 * Returns a map of percentiles for each category key string.
 *
 * @returns
 */
export const getPercentiles = (): Map<string, number> => {
  if (sessionStorage.length !== questionData.length) {
    console.log(
      "Answer list isn't correct length. storageLength: " +
        sessionStorage.length +
        ", questionDataLength: " +
        questionData.length
    );
  }

  const averages: Map<string, [number, number]> = new Map();

  let answerVal;
  let aspectCount: number | undefined;
  let aspectVal: number | undefined;
  let oceanVal: number | undefined;
  let oceanCount: number | undefined;
  let mapTuple: [number, number] = [0, 0];

  for (const question of questionData) {
    answerVal = sessionStorage.getItem(JSON.stringify(question));

    aspectCount = averages.get(question.aspect.toString())?.[0];
    oceanCount = averages.get(question.ocean.toString())?.[0];
    aspectVal = averages.get(question.aspect.toString())?.[1];
    oceanVal = averages.get(question.ocean.toString())?.[1];

    if (answerVal) {
      // Add to aspect total
      if (aspectVal && aspectCount) {
        // calculate new average aspect val
        aspectVal = (aspectVal * aspectCount + parseInt(answerVal)) / (aspectCount + 1);
        mapTuple = [aspectCount + 1, aspectVal];
        averages.set(question.aspect.toString(), mapTuple);
      } else {
        // set average for new aspect element
        mapTuple = [1, parseInt(answerVal)];
        averages.set(question.aspect.toString(), mapTuple);
      }

      if (oceanVal && oceanCount) {
        // calculate new average ocean val
        oceanVal = (oceanVal * oceanCount + parseInt(answerVal)) / (oceanCount + 1);
        mapTuple = [oceanCount + 1, oceanVal];
        averages.set(question.ocean.toString(), mapTuple);
      } else {
        // set average for new ocean element
        mapTuple = [1, parseInt(answerVal)];
        averages.set(question.ocean.toString(), mapTuple);
      }
    }
  }

  return getPercentilesFromAverages(averages);
};

/**
 * Calculates percentiles from averages using z score logic. Returns string->number map of each categories' percentile.
 *
 * @param averages the map of averages for all 15 categories
 * @returns
 */
export const getPercentilesFromAverages = (
  averages: Map<string, [number, number]>
): Map<string, number> => {
  const percentileMap: Map<string, number> = new Map();
  let currMean: number | undefined;
  let currStdDev: number | undefined;
  let currFormattedPerc: number;

  averages.forEach((value: [number, number], key: string) => {
    currMean = escsMap.get(key)?.mean;
    currStdDev = escsMap.get(key)?.stdDev;

    if (currMean && currStdDev) {
      console.log(cumulativeStdNormalProbability(zScore(value[1], currMean, currStdDev)));

      currFormattedPerc = Math.round(
        cumulativeStdNormalProbability(zScore(value[1], currMean, currStdDev)) * 100
      );

      if (currFormattedPerc <= 0) currFormattedPerc = 1;
      else if (currFormattedPerc >= 100) currFormattedPerc = 99;

      console.log("\n");
      console.log(key);
      console.log("population mean: " + currMean);
      console.log("population std dev: " + currStdDev);
      console.log("averaged answer score: " + value[1]);
      console.log("answer count: " + value[0]);
      console.log("z score" + zScore(value[1], currMean, currStdDev));
      console.log("formatted percentage: " + currFormattedPerc);

      percentileMap.set(key, currFormattedPerc);
    } else {
      throw new Error(
        "Mean or std dev from escs map not defined. value: " + value + ", key: " + key
      );
    }
  });

  return percentileMap;
};

/**
 * Returns the right adjective to describe how high/low a score is.
 *
 * @param score a percentile
 * @returns
 */
export const scoreAdjective = (score: number): string => {
  const veryHigh: number = 80;
  const high: number = 60;
  const moderate: number = 40;
  const low: number = 20;

  if (score > 90) {
    return "very high";
  } else if (score > high && score < veryHigh) {
    return "very high";
  } else if (score > moderate && score < high) {
    return "moderate";
  } else if (score > low && score < moderate) {
    return "low";
  } else if (score < low) {
    return "very low";
  }

  return "error";
};
