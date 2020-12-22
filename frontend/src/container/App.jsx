import React from "react";
import App from "pages";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import theme from "core/theme";
// import store from "common/store";

export default () => (
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </SnackbarProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
