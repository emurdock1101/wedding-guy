import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Home.css";
import image from '../../images/snowbest.png'

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minWidth: "90%"
  },
  h1: {
    color: theme.palette.first,
  },
  h2: {
    color: theme.palette.second,
  },
  h3: {
    color: theme.palette.third,
  },
  h4: {
    color: theme.palette.fourth,
  },
  h5: {
    color: theme.palette.fifth,
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "100"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      
      <Container fixed className={classes.container}>
        <Header />
        <img src={image} alt="Girl in a jacket" width="100%"></img>
        <h1 className="centered">title</h1>
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
        <h1 className={classes.h1}>1st color h1</h1>
        <h2 className={classes.h2}>2nd color h2</h2>
        <h3 className={classes.h3}>3rd color h3</h3>
        <h4 className={classes.h4}>4th color h4</h4>
        <h5 className={classes.h5}>5th color h5</h5>
      </Container>
    </div>
  );
}

export default Home;
