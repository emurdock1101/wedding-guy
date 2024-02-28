import {createTheme} from '@material-ui/core/styles';

const FONT_WEIGHT_REGULAR = 400;
const FONT_WEIGHT_BOLD = 700;

const HEADLINE_FONT_SIZE_XL = 48;
const HEADLINE_LINE_HEIGHT_XL = '6.4rem';

const HEADLINE_FONT_SIZE_L = 40;
const HEADLINE_LINE_HEIGHT_L = '5.2rem';

const HEADLINE_FONT_SIZE_M = 32;
const HEADLINE_LINE_HEIGHT_M = '4.0rem';

const HEADLINE_FONT_SIZE_S = 28;
const HEADLINE_LINE_HEIGHT_S = '3.6rem';

const HEADLINE_FONT_SIZE_XS = 24;
const HEADLINE_LINE_HEIGHT_XS = '3.2rem';

const HEADLINE_FONT_SIZE_XXS = 20;
const HEADLINE_LINE_HEIGHT_XXS = '2.4rem';

const HEADLINE_FONT_WEIGHT = FONT_WEIGHT_BOLD;

const COMPONENTS_FONT_SIZE_M = 18;
const COMPONENTS_LINE_HEIGHT_M = '2.4rem';

const COMPONENTS_FONT_SIZE_S = 16;
const COMPONENTS_LINE_HEIGHT_S = '2.0rem';

const COMPONENTS_FONT_SIZE_XS = 14;
const COMPONENTS_LINE_HEIGHT_XS = '1.6rem';

export let theme = createTheme({
  palette: {
    error: {
      main: '#ED5362',
    },
    warning: {
      main: '#9A338E',
    },
    success: {
      main: '#551A8B',
    },
    primary: {
      main: '#00C9B7',
    },
    secondary: {
      main: '#eee',
    },
    info: {
      main: '#EAEAEA',
    },
  },
  typography: {
    fontFamily: 'Times New Roman',
    fontSize: HEADLINE_FONT_SIZE_M,
    fontWeightRegular: FONT_WEIGHT_REGULAR,
    fontWeightBold: FONT_WEIGHT_BOLD,
    body1: {
      fontSize: COMPONENTS_FONT_SIZE_S,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_S,
      fontFeatureSettings: `'liga' off`,
      fontStyle: 'normal',
      textRendering: 'optimizeLegibility',
    },
    body2: {
      fontSize: COMPONENTS_FONT_SIZE_XS,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_XS,
    },
    button: {
      textTransform: 'none',
      fontSize: COMPONENTS_FONT_SIZE_S,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_S,
    },
    caption: {
      fontSize: COMPONENTS_FONT_SIZE_S,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_S,
    },
    h1: {
      fontSize: HEADLINE_FONT_SIZE_XL,
      fontWeight: HEADLINE_FONT_WEIGHT,
      lineHeight: HEADLINE_LINE_HEIGHT_XL,
    },
    h2: {
      fontSize: HEADLINE_FONT_SIZE_L,
      fontWeight: HEADLINE_FONT_WEIGHT,
      lineHeight: HEADLINE_LINE_HEIGHT_L,
    },
    h3: {
      fontSize: HEADLINE_FONT_SIZE_M,
      fontWeight: HEADLINE_FONT_WEIGHT,
      lineHeight: HEADLINE_LINE_HEIGHT_M,
    },
    h4: {
      fontSize: HEADLINE_FONT_SIZE_S,
      fontWeight: HEADLINE_FONT_WEIGHT,
      lineHeight: HEADLINE_LINE_HEIGHT_S,
    },
    h5: {
      fontSize: HEADLINE_FONT_SIZE_XS,
      fontWeight: HEADLINE_FONT_WEIGHT,
      lineHeight: HEADLINE_LINE_HEIGHT_XS,
    },
    h6: {
      fontSize: HEADLINE_FONT_SIZE_XXS,
      fontWeight: HEADLINE_FONT_WEIGHT,
      lineHeight: HEADLINE_LINE_HEIGHT_XXS,
    },
    overline: {
      fontSize: COMPONENTS_FONT_SIZE_M,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_M,
    },
    subtitle1: {
      fontSize: COMPONENTS_FONT_SIZE_M,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_M,
    },
    subtitle2: {
      fontSize: COMPONENTS_FONT_SIZE_S,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: COMPONENTS_LINE_HEIGHT_S,
    },
  },
});
