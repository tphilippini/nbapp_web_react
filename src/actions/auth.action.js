import setAuthorizationHeader from "../utils/setAuthorizationHeader.utils";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types.action";
import api from "./api.action";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = (credentials, dispatch) =>
  api.user.login(credentials).then(result => {
    localStorage.USER_DATA = result.access_token;
    setAuthorizationHeader(localStorage.USER_DATA);
    dispatch(userLoggedIn({ email: result.email, loaded: true }));
  });

export const logout = dispatch => {
  localStorage.removeItem("USER_DATA");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
