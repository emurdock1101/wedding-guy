import * as React from 'react';
import {makeStyles} from '@material-ui/core';
import {DetailedPage} from '../constants/types';

const useStyles = makeStyles((theme) => ({
  topLink: {
    ...theme.typography,
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey',
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'white',
      textDecoration: 'underline',
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    paddingTop: 5,
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

const LinkBox = (props: DetailedPage) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <a href={props.url} className={classes.topLink}>
        <h1>{props.title}</h1>
      </a>

      <ul className={classes.list}>
        {props.items.map((item) => {
          return (
            <a href={item.itemUrl} className={classes.link}>
              <li className={classes.listItem}>{item.itemTitle}</li>
            </a>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default LinkBox;
