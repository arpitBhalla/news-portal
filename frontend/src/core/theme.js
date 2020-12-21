import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, blue } from "@material-ui/core/colors";

export default createMuiTheme({
  typography: {
    fontFamily: "Noto Sans , sans-serif",
  },
  palette: {
    primary: blue,
    secondary: {
      main: deepOrange[500],
    },
    // type: "dark",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Noto Sans"],
      },
    },
  },
});
