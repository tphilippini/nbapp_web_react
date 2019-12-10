import React, { useEffect, useContext, useReducer } from "react";
import LocaleContext from "../contexts/locale.context";
import LocaleReducer from "../reducers/locale.reducer";
import { setTheme } from "../actions/locale.action";

const ThemeProvider = ({ children }) => {
  const initialState = useContext(LocaleContext);
  const [{ theme }, dispatch] = useReducer(LocaleReducer, initialState);

  useEffect(() => {
    if (localStorage.USER_THEME) {
      setTheme(localStorage.USER_THEME, dispatch);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <LocaleContext.Provider value={{ theme, dispatch }}>
      <div className={theme}>{children}</div>
    </LocaleContext.Provider>
  );
};

export default ThemeProvider;
