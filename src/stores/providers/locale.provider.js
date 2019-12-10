import React, { useEffect, useContext, useReducer } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import LocaleContext from '../contexts/locale.context';
import LocaleReducer from '../reducers/locale.reducer';
import i18n from '../../utils/i18n';

import { setLocalei18n, setTheme } from '../actions/locale.action';

const LocaleProvider = ({ children }) => {
  const initialState = useContext(LocaleContext);
  const [{ lang, theme }, dispatch] = useReducer(LocaleReducer, initialState);

  addLocaleData(en);
  addLocaleData(fr);

  useEffect(() => {
    if (localStorage.USER_LANG) {
      setLocalei18n(localStorage.USER_LANG, dispatch);
    }

    if (localStorage.USER_THEME) {
      setTheme(localStorage.USER_THEME, dispatch);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <IntlProvider locale="fr" messages={i18n[lang]}>
      <LocaleContext.Provider value={{ lang, theme, dispatch }}>
        <div className={theme}>{children}</div>
      </LocaleContext.Provider>
    </IntlProvider>
  );
};

export default LocaleProvider;
