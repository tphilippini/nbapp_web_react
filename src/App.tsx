import React, { Suspense, lazy, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";

// import LeagueMode from "./screens/LeagueMode.screen";
// import LeagueSettings from "./screens/LeagueSettings.screen";
// import Account from "./screens/Account.screen";
// import Forgot from "./screens/Forgot.screen";
// import Signup from "./screens/Signup.screen";
// import Reset from "./screens/Reset.screen";

// import UserRoute from "./components/routes/user.route";
// import GuestRoute from "./components/routes/guest.route";

import GlobalStyle from "./styles/GlobalStyle.style";

// const Landing = lazy(() => import("./screens/Landing.screen"));
// const Login = lazy(() => import("./screens/Login.screen"));
const Dashboard = lazy(() => import("./screens/Dashboard.screen"));
const NotFound = lazy(() => import("./screens/NotFound.screen"));

type AppProps = {}

const App:React.FC = (props:AppProps) => {
  const [showOptionsOverlay, toggleOptionsOverlay] = useState(false);

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Navbar
        toggleOptionsOverlay={toggleOptionsOverlay}
        showOptionsOverlay={showOptionsOverlay}
        {...props}
      />
      <Switch>
        {/* <GuestRoute path='/' exact component={Landing} /> */}
        {/* <GuestRoute path='/login' exact component={Login} /> */}
        {/* <UserRoute path='/dashboard' exact component={Dashboard} /> */}
        <Route path='/' exact component={Dashboard} />

        {/* <GuestRoute path="/forgot" exact component={Forgot} />
        <GuestRoute path="/signup" exact component={Signup} />
        <GuestRoute path="/reset/:token" exact component={Reset} />
        <UserRoute path="/league/create" exact component={LeagueMode} />
        <UserRoute path="/league/:leagueId" exact component={LeagueMode} />
        <UserRoute
          path="/league/:leagueId/settings"
          exact
          component={LeagueSettings}
        />
        <UserRoute path="/account" exact component={Account} /> */}
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
