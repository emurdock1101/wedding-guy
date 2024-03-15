import {createTheme} from '@material-ui/core/styles';

export let theme = createTheme({
  palette: {
    error: {
      main: '#ED5362', // unused
    },
    warning: {
      main: '#9A338E', // unused
    },
    success: {
      main: '#551A8B', // purple link
    },
    primary: {
      main: '#0000EE', // blue link
    },
    secondary: {
      main: '#eee', // background light grey
    },
    info: {
      main: '#EAEAEA', // border darker grey
    },
  },
  typography: {
    fontFamily: 'Times New Roman',
    fontSize: 12,
  },
});
