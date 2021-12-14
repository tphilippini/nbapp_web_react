import { any } from "prop-types";
import { createContext } from "react";

const LocaleContext = createContext({
  lang: "fr",
  theme: "dark",
  dispatch: any,
});

export default LocaleContext;
