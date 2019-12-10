import setAuthorizationHeader from '../../utils/setAuthorizationHeader.utils';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types.action';
import api from './api.action';

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
    dispatch(
      userLoggedIn({
        uuid: result.uuid,
        email: result.email,
        alias: result.alias,
        firstName: result.firstName,
        lastName: result.lastName,
        methods: result.methods
      })
    );
  });

export const loginGoogle = (token, dispatch) =>
  api.user.loginGoogle(token).then(result => {
    localStorage.USER_DATA = result.access_token;
    setAuthorizationHeader(localStorage.USER_DATA);
    dispatch(
      userLoggedIn({
        uuid: result.uuid,
        email: result.email,
        alias: result.alias,
        firstName: result.firstName,
        lastName: result.lastName,
        methods: result.methods
      })
    );
  });

export const loginFacebook = (token, dispatch) =>
  api.user.loginFacebook(token).then(result => {
    localStorage.USER_DATA = result.access_token;
    setAuthorizationHeader(localStorage.USER_DATA);
    dispatch(
      userLoggedIn({
        uuid: result.uuid,
        email: result.email,
        alias: result.alias,
        firstName: result.firstName,
        lastName: result.lastName,
        methods: result.methods
      })
    );
  });

export const logout = dispatch => {
  localStorage.removeItem('USER_DATA');
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const forgot = data => api.user.forgot(data);

export const reset = data => api.user.reset(data);

export const validateToken = token => api.user.validateToken(token);
