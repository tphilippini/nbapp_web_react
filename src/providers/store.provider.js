import React from "react";

import LangProvider from "./lang.provider";
import LoadingProvider from "./loading.provider";
import AuthProvider from "./auth.provider";
import Spinner from "../components/helpers/spinner.helper";

const Store = ({ children }) => {
  return (
    <LangProvider>
      <LoadingProvider>
        <Spinner />
        <AuthProvider>{children}</AuthProvider>
      </LoadingProvider>
    </LangProvider>
  );
};

export default Store;
