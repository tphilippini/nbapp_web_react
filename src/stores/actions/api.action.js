import axios from "axios";
import jwtDecode from "jwt-decode";
import { refreshToken } from "./user.action";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

axios.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    const userData = JSON.parse(localStorage.getItem("USER_DATA"));
    if (userData) {
      const decodeToken = jwtDecode(userData.access_token);
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        const newAccessToken = await refreshToken({
          client_id: userData.client_id,
          refresh_token: userData.refresh_token,
        });
        if (newAccessToken) {
          config.header["authorization"] = `Bearer ${newAccessToken}`;
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  user: {
    login: (credentials) =>
      instance
        .post("/auth/token", {
          email: credentials.email,
          password: credentials.password,
          grant_type: "password",
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    refreshToken: (credentials) => {
      // Need to create Axios instance, to avoid infinite loop
      // To refresh token
      const AXIOS = axios.create();
      AXIOS.post("/auth/token", {
        client_id: credentials.client_id,
        refresh_token: credentials.refresh_token,
        grant_type: "refresh_token",
        user_type: "user",
      })
        .then((res) => res.data)
        .catch((err) => err.response.data);
    },

    loginSocial: (token, method) =>
      instance
        .post(`/auth/${method}/token`, {
          access_token: token,
          grant_type: method,
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    forgot: (user) =>
      instance
        .post("/auth/forgot", {
          email: user.email,
          user_type: "user",
          grant_type: "forgot",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    reset: (user) =>
      instance
        .post("/auth/reset", {
          token: user.token,
          password: user.password,
          confirm_password: user.confirm_password,
          user_type: "user",
          grant_type: "reset",
        })
        .then((res) => res.data),

    validateToken: (token) =>
      instance
        .post("/auth/validate", {
          token,
          user_type: "user",
          grant_type: "validate",
        })
        .then((res) => res.data),

    signup: (user) =>
      instance
        .post("/users", { ...user })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    patch: (user, type) =>
      instance
        .patch(`/users/${user.uuid}`, {
          ...user,
          grant_type: type,
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    linkSocial: (token, method) =>
      instance
        .post(`/users/${method}/link`, {
          access_token: token,
          grant_type: "link",
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    unlinkSocial: (method) =>
      instance
        .post(`/users/${method}/unlink`, {
          grant_type: "unlink",
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    fetchCurrentUser: () =>
      instance
        .get("/users/current")
        .then((res) => res.data)
        .catch((err) => err.response.data),
  },

  match: {
    fetch: (date) =>
      instance
        .get(`/matches/${date}`)
        .then((res) => res.data)
        .catch((err) => err.response.data),
  },

  league: {
    fetch: (uuid) => instance.get(`/leagues/${uuid}`).then((res) => res.data),

    post: (league) =>
      instance.post("/leagues", { ...league }).then((res) => res.data.data[0]),
  },
};
