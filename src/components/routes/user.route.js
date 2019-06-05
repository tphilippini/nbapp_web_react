import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../contexts/auth.context";

const UserRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ user }) => (
      <Route
        {...rest}
        render={props =>
          user && !!user.email ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )}
  </AuthContext.Consumer>
);
export default UserRoute;
