import React, { useState, useMemo, useEffect } from "react";
import UserContext from "../contexts/user.context";
// import LoadingContext from "../contexts/loading.context";

import setAuthorizationHeader from "../../utils/setAuthorizationHeader.utils";
import { fetchUser, verifyExpToken } from "../actions/user.action";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // const { loading, hideLoading } = useContext(LoadingContext);

  const value = useMemo(
    () => ({ user, setUser, isLoading }),
    [user, setUser, isLoading]
  );

  useEffect(() => {
    if (localStorage.getItem("USER_DATA")) {
      const userData = JSON.parse(localStorage.getItem("USER_DATA"));
      verifyExpToken(userData);
      setAuthorizationHeader(userData);
    }

    async function findUser() {
      await fetchUser()
        .then((res) => {
          setUser(res);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
    findUser();
  }, []);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
