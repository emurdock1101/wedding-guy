import { createTheme } from "@material-ui/core/styles";

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export const theme = createTheme({
  palette: {
    primary: {
      //lime
      main: "#DFFFBF",
    },
    secondary: {
      //cream
      main: "#FFF6EE",
    },
  },
});
