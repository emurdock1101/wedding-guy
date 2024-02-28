import {makeStyles, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    borderLeft: '1px solid lightgrey',
    borderRight: '1px solid lightgrey',
    textAlign: 'center',
  },
  header: {
    fontFamily: 'Times New Roman',
    padding: 5
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <h2 className={classes.header}>J&E Wedding</h2>
      <p>Jennie Bottas</p>
      <p>and</p>
      <p>Elliot Murdock</p>
      <br></br>
      <p>August 10, 2024</p>
      <br></br>
      <p>352 Beautiful Run Rd, Madison, VA 22727</p>
      <a href='https://www.craigslist.org/about/help/'>
        <h1> hey</h1>
      </a>
      <a href='https://www.craigslist.org/about/help/'>
        <h1> hey</h1>
      </a>
      <a href='https://www.craigslist.org/about/help/'>
        <h1> hey</h1>
      </a>
      <a href='https://www.craigslist.org/about/help/'>
        <h1> hey</h1>
      </a>
      <a href='https://www.craigslist.org/about/help/'>
        <h1> hey</h1>
      </a>
    </Box>
  );
};

export default Sidebar;
