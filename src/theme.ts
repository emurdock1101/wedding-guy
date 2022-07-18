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
      main: "#00C9B7", // turquoise -- Agreeableness
    },
    secondary: {
      main: "#344B47", // dark green - Neurotocism
    },
    error: {
      main: "#ED5362", // red - Openness
    },
    warning: {
      main: "#9A338E", // purple -- Conscientiousness
    },
    info: {
      main: "#1b1d21", // black -- normal text
    },
    success: {
      main: "#3A81CD", // blue = Extraversion 
    },
  },
});
