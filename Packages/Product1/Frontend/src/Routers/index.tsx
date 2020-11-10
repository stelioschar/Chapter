import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { LoginToProduct1 } from "@chapter/Features/Product1";

const AppRouter: FunctionComponent = (): JSX.Element => (
  <Switch>
    <Route path="/auth" exact component={LoginToProduct1} />
    <Route path="/" />
  </Switch>
);

export default AppRouter;
