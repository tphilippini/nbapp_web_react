import React, { useState, useContext, useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AuthContext from "../../contexts/auth.context";
import UserReducer from "../../reducers/user.reducer";

import Header from "../navigation/header.component";
import Landing from "../layouts/landing.component";
import Dashboard from "../layouts/dashboard.component";
import NotFound from "../layouts/notfound.component";

import Login from "../login/login.component";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader.utils";
import { fetchCurrentUser } from "../../actions/user.action";

import UserRoute from "../routes/user.route";
import GuestRoute from "../routes/guest.route";

const App = () => {
  const initialState = useContext(AuthContext);
  const [{ user }, dispatch] = useReducer(UserReducer, initialState);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.USER_DATA) {
      setAuthorizationHeader(localStorage.USER_DATA);
      fetchCurrentUser(dispatch).then(() => setLoading(true));
    } else {
      fetchCurrentUser(dispatch).then(() => setLoading(true));
    }
  }, []);

  return (
    <React.Fragment>
      {!loading ? (
        <div>Hello loading</div>
      ) : (
        <AuthContext.Provider value={{ user, dispatch }}>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <GuestRoute path="/login" exact component={Login} />
            <UserRoute path="/dashboard" exact component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </AuthContext.Provider>
      )}
    </React.Fragment>
  );
};

export default App;
