import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#eee",
    padding: 20,
    justifyContent: "center",
  },
}));

export default ({ props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" color="textSecondary">
        Right Choice Printing Press
      </Typography>
    </Box>
  );
};
