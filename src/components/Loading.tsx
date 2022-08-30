import * as React from "react";

import CircularProgress, { circularProgressClasses } from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const Loading = styled(CircularLoading)(({ theme }) => ({
  [`& .${circularProgressClasses.circle}`]: {
    backgroundColor: "#343434",
  },
}));

const useStyles = makeStyles((theme) => ({
  loading: {
    transform: "translate(-50%, -50%)",
    position: "absolute",
    left: "50%",
    top: "50%",
  },
}));

function CircularLoading() {
  const styles = useStyles();
  return (
    <Box sx={{ display: "flex" }} className={styles.loading}>
      <CircularProgress size={300} color="primary" />
    </Box>
  );
}

export default Loading;
