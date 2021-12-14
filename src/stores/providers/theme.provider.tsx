import React from "react";
// import { setTheme } from "../actions/locale.action";

const ThemeProvider = (props:any) => {
  // const initialState = useContext(LocaleContext);
  // const [{ theme }, dispatch] = useReducer(LocaleReducer, initialState);

  // useEffect(() => {
  //   if (localStorage.USER_THEME) {
  //     setTheme(localStorage.USER_THEME, dispatch);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>{props.children}</>
    // <LocaleContext.Provider value={{ theme, dispatch }}>
    //   <div className={theme}>{children}</div>
    // </LocaleContext.Provider>
  );
};

export default ThemeProvider;
