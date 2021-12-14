import api from "./api.action";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader.utils";

export const login = async (credentials: {email:string, password:string}) => {
  const result = await api.user.login(credentials);
  if (result.success) {
    const user = result.data[0];
    const storage = {
      access_token: user.access_token,
      client_id: user.client_id,
      refresh_token: user.refresh_token,
    };
    localStorage.setItem("USER_DATA", JSON.stringify(storage));
    setAuthorizationHeader(JSON.parse(localStorage.getItem("USER_DATA") || ""));
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

export const loginSocial = async (token:string, method:string) => {
  const result = await api.user.loginSocial(token, method);
  if (result.success) {
    const user = result.data[0];
    const storage = {
      access_token: user.access_token,
      client_id: user.client_id,
      refresh_token: user.refresh_token,
    };
    localStorage.setItem("USER_DATA", JSON.stringify(storage));
    setAuthorizationHeader(JSON.parse(localStorage.getItem("USER_DATA") || ""));
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

export const forgot = async (data:{email: string}) => {
  const result = await api.user.forgot(data);
  return result;
};

export const reset = (data:any) => api.user.reset(data);

export const validateToken = (token:string) => api.user.validateToken(token);

export const refreshToken = async (credentials:any) => {
  const result = await api.user.refreshToken(credentials);
  // if (result.success) {
  //   const storage = {
  //     access_token: result.data[0].access_token,
  //     client_id: result.data[0].client_id,
  //     refresh_token: result.data[0].refresh_token,
  //   };
  //   localStorage.setItem("USER_DATA", JSON.stringify(storage));
  //   setAuthorizationHeader(storage);
  //   return storage.access_token;
  // }
  return null;
};

export const signup = async (data:any) => {
  const result = await api.user.signup(data);
  if (result.success) {
    const storage = {
      access_token: result.data[0].access_token,
      client_id: result.data[0].client_id,
      refresh_token: result.data[0].refresh_token,
    };
    localStorage.setItem("USER_DATA", JSON.stringify(storage));
    setAuthorizationHeader(storage);
    return result.data[0];
  }
  return result.errors[0];
};

export const fetchUser = async () => {
  const result = await api.user.fetchCurrentUser();
  if (result.success) return result.data[0];
  return null;
};

export const patch = async (data:any, type:string) => {
  const result = await api.user.patch(data, type);
  if (result.success) return result.data[0];
  return result.errors[0];
};

export const linkSocial = async (token:string, method:string) => {
  if (!["google", "facebook"].includes(method)) return null;

  const result = await api.user.linkSocial(token, method);
  if (result.success) return result.data[0];
  return result.errors[0];
};

export const unlinkSocial = async (method:string) => {
  if (!["google", "facebook"].includes(method)) return null;

  const result = await api.user.unlinkSocial(method);
  if (result.success) return result.data[0];
  return result.errors[0];
};
