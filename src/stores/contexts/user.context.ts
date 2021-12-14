import { createContext } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
  isLoading: false,
});

export default UserContext;
