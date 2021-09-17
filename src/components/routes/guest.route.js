import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../stores/contexts/user.context";

const GuestRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return (
            <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
            );
          } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
export default GuestRoute;
