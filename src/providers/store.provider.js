import React from "react";
import LoadingProvider from "./loading.provider";
import AuthProvider from "./auth.provider";
import Spinner from "../components/helpers/spinner.helper";

const Store = ({ children }) => {
  return (
    <LoadingProvider>
      <Spinner />
      <AuthProvider>{children}</AuthProvider>
    </LoadingProvider>
  );
};

export default Store;
