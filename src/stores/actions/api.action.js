import axios from "axios";

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

    loginSocial: (token, method) =>
      axios
        .post(`/auth/${method}/token`, {
          access_token: token,
          grant_type: method,
          user_type: "user",
        })
        .then((res) => res.data)
        .catch((err) => err.response.data),

    loginFacebook: (token) =>
      axios
        .post("/auth/facebook/token", {
          access_token: token,
          grant_type: "facebook",
          user_type: "user",
        })
        .then((res) => res.data.data[0]),

    loginGoogle: (token) =>
      axios
        .post("/auth/google/token", {
          access_token: token,
          grant_type: "google",
          user_type: "user",
        })
        .then((res) => res.data.data[0]),

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
        .catch((err) => err),
  },

  match: {
    fetch: (date) => axios.get(`/matches/${date}`).then((res) => res.data),
  },

  league: {
    fetch: (uuid) => axios.get(`/leagues/${uuid}`).then((res) => res.data),

    post: (league) =>
      axios.post("/leagues", { ...league }).then((res) => res.data.data[0]),
  },
};
