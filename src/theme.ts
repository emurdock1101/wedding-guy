import { createTheme } from "@material-ui/core/styles";

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#00C9B7",
    },
    secondary: {
      main: "#344B47",
    },

    error: {
      main: "#ED5362",
    },

    warning: {
      main: "#9A338E",
    },
    info: {
      main: "#96B1AC",
    },
    success: {
      main: "#3A81CD"
    }
  },
});
