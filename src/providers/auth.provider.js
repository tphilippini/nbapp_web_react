import React, { useContext, useReducer, useEffect } from "react";
import AuthContext from "../contexts/auth.context";
import LoadingContext from "../contexts/loading.context";
import UserReducer from "../reducers/user.reducer";

import setAuthorizationHeader from "../utils/setAuthorizationHeader.utils";
import { fetchCurrentUser } from "../actions/user.action";

const AuthProvider = ({ children }) => {
  const initialState = useContext(AuthContext);
  const { loading, hideLoading } = useContext(LoadingContext);

  const [{ user }, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    if (localStorage.USER_DATA) {
      setAuthorizationHeader(localStorage.USER_DATA);
    }

    fetchCurrentUser(dispatch).then(() => {
      hideLoading();
    });
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <AuthContext.Provider value={{ user, dispatch }}>
          {children}
        </AuthContext.Provider>
      )}
    </React.Fragment>
  );
};

export default AuthProvider;
