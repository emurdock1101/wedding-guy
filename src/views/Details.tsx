import {Grid, Paper, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import Map from '../components/Map';
import {useEffect, useState} from 'react';

interface DetailsProps {
  title: string;
  img: string;
  description: string;
}

const Details: React.FC<DetailsProps> = (props: DetailsProps) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingLeft: 30,
      paddingRight: 30,
      border: '0px solid red',
    },
    title: {
      ...theme.typography.h5,
      margin: 0,

      border: '0px solid red',
    },
    image: {
      marginTop: 0,
      width: '100%',
      objectFit: 'cover',
    },
    gridContainer: {
      border: '0px solid red',
    },
    description: {
      padding: 0,
      margin: 0
    },
    disclaimer: {
      paddingBottom: 30,
      fontSize: 12
    }
  }));
  const classes = useStyles();

  const getDaysAgo = () => {
    const currentDate = new Date();
    const startDate = new Date('2/27/2024');
    const diffInTime = currentDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return Math.floor(diffInDays);
  };

  const daysAgo = getDaysAgo();

  return (
    <div className={classes.container}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        className={classes.gridContainer}
        spacing={5}>
        <Grid item xs={10} className={classes.gridContainer}>
          <p>posted {daysAgo} days ago</p>
          <h6 className={classes.title}> {props.title}</h6>
        </Grid>
        <Grid item xs={5} className={classes.gridContainer}>
          <img src={props.img} className={classes.image} alt='image'></img>
        </Grid>
        <Grid item xs={5}>
          <Map />
        </Grid>
        <Grid item xs={10}>
          <p className={classes.description}> {props.description}</p>
        </Grid>
        <Grid item xs={10}>
          <p className={classes.disclaimer}>
            <a href='https://www.craigslist.org/about/scams'>Avoid scams, deal locally</a>
            <em>
              &emsp;Beware wiring (e.g. Western Union), cashier checks, money orders, shipping.
            </em>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
