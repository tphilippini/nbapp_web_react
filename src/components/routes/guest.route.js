import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../stores/contexts/user.context";

const GuestRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      render={(props) =>
        user && user.email ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};
export default GuestRoute;
