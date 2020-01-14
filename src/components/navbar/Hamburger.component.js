import React from "react";
import styled from "styled-components/macro";

const Menu = styled.div`
  cursor: pointer;
  float: right;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const Line = styled.span`
  display: block;
  width: 26px;
  height: 4px;
  margin-bottom: 5px;
  background: ${props => props.theme.background};
  border-radius: 3px;
`;

const Hamburger = ({ handleClick }) => {
  return (
    <Menu onClick={() => handleClick()}>
      <Line />
      <Line />
      <Line />
    </Menu>
  );
};

export default Hamburger;
