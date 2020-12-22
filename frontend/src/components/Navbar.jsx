import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FaFacebookSquare } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  bar: {
    padding: 0,
  },
  icon: {
    fontSize: 20,
    margin: "6px",
  },
}));

export default () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    threshold: 20,
    disableHysteresis: true,
  });
  return (
    <>
      <AppBar
        position="fixed"
        color={trigger ? "default" : "transparent"}
        elevation={trigger ? 4 : 0}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.bar}>
            <Typography variant={"h5"} style={{ flexGrow: 1, color: "red" }}>
              <b>सिरसा टुडे</b>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <b>
                {new Date().toLocaleDateString("hi-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </b>
            </Typography>
            <a href="https://facebook.com/sirsatoday">
              <FaFacebookSquare className={classes.icon} color="#3b5999" />
            </a>
            {/* <a href="https://facebook.com/sirsatoday">
            </a> */}
            <div>
              <Typography variant="body2" color="textSecondary">
                <b>13</b>
                <sup>o</sup>C
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Sirsa
              </Typography>
            </div>
          </Toolbar>
        </Container>
        <Divider />
      </AppBar>
      <div className={classes.toolbar}></div>
      <Container maxWidth="lg">
        <marquee>
          <Typography variant="subtitle1" color="textSecondary">
            Breaking News LIVE updates: Night curfew in Maharashtra's municipal
            corporations starting Saturday
          </Typography>
        </marquee>
      </Container>
    </>
  );
};
