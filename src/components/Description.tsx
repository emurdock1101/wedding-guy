import {Box, makeStyles} from '@material-ui/core';
import {useEffect, useState} from 'react';
interface FooterProps {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    box: {
      backgroundColor: theme.palette.secondary.main,
      border: '.5px solid lightgrey',
      textAlign: 'center',
      width: '100%',
    },
    footerList: {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      paddingLeft: 0,
    },
    listItem: {
      marginRight: isMobile ? '.5rem' : '1rem',
      textDecoration: 'none',
    },
    copyright: {
      color: 'black',
    },
    link: {
      textDecoration: 'none',
    }
  }));

  const classes = useStyles();

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <Box className={classes.box}>
      <ul className={classes.footerList}>
        <li className={classes.listItem}>© 2024 craigslist</li>
        <li className={classes.listItem}>
          <a href='https://www.craigslist.org/about/help/' className={classes.link}>
            help
          </a>
        </li>
        <li className={classes.listItem}>
          <a href='https://www.craigslist.org/about/help/safety' className={classes.link}>
            safety
          </a>
        </li>
        <li className={classes.listItem}>
          <a href='https://www.craigslist.org/about/privacy.policy' className={classes.link}>
            privacy
          </a>
        </li>
        <li className={classes.listItem}>
          <a href='https://www.craigslist.org/about/terms.of.use' className={classes.link}>
            terms
          </a>
        </li>
        <li className={classes.listItem}>
          <a href='https://www.craigslist.org/about/' className={classes.link}>
            about
          </a>
        </li>
        <li className={classes.listItem}>
          <a href='https://www.craigslist.org/about/craigslist_app' className={classes.link}>
            app
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default Footer;
