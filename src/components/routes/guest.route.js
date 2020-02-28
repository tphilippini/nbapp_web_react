import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../stores/contexts/auth.context";

const GuestRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ user }) => (
      <Route
        render={props =>
          user && user.email ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
        {...rest}
      />
    )}
  </AuthContext.Consumer>
);
export default GuestRoute;
