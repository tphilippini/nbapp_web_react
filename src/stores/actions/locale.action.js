import { LOCALE_LANG_SET, LOCALE_THEME_SET } from "./types.action";

export const langSet = lang => ({
  type: LOCALE_LANG_SET,
  lang
});

export const themeSet = theme => ({
  type: LOCALE_THEME_SET,
  theme
});

export const setLocalei18n = (lang, dispatch) => {
  localStorage.USER_LANG = lang;
  dispatch(langSet(lang));
};

export const setTheme = (theme, dispatch) => {
  localStorage.USER_THEME = theme;
  dispatch(themeSet(theme));
};
