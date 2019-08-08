import { USER_FETCHED } from "./types.action";
import { userLoggedIn } from "./auth.action";
import api from "./api.action";

export const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const signup = (data, dispatch) =>
  api.user.signup(data).then(result => {
    localStorage.USER_DATA = result.access_token;
    dispatch(userLoggedIn({ email: result.email, alias: result.alias }));
  });

export const fetchCurrentUser = dispatch =>
  api.user.fetchCurrentUser().then(result => {
    if (result.email && result.alias)
      dispatch(userFetched(result));
  });

export const patch = (data, type, dispatch) =>
  api.user.patch(data, type).then((result) => {
    if (result.email && result.alias)
      dispatch(userFetched(result));
  });
