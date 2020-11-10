import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

const AppRouter: FunctionComponent = (): JSX.Element => (
  <Switch>
    <Route path="/feature" exact component={() => <div>Feature route</div>} />
    <Route path="/" />
  </Switch>
);

export default AppRouter;
