import { LOCALE_LANG_SET, LOCALE_THEME_SET } from "./types.action";

export const langSet = (lang:string) => ({
  type: LOCALE_LANG_SET,
  lang
});

export const themeSet = (theme:string) => ({
  type: LOCALE_THEME_SET,
  theme
});

export const setLocalei18n = (lang:string) => {
  localStorage.USER_LANG = lang;
//   dispatch(langSet(lang));
};

export const setTheme = (theme: string) => {
  localStorage.USER_THEME = theme;
//   dispatch(themeSet(theme));
};
