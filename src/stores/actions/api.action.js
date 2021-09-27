import axios from "axios";
import { refreshToken, logout } from "./user.action";

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

    refreshToken: (credentials) =>
      axios
        .post("/auth/token", {
          client_id: credentials.client_id,
          refresh_token: credentials.refresh_token,
          grant_type: "refresh_token",
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    verifyExpToken: (data) => {
      axios.interceptors.response.use(
        (res) => {
          return res;
        },
        async (error) => {
          const originalConfig = error.config;

          if (error.response) {
            if (error.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
              try {
                const isTokenRefreshed = await refreshToken({
                  client_id: data.client_id,
                  refresh_token: data.refresh_token,
                });
                if (!isTokenRefreshed) logout();

                return axios(originalConfig);
              } catch (_error) {
                if (_error.response && _error.response.data) {
                  return Promise.reject(_error.response.data);
                }

                return Promise.reject(_error);
              }
            }
          }

          return Promise.reject(error.response.data);
        }
      );
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
        .get(`${process.env.REACT_APP_API_HOST}/matches/${date}`)
        .then((res) => res.data),
  },

  league: {
    fetch: (uuid) => axios.get(`/leagues/${uuid}`).then((res) => res.data),

    post: (league) =>
      axios.post("/leagues", { ...league }).then((res) => res.data.data[0]),
  },
};
