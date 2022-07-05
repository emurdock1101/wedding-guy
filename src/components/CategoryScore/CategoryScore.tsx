import { Typography, makeStyles } from "@material-ui/core";

import { Big5Data } from "../../constants/schema";
import { useState } from "react";

export const useStyles = makeStyles((theme) => ({
  category: {
    // textDecoration: "underline",
    marginBottom: "10px"
  },
  aspect: {
    // fontStyle: "italic",
  },
  resultNum: {},
}));

interface CategoryScoreProps {
  big5Data: Big5Data;
}

const CategoryScore: React.FC<CategoryScoreProps> = (props: CategoryScoreProps) => {
  const styles = useStyles();

  return (
    <div>
      <Typography variant="h4" className={styles.category}>
        {props.big5Data.category} ({props.big5Data.categoryAbbr}): <strong>22%</strong>
      </Typography>
      <Typography variant="h6" className={styles.aspect}>
        {props.big5Data.aspects[0]} ({props.big5Data.aspectsAbbr[0]}): <strong>22%</strong>
      </Typography>
      <Typography variant="h6" className={styles.aspect}>
        {props.big5Data.aspects[1]} ({props.big5Data.aspectsAbbr[1]}): <strong>22%</strong>
      </Typography>
    </div>
  );
};

export default CategoryScore;
