import { LOCALE_LANG_SET, LOCALE_THEME_SET } from '../actions/types.action';

const LocaleReducer = (state = { lang: 'fr', theme: 'light' }, action = {}) => {
  switch (action.type) {
    case LOCALE_LANG_SET:
      return { ...state, lang: action.lang };
    case LOCALE_THEME_SET:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export default LocaleReducer;
