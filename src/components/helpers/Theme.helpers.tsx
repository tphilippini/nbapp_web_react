import React, { useContext } from "react";
import LocaleContext from "../../stores/contexts/locale.context";
import { setTheme } from "../../stores/actions/locale.action";

import Button from "../buttons/Button.component";
import Icon from "../elements/Icon.component";

const ThemeSelect = () => {
  const { theme, dispatch } = useContext(LocaleContext);

  // const onThemeSelect = e => setTheme(e.target.value, dispatch);

  // const renderOption = code => <option value={code}>{code}</option>;

  const toggleTheme = () => {
    theme === "light"
      ? setTheme("dark")
      : setTheme("light");
  };

  return (
    <Button
      className="is-pulled-right"
      outlined="true"
      primary="true"
      rounded="true"
      onClick={toggleTheme}
    >
      <Icon>
        {/* <i className={`fa ${theme === "light" ? "fa-moon-o" : "fa-sun-o"}`}></i> */}
        <i className="fa fa-lightbulb-o"></i>
      </Icon>
    </Button>
  );
};

export default ThemeSelect;
