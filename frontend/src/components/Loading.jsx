import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#555",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    transition: "background 4s",
  },
  footer: {
    position: "fixed",
    bottom: 5,
  },
}));

export default function SimpleBox() {
  const classes = useStyles();
  const theme = useTheme();
  React.useEffect(() => {
    return () => {
      document.querySelector("meta[name=theme-color]").content =
        theme.palette.primary.main;
    };
  }, []);
  return (
    <Box className={classes.root}>
      <Fade timeout={700} in>
        <Typography variant="h4" color="textSecondary">
          <b>सिरसा टुडे</b>
        </Typography>
      </Fade>
      <footer className={classes.footer}>
        <CircularProgress color="inherit" style={{ color: "brown" }} />
      </footer>
    </Box>
  );
}
