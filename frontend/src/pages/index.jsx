import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

const Auth = loadable(() => import("./Auth"), {
  fallback: <LinearProgress />,
});
const Doctor = loadable(() => import("./Epaper"), {
  fallback: <LinearProgress />,
});

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/auth"} component={Auth} />
        <Route path={"/"} component={Doctor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
