import React, { useContext } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

import LoadingContext from "../../stores/contexts/loading.context";

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  margin: -23.5px -66.5px 0 0;
`;

const Spinner = () => {
  let { loading } = useContext(LoadingContext);

  return (
    <>
      {!loading && (
        <SpinnerWrapper>
          <ReactLoading
            type={"spin"}
            // color={"#5f45bb"}
            color={"#fff"}
            height={40}
            width={40}
          />
        </SpinnerWrapper>
      )}
    </>
  );
};

export default Spinner;
