import React, { FunctionComponent } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import {LoginToProduct1 } from "@chapter/Features/Product2";

const AppRouter: FunctionComponent = (): JSX.Element => (
  <Switch>
    <Route path="/auth" exact component={LoginToProduct1} />
    <Route path="/" />
  </Switch>
);

export default withRouter(AppRouter);
