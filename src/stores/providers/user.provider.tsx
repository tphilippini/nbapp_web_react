import React, { useState, useMemo, useEffect } from "react";
import UserContext from "../contexts/user.context";
// import LoadingContext from "../contexts/loading.context";

import setAuthorizationHeader from "../../utils/setAuthorizationHeader.utils";
import { fetchUser } from "../actions/user.action";

const UserProvider = (props:any) => {
  // const [user, setUser] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  // // const { loading, hideLoading } = useContext(LoadingContext);

  // const value = useMemo(
  //   () => ({ user, setUser, isLoading }),
  //   [user, setUser, isLoading]
  // );

  // useEffect(() => {
  //   if (localStorage.getItem("USER_DATA")) {
  //     const userData = JSON.parse(localStorage.getItem("USER_DATA"));
  //     setAuthorizationHeader(userData);
  //   }

  //   async function findUser() {
  //     await fetchUser()
  //       .then((res) => {
  //         setUser(res);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //       });
  //   }
  //   findUser();
  // }, []);

  return (
    <>{props.children}</>
    // <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
