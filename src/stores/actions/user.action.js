import api from "./api.action";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader.utils";

export const login = async (credentials) => {
  const result = await api.user.login(credentials);
  if (result.success) {
    const user = result.data[0];
    localStorage.USER_DATA = user.access_token;
    setAuthorizationHeader(localStorage.USER_DATA);
    return {
      uuid: user.uuid,
      email: user.email,
      alias: user.alias,
      firstName: user.firstName,
      lastName: user.lastName,
      methods: user.methods,
    };
  }
  return result.errors ? result.errors[0] : null;
};

export const loginSocial = async (token, method) => {
  const result = await api.user.loginSocial(token, method);
  if (result.success) {
    const user = result.data[0];
    localStorage.USER_DATA = user.access_token;
    setAuthorizationHeader(localStorage.USER_DATA);
    return {
      uuid: user.uuid,
      email: user.email,
      alias: user.alias,
      firstName: user.firstName,
      lastName: user.lastName,
      methods: user.methods,
    };
  }
  return result.errors[0];
};

export const logout = () => {
  localStorage.removeItem("USER_DATA");
  setAuthorizationHeader();
};

export const forgot = async (data) => {
  const result = await api.user.forgot(data);
  return result;
};

export const reset = (data) => api.user.reset(data);

export const validateToken = (token) => api.user.validateToken(token);

export const signup = async (data) => {
  const result = await api.user.signup(data);
  if (result.success) {
    localStorage.USER_DATA = result.data[0].access_token;
    setAuthorizationHeader(localStorage.USER_DATA);
    return result.data[0];
  }
  return result.errors[0];
};

export const fetchUser = async () => {
  const result = await api.user.fetchCurrentUser();
  if (result.success) return result.data[0];
  return null;
};

export const patch = async (data, type) => {
  const result = await api.user.patch(data, type);
  if (result.success) return result.data[0];
  return result.errors[0];
};

export const linkSocial = async (token, method) => {
  if (!["google", "facebook"].includes(method)) return null;

  const result = await api.user.linkSocial(token, method);
  if (result.success) return result.data[0];
  return result.errors[0];
};

export const unlinkSocial = async (method) => {
  if (!["google", "facebook"].includes(method)) return null;

  const result = await api.user.unlinkSocial(method);
  if (result.success) return result.data[0];
  return result.errors[0];
};
