import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.hr`
  background-color: ${props => props.theme.divider};
  border: 0;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
`;

const Divider = () => {
  return <DividerWrapper />;
};

export default Divider;
