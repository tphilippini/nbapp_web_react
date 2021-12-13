import React from "react";

import LocaleProvider from "./locale.provider";
// import UserProvider from "./user.provider";
// import LoadingProvider from "./loading.provider";
// import VideoProvider from "./video.provider";
// import Spinner from "../../components/helpers/Spinner.helpers";


const Store = ({ children }) => {
  return (
    <LocaleProvider>
      {/* <LoadingProvider> */}
      {/* <VideoProvider> */}
      {/* <Spinner /> */}
      {/* <UserProvider>{children}</UserProvider> */}
        {children}
      {/* </VideoProvider> */}
      {/* </LoadingProvider> */}
    </LocaleProvider>
  );
};

export default Store;
