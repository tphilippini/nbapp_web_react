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

    signup: user =>
      axios.post("/users", { ...user }).then(res => res.data.data[0]),

    fetchCurrentUser: () =>
      axios
        .get("/users/current")
        .then(res => res.data.data[0])
        .catch(err => err)
  }
};
