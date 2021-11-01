import axios from "axios";
import jwtDecode from "jwt-decode";
import { refreshToken } from "./user.action";

// const AXIOS = axios.create();

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
      axios
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
      axios
        .post(`/auth/${method}/token`, {
          access_token: token,
          grant_type: method,
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    forgot: (user) =>
      axios
        .post("/auth/forgot", {
          email: user.email,
          user_type: "user",
          grant_type: "forgot",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    reset: (user) =>
      axios
        .post("/auth/reset", {
          token: user.token,
          password: user.password,
          confirm_password: user.confirm_password,
          user_type: "user",
          grant_type: "reset",
        })
        .then((res) => res.data),

    validateToken: (token) =>
      axios
        .post("/auth/validate", {
          token,
          user_type: "user",
          grant_type: "validate",
        })
        .then((res) => res.data),

    signup: (user) =>
      axios
        .post("/users", { ...user })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    patch: (user, type) =>
      axios
        .patch(`/users/${user.uuid}`, {
          ...user,
          grant_type: type,
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    linkSocial: (token, method) =>
      axios
        .post(`/users/${method}/link`, {
          access_token: token,
          grant_type: "link",
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    unlinkSocial: (method) =>
      axios
        .post(`/users/${method}/unlink`, {
          grant_type: "unlink",
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    fetchCurrentUser: () =>
      axios
        .get("/users/current")
        .then((res) => res.data)
        .catch((err) => err.response.data),
  },

  match: {
    fetch: (date) =>
      axios
        .get(`/matches/${date}`)
        .then((res) => res.data),
  },

  league: {
    fetch: (uuid) => axios.get(`/leagues/${uuid}`).then((res) => res.data),

    post: (league) =>
      axios.post("/leagues", { ...league }).then((res) => res.data.data[0]),
  },
};
