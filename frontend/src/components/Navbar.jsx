import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    justifyContent: "space-between",
  },
  rightbar: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default ({ props }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6">
            <b>Sirsa Today</b>
          </Typography>
          <Box className={classes.rightbar}>
            <Typography variant="body2" color="textSecondary">
              {new Date().toLocaleDateString("hi-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
