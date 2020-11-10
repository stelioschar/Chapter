import React, { FunctionComponent } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { LoginToProduct2 } from "@chapter/Features/Product2";
// import { LoginToProduct1 } from "@chapter/Features/Product1";

const AppRouter: FunctionComponent = (): JSX.Element => (
  <Switch>
    <Route path="/auth" exact component={LoginToProduct2} />
    <Route path="/" />
  </Switch>
);

export default withRouter(AppRouter);
