import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post("/auth/token", {
          email: credentials.email,
          password: credentials.password,
          grant_type: "password",
          user_type: "user"
        })
        .then(res => res.data.data[0]),

    forgot: user =>
      axios.post("/auth/forgot", {
        email: user.email,
        user_type: "user",
        grant_type: "forgot"
      }),

    reset: user =>
      axios.post("/auth/reset", {
        token: user.token,
        password: user.password,
        confirm_password: user.confirm_password,
        user_type: "user",
        grant_type: "reset"
      }),

    signup: user =>
      axios.post("/users", { ...user }).then(res => res.data.data[0]),

    patch: (user, type) =>
      axios
        .patch(`/users/${user.uuid}`, { 
          ...user,
          grant_type: type,
          user_type: "user"
        })
        .then(res => res.data.data[0]),

    fetchCurrentUser: () =>
      axios
        .get("/users/current")
        .then(res => res.data.data[0])
        .catch(err => err)
  }
};
