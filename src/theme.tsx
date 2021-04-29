import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
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
      contrastText: "#ffcc00",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "#0845BC",
        color: "white",
      },
    },
  },
});

export default theme;
