import {Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import Map from '../components/Map';
import Header from '../components/Header';
import {DetailedPage} from '../constants/types';

const Details = (props: DetailedPage) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20
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
      fontSize: 12,
    },
    itemTitle: {
      fontSize: 16,
      padding: 0,
      margin: 0,
    },
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
    <React.Fragment>
      <Header title={props.title} url={props.url} />
      <div className={classes.container}>
        <Grid container justifyContent='center' alignItems='center' spacing={2}>
          <Grid item xs={10} md={10}>
            <p>posted {daysAgo} days ago</p>
            <h6 className={classes.title}> {props.title}</h6>
          </Grid>
          <Grid item xs={10} md={5}>
            <img src={props.img} className={classes.image} alt='detailedImage'></img>
          </Grid>
          <Grid item xs={10} md={5}>
            {props.img2 && (
              <img src={props.img2} className={classes.image} alt='detailedImage'></img>
            )}
            {!props.img2 && <Map />}
          </Grid>
          {props.items.map((item, index) => {
            return (
              <Grid item xs={10} key={item.itemTitle}>
                <h6 className={classes.itemTitle} id={item.itemId}>
                  {item.itemTitle}
                </h6>
                <br></br>
                <p className={classes.description}> {item.itemDescription}</p>
              </Grid>
            );
          })}
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
    </React.Fragment>
  );
};

export default Details;
