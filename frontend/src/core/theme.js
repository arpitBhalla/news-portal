import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, blue } from "@material-ui/core/colors";
export default createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: blue,
    secondary: {
      main: deepOrange[500],
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Poppins"],
      },
    },
  },
});
