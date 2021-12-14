import React from "react";
// import { IntlProvider, addLocaleData } from "react-intl";
// import { ThemeProvider } from "styled-components";

// import en from "react-intl/locale-data/en";
// import fr from "react-intl/locale-data/fr";
// import LocaleContext from "../contexts/locale.context";
// import LocaleReducer from "../reducers/locale.reducer";
// import i18n from "../../utils/i18n";
// import themes from "../../utils/themes.utils";
// import { media } from "../../utils/mixins.utils";

// import { setLocalei18n, setTheme } from "../actions/locale.action";

const LocaleProvider = (props:any) => {
  // const initialState = useContext(LocaleContext);
  // const [{ lang, theme }, dispatch] = useReducer(LocaleReducer, initialState);

  // addLocaleData(en);
  // addLocaleData(fr);

  // useEffect(() => {
  //   if (localStorage.USER_LANG) {
  //     setLocalei18n(localStorage.USER_LANG, dispatch);
  //   }

  //   if (localStorage.USER_THEME) {
  //     setTheme(localStorage.USER_THEME, dispatch);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>{props.children}</>
    // <IntlProvider locale="fr" messages={i18n[lang]}>
    //   <LocaleContext.Provider value={{ lang, theme, dispatch }}>
    //     <ThemeProvider theme={{ ...themes[theme], ...media }}>
    //       {children}
    //     </ThemeProvider>
    //   </LocaleContext.Provider>
    // </IntlProvider>
  );
};

export default LocaleProvider;
