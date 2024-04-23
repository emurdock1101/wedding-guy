import {Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import Header from '../components/Header';
import {DetailedPage} from '../content/types';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
  },
  title: {
    ...theme.typography.h5,
    margin: 0,
    fontSize: 30,
    fontWeight: 600,
  },
  image: {
    marginTop: 0,
    width: '80%',
    objectFit: 'cover',
  },
  description: {
    padding: 0,
    margin: 0,
  },
  disclaimer: {
    paddingBottom: 30,
    fontSize: 12,
  },
  itemTitle: {
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
}));

const Gallery = (props: DetailedPage) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header title={props.title} url={props.url} />
      <div className={classes.container}>
        <Grid container justifyContent='center' alignItems='center' spacing={5}>
          <Grid item xs={12}>
            <GalleryGrid />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
