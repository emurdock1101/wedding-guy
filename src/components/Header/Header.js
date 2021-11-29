import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: "auto",
    marginRight: 0,
    // border: "1px solid red",
    display: "flex",
    justifyContent: "flex-end"
  },
  logo: {
    cursor: "pointer",
    color: theme.palette.first,
    // border: "1px solid green",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.second,
    marginLeft: theme.spacing(10),
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.first,
    },
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    // border: "1px solid green",
  },
  toolBar: {
    padding: 0,
    margin: 0,
    // border: "1px solid green",
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <CssBaseline />
      <Toolbar className={classes.toolBar}>
        <Typography variant="h3" className={classes.logo}>
          ELLIOT
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/projects" className={classes.link}>
            Projects
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
