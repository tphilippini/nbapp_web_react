import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// import Header from "./components/navigation/header.component";
// import Landing from "./components/layouts/landing.component";
// import Dashboard from "./components/layouts/dashboard.component";
import NotFound from "./components/layouts/notfound.component";
import Navbar from "./components/navbar/Navbar.component";

import Landing from "./screens/Landing.screen";
import Dashboard from "./screens/Dashboard.screen";

import Login from "./components/user/Login.component";
import Signup from "./components/user/Signup.component";
import Account from "./components/user/Account.component";
import Forgot from "./components/user/Forgot.component";
import Reset from "./components/user/Reset.component";

import UserRoute from "./components/routes/user.route";
import GuestRoute from "./components/routes/guest.route";

import GlobalStyle from "./styles/GlobalStyle.style";

const App = () => {
  const [showOptionsOverlay, toggleOptionsOverlay] = useState(false);

  return (
    <React.Fragment>
      <Navbar
        toggleOptionsOverlay={toggleOptionsOverlay}
        showOptionsOverlay={showOptionsOverlay}
      />
      <Switch>
        <Route path="/" exact component={Landing} />
        <GuestRoute path="/login" exact component={Login} />
        <GuestRoute path="/forgot" exact component={Forgot} />
        <GuestRoute path="/signup" exact component={Signup} />
        <GuestRoute path="/reset/:token" exact component={Reset} />
        <UserRoute path="/dashboard" exact component={Dashboard} />
        <UserRoute path="/account" exact component={Account} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
