import React from "react";
import styled from "styled-components";

const Content = styled.div`
  height: 100vh;
  /* margin-top: 3rem; */
  /* margin: 1rem; */

  display: flex;
  align-items: center;
  justify-content: center;

  /* display: ${(props) => (props.show === 1 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  /* overflow: hidden; */
`;

const StyledContainer = styled.div`
  max-width: 1152px;
  margin: auto;
`;

const Container = (props) => {
  return (
    <Content>
      <StyledContainer {...props} />
    </Content>
  );
};

export default Container;
