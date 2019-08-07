import React, { useContext } from "react";
import LocaleContext from "../../contexts/locale.context";
import { setTheme } from "../../actions/locale.action";

const ThemeSelect = () => {
  const { theme, dispatch } = useContext(LocaleContext);

  // const onThemeSelect = e => setTheme(e.target.value, dispatch);

  // const renderOption = code => <option value={code}>{code}</option>;

  const toggleTheme = () => {
    (theme === 'light') ? setTheme("dark", dispatch) : setTheme("light", dispatch);
  }

  return (
    <div className="control">
      {/* <div className="select is-small is-rounded">
        <select value={theme} onChange={onThemeSelect}>
          {renderOption("light")}
          {renderOption("dark")}
        </select> 
      </div>*/}

      <button className="button is-rounded is-small" onClick={toggleTheme}>
        <span className="icon is-small">
          <i className={`fa ${theme && theme === "light" ? "fa-moon-o" : "fa-sun-o"}`}></i>
        </span>
      </button>
    </div>
  );
};

export default ThemeSelect;
