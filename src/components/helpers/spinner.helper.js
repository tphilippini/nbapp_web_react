import React, { useContext } from "react";
import LoadingContext from "../../contexts/loading.context";

const Spinner = () => {
  const { loading } = useContext(LoadingContext);

  return <React.Fragment>{!loading && <p>hello loader</p>}</React.Fragment>;
};

export default Spinner;
