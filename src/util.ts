import {cumulativeStdNormalProbability, zScore} from 'simple-statistics';
import {maleDataMap, femaleDataMap} from './constants/escsData';
import {questionData} from './constants/questionData';

/**
 * Returns a map of percentiles for each category key string.
 */
export const getPercentiles = (): Record<string, number> => {
  if (sessionStorage.length - 2 !== questionData.length) {
    console.log(
      "Answer list isn't correct length. storageLength - 2: " +
        (sessionStorage.length - 2) +
        ', questionDataLength: ' +
        questionData.length,
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
 */
export const getPercentilesFromAverages = (
  averages: Map<string, [number, number]>,
): Record<string, number> => {
  const percentiles: Record<string, number> = {};
  let currMean: number | undefined;
  let currStdDev: number | undefined;
  let currFormattedPerc: number;

  const isMale: boolean = sessionStorage.getItem('gender') === 'male';
  const dataMap = isMale ? maleDataMap : femaleDataMap;

  averages.forEach((value: [number, number], key: string) => {
    currMean = dataMap.get(key)?.mean;
    currStdDev = dataMap.get(key)?.stdDev;

    if (currMean && currStdDev) {
      //console.log(cumulativeStdNormalProbability(zScore(value[1], currMean, currStdDev)));

      currFormattedPerc = Math.round(
        cumulativeStdNormalProbability(zScore(value[1], currMean, currStdDev)) * 100,
      );

      if (currFormattedPerc <= 0) currFormattedPerc = 1;
      else if (currFormattedPerc >= 100) currFormattedPerc = 99;

      // console.log("\n");
      // console.log(key);
      // console.log("population mean: " + currMean);
      // console.log("population std dev: " + currStdDev);
      // console.log("averaged answer score: " + value[1]);
      // console.log("answer count: " + value[0]);
      // console.log("z score" + zScore(value[1], currMean, currStdDev));
      // console.log("formatted percentage: " + currFormattedPerc);

      // format is like: {"Aesthetic Openness":3,"Openness":2,"Interest in Ideas":5}
      percentiles[`${key}`] = currFormattedPerc;
    } else {
      throw new Error(
        'Mean or std dev from data map not defined. value: ' + value + ', key: ' + key,
      );
    }
  });

  return percentiles;
};

/**
 * Returns the right adjective to describe how high/low a score is.
 *
 * @param score a percentile
 */
export const scoreAdjective = (score: number): string => {
  if (score >= 90) {
    return 'veryHigh';
  } else if (score >= 75 && score < 90) {
    return 'high';
  } else if (score >= 60 && score < 75) {
    return 'modHigh';
  } else if (score >= 40 && score < 60) {
    return 'average';
  } else if (score >= 25 && score < 40) {
    return 'modLow';
  } else if (score >= 10 && score < 25) {
    return 'low';
  } else if (score < 10) {
    return 'veryLow';
  }

  return 'error';
};

/**
 * Shuffles an array of any type
 */
export const shuffle = <T>(array: T[]): T[] => {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export const getMarkdownString = (
  name: string,
  gender: string,
  percentiles: Record<string, number> | null,
): string => {
  const markdownContent = `
    # Styled Markdown File
    
    This is a **styled** Markdown file using React and styled-components.
    
    ## Section 1
    
    - ${name}
    - ${gender}
      - ${JSON.stringify(percentiles)}
    `;

  return markdownContent;
};
