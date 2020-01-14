import { createContext } from "react";

const LocaleContext = createContext({
  lang: "fr",
  theme: "dark"
});

export default LocaleContext;
