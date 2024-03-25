import {Box, Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import LinkBox from '../components/LinkBox';
import Sidebar from '../components/Sidebar';
import * as content from '../constants/content';

const Home: React.FC<{}> = () => {
  const useStyles = makeStyles((theme) => ({
    headerBox: {
      borderTop: '1px solid lightGrey',
      borderBottom: '1px solid lightGrey',
      backgroundColor: theme.palette.secondary.main,
      height: 30,
      textAlign: 'center',
      width: '100%',
      alignItems: 'center',
      padding: 20,
      margin: 0,
      display: 'flex',
    },
    headerLink: {
      textDecoration: 'none',
      fontSize: 24,
      fontFamily: 'Times New Roman, serif',
      color: '#222222',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    contentContainer: {
      marginTop: 20,
    },
    linksContainer: {
    },
  }));

  const classes = useStyles();

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={8}>
        <Grid container className={classes.contentContainer} spacing={2}>
          <Grid item xs={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Sidebar />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={classes.headerBox}>
                  <a
                    href='https://maps.app.goo.gl/6VQmxAx9pVvyExUa7'
                    className={classes.headerLink}>
                    <h5> madison, va 22727</h5>
                  </a>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <LinkBox {...content.faqs} />
              </Grid>
              <Grid item xs={7}>
                <LinkBox {...content.accomodations} />
              </Grid>
              <Grid item xs={6}>
                <LinkBox {...content.registry} />
              </Grid>
              <Grid item xs={6}>
                <LinkBox {...content.ourstory} />
              </Grid>
              <Grid item xs={4}>
                <LinkBox {...content.rsvp} />
              </Grid>
              <Grid item xs={4}>
                <LinkBox {...content.gallery} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
