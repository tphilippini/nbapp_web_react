import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../stores/contexts/user.context";

const UserRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && !!user.email ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default UserRoute;
