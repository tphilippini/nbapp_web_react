import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../stores/contexts/user.context";
import Loading from "../../screens/Loading.screen";

const UserRoute = (props:any) => {
  const { component: Component, ...rest } = props;
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
};
export default UserRoute;
