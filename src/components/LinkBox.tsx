import * as React from 'react';
import {makeStyles, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  topLink: {
    ...theme.typography.body1,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      textDecoration: 'underline',
      color: theme.palette.success.main,
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    borderBottom: `2px solid ${theme.palette.info.main}`,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.success.main,
    },
  },
}));

interface LinkBoxProps {
  title: string;
  links: {
    message: string;
    url: string;
  }[];
}

const LinkBox = (props: LinkBoxProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.box}>
        <a href='https://www.craigslist.org/about/help/' className={classes.topLink}>
          <h1> {props.title}</h1>
        </a>
      </Box>
      <ul className={classes.list}>
        {props.links.map((link) => {
          return (
            <li className={classes.listItem}>
              <a href={link.url} className={classes.link}>
                {link.message}
              </a>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default LinkBox;
