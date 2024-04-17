import {makeStyles, Breadcrumbs} from '@material-ui/core';

interface HeaderProps {
  title: string;
  url: string;
}

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    backgroundColor: theme.palette.secondary.main,
    borderTop: '.5px solid lightgrey',
    minHeight: 40,
    paddingLeft: 10,
    alignContent: 'center',
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    fontSize: 16,
  },
  cl: {
    backgroundColor: 'white',
    textDecoration: 'none',
    fontSize: 16,
    borderRadius: '10px',
  },
}));

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <Breadcrumbs separator='>' aria-label='breadcrumb' className={classes.breadcrumbs}>
      <a href='/' className={classes.cl}>
        J&E
      </a>
      <a href={props.url} className={classes.link}>
        {props.title}
      </a>
    </Breadcrumbs>
  );
};

export default Header;
