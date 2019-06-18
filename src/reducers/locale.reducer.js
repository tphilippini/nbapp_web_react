import { LOCALE_LANG_SET } from "../actions/types.action";

const LocaleReducer = (state = { lang: "fr" }, action = {}) => {
  switch (action.type) {
    case LOCALE_LANG_SET:
      return { lang: action.lang };
    default:
      return state;
  }
};

export default LocaleReducer;
