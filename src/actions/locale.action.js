import { LOCALE_LANG_SET } from "./types.action";

export const langSet = lang => ({
  type: LOCALE_LANG_SET,
  lang
});

export const setLocalei18n = (lang, dispatch) => {
  localStorage.USER_LANG = lang;
  dispatch(langSet(lang));
};
