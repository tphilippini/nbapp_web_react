import { createContext } from "react";

const LocaleContext = createContext({
  lang: "fr",
  theme: "light"
});

export default LocaleContext;
