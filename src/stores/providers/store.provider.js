import React from "react";

import LocaleProvider from "./locale.provider";
import LoadingProvider from "./loading.provider";
import VideoProvider from "./video.provider";
import AuthProvider from "./auth.provider";
import Spinner from "../../components/helpers/Spinner.helper";

const Store = ({ children }) => {
  return (
    <LocaleProvider>
      <LoadingProvider>
        <VideoProvider>
          <Spinner />
          <AuthProvider>{children}</AuthProvider>
        </VideoProvider>
      </LoadingProvider>
    </LocaleProvider>
  );
};

export default Store;
