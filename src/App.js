import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/navigation/header.component";
import Landing from "./components/layouts/landing.component";
import Dashboard from "./components/layouts/dashboard.component";
import NotFound from "./components/layouts/notfound.component";

import Login from "./components/login/login.component";
import Signup from "./components/signup/signup.component";
import Account from "./components/account/account.component";

import UserRoute from "./components/routes/user.route";
import GuestRoute from "./components/routes/guest.route";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <GuestRoute path="/login" exact component={Login} />
        <GuestRoute path="/signup" exact component={Signup} />
        <UserRoute path="/dashboard" exact component={Dashboard} />
        <UserRoute path="/account" exact component={Account} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
