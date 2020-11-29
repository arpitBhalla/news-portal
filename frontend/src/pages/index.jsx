import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

const Auth = loadable(() => import("./Auth"), {
  fallback: <LinearProgress />,
});
const Doctor = loadable(() => import("./Doctor"), {
  fallback: <LinearProgress />,
});

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Doctor} />
        <Route path={"/blog"} component={Doctor} />
        <Route path={"/profile"} component={Doctor} />
        <Route exact path={"/auth"} component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
