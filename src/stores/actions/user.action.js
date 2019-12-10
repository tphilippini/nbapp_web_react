import { USER_FETCHED } from './types.action';
import { userLoggedIn } from './auth.action';
import api from './api.action';

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
    if (result.email && result.alias) dispatch(userFetched(result));
  });

export const patch = (data, type, dispatch) =>
  api.user.patch(data, type).then(result => {
    if (result.email && result.alias) dispatch(userFetched(result));
  });

export const linkGoogle = (token, dispatch) =>
  api.user.linkGoogle(token).then(result => {
    dispatch(userFetched(result));
  });

export const linkFacebook = (token, dispatch) =>
  api.user.linkFacebook(token).then(result => {
    dispatch(userFetched(result));
  });

export const unlinkGoogle = dispatch =>
  api.user.unlinkGoogle().then(result => {
    dispatch(userFetched(result));
  });

export const unlinkFacebook = dispatch =>
  api.user.unlinkFacebook().then(result => {
    console.log('UNLINK', result);
    dispatch(userFetched(result));
  });
