import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../navigation/header.component";
import Landing from "../layouts/landing.component";
import Dashboard from "../layouts/dashboard.component";
import NotFound from "../layouts/notfound.component";

import Login from "../login/login.component";

import UserRoute from "../routes/user.route";
import GuestRoute from "../routes/guest.route";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <GuestRoute path="/login" exact component={Login} />
        <UserRoute path="/dashboard" exact component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
