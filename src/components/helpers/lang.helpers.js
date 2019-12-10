import React, { useContext } from 'react';
import LocaleContext from '../../stores/contexts/locale.context';
import { setLocalei18n } from '../../stores/actions/locale.action';

const LangSelect = () => {
  const { lang, dispatch } = useContext(LocaleContext);

  const onLanguageSelect = e => setLocalei18n(e.target.value, dispatch);

  const renderOption = code => (
    <option value={code}>{code.toUpperCase()}</option>
  );

  return (
    <div className="control has-icons-left">
      <div className="select is-small is-rounded">
        <select value={lang} onChange={onLanguageSelect}>
          {renderOption('en')}
          {renderOption('fr')}
        </select>
      </div>
      <span className="icon is-small is-left">
        <i className="fa fa-globe" />
      </span>
    </div>
  );
};

export default LangSelect;
