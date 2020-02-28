import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";

import Landing from "./screens/Landing.screen";
import Dashboard from "./screens/Dashboard.screen";
import LeagueMode from "./screens/LeagueMode.screen";
import Account from "./screens/Account.screen";
import Login from "./screens/Login.screen";
import Forgot from "./screens/Forgot.screen";
import Signup from "./screens/Signup.screen";
import Reset from "./screens/Reset.screen";
import NotFound from "./screens/NotFound.screen";

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
        <UserRoute path="/league/create" exact component={LeagueMode} />
        <UserRoute path="/account" exact component={Account} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
