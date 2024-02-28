import {Grid, makeStyles, Breadcrumbs} from '@material-ui/core';

interface FooterProps {}

const Header: React.FC<FooterProps> = (props: FooterProps) => {
  const useStyles = makeStyles((theme) => ({
    breadcrumbs: {
      backgroundColor: theme.palette.secondary.main,
      borderTop: '.5px solid lightgrey',
    },
    link: {
      textDecoration: 'none',
    },
    cl: {
      backgroundColor: 'white',
      textDecoration: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Breadcrumbs separator='>' aria-label='breadcrumb' className={classes.breadcrumbs}>
          <a href='https://www.craigslist.org/about/terms.of.use' className={classes.cl}>
            CL
          </a>
          <a href='https://www.craigslist.org/about/terms.of.use' className={classes.link}>
            terms
          </a>
          <a href='https://www.craigslist.org/about/terms.of.use' className={classes.link}>
            terms
          </a>
          <a href='https://www.craigslist.org/about/terms.of.use' className={classes.link}>
            terms
          </a>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default Header;
