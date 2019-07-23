import React from "react";

import LocaleProvider from "./locale.provider";
import LoadingProvider from "./loading.provider";
import AuthProvider from "./auth.provider";
import Spinner from "../components/helpers/spinner.helper";

const Store = ({ children }) => {
  return (
    <LocaleProvider>
      <LoadingProvider>
        <Spinner />
        <AuthProvider>{children}</AuthProvider>
      </LoadingProvider>
    </LocaleProvider>
  );
};

export default Store;
