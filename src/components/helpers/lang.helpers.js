import React, { useContext } from "react";
import LocaleContext from "../../stores/contexts/locale.context";
import { setLocalei18n } from "../../stores/actions/locale.action";

import Select from "../forms/Select.component";

const LangSelect = () => {
  const { lang, dispatch } = useContext(LocaleContext);
  const options = [
    { label: "FR", value: "fr" },
    { label: "EN", value: "en" }
  ];

  const onLanguageSelect = e => setLocalei18n(e.target.value, dispatch);

  // const renderOption = code => (
  //   <option value={code}>{code.toUpperCase()}</option>
  // );

  return (
    <Select
      value={lang}
      onChange={onLanguageSelect}
      primary="true"
      rounded="true"
      small="true"
      fullwidth="true"
      options={options}
    ></Select>
  );
};

export default LangSelect;
