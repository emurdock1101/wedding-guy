import {makeStyles, Box} from '@material-ui/core';
import {ReactComponent as Logo} from '../images/craigsvg.svg';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    borderLeft: '1px solid lightgrey',
    borderRight: '1px solid lightgrey',
    textAlign: 'center',
    paddingBottom: 10,
  },
  header: {
    fontFamily: 'Times New Roman',
    padding: 5,
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.success.main,
      textDecoration: 'underline',
    },
  },
  logo: {
    width: 50,
    height: 50,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <a href='https://www.craigslist.org'>
        <Logo className={classes.logo} />
      </a>
      <h2 className={classes.header}> J&E Wedding</h2>
      <a href='https://www.facebook.com/jennie.bottas' className={classes.link}>
        <p>Jennie Bottas</p>
      </a>
      <p>&</p>
      <a href='https://www.facebook.com/elliot.murdock' className={classes.link}>
        <p>Elliot Murdock</p>
      </a>
      <br></br>
      <a href='https://www.astrosofa.com/horoscope/aspects/2024/8/10' className={classes.link}>
        <p>August 10, 2024</p>
      </a>
      <br></br>
      <a href='https://www.thefarmhouseatbeautifulrun.com/' className={classes.link}>
        <p>The Farmhouse at Beautiful Run</p>
      </a>
      <br></br>
      <a href='https://maps.app.goo.gl/7vQBv61TP4PGjaYc7'>
        <p>352 Beautiful Run Rd, Madison, VA 22727</p>
      </a>
      <br></br>
      <a href='https://github.com/emurdock1101/wedding-guy'>
        <p>src code for this site</p>
      </a>
    </Box>
  );
};

export default Sidebar;
