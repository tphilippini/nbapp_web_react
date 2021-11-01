import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../stores/contexts/user.context";
import Loading from "../../screens/Loading.screen";

const GuestRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return <Redirect
        to={{ pathname: "/dashboard", state: { from: props.location } }}
      />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
export default GuestRoute;
