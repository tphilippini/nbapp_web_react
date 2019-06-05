import { USER_FETCHED } from "./types.action";
import api from "./api.action";

export const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const fetchCurrentUser = dispatch =>
  api.user.fetchCurrentUser().then(result => {
    if (result.email) dispatch(userFetched({ email: result.email }));
  });
