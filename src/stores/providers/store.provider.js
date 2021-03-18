import React from "react";

import LocaleProvider from "./locale.provider";
// import LoadingProvider from "./loading.provider";
// import VideoProvider from "./video.provider";
// import Spinner from "../../components/helpers/Spinner.helpers";

import UserProvider from "./user.provider";

const Store = ({ children }) => {
  return (
    <LocaleProvider>
      {/* <LoadingProvider> */}
      {/* <VideoProvider> */}
      {/* <Spinner /> */}
      <UserProvider>{children}</UserProvider>
      {/* </VideoProvider> */}
      {/* </LoadingProvider> */}
    </LocaleProvider>
  );
};

export default Store;
