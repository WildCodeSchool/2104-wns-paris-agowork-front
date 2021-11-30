import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "Raleway", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#0845BC",
      dark: "#0845BC",
      contrastText: "#0845BC",
    },
    secondary: {
      light: "#0066ff",
      // main: color of radio
      main: "#0845BC",
      // dark: will be calculated from palette.secondary.main,
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, "#004e92", "#000428"),  /* Chrome 10-25, Safari 5.1-6 */
        color: "white",
      },
    },
  },
});

export default theme;
