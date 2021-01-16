import React, { useState, useMemo, useEffect, useContext } from "react";
import UserContext from "../contexts/user.context";
import LoadingContext from "../contexts/loading.context";

import setAuthorizationHeader from "../../utils/setAuthorizationHeader.utils";
import { fetchUser } from "../actions/user.action";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { loading, hideLoading } = useContext(LoadingContext);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (localStorage.USER_DATA) {
      setAuthorizationHeader(localStorage.USER_DATA);
    }

    const fetchData = async () => {
      const result = await fetchUser();
      setUser(result);
      hideLoading();
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
      )}
    </React.Fragment>
  );
};

export default UserProvider;
