import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";
import Loading from "components/Loading";

const Auth = loadable(() => import("./Auth"), {
  fallback: <Loading />,
});
const EPaper = loadable(() => import("./Epaper"), {
  fallback: <Loading />,
});

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/auth"} component={Auth} />
        <Route path={"/"} component={EPaper} />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
