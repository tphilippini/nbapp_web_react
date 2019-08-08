import { createContext } from "react";

const AuthContext = createContext({
  user: {
    uuid: "",
    email: "",
    alias: "",
    firstName: "",
    lastName: ""
  }
});

export default AuthContext;
