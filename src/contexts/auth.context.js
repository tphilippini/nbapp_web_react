import { createContext } from "react";

const AuthContext = createContext({
  user: {
    email: "",
    alias: ""
  }
});

export default AuthContext;
