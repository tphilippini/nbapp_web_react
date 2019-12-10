import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

const Content = styled(animated.div)`
  height: 100%;
  margin-top: 3rem;
  display: ${props => (props.show === 1 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  color: white;
  font-size: 22px;
  font-family: "Fugaz One", cursive;
  font-weight: 800;
  top: 50%;
  position: absolute;
  text-transform: uppercase;
`;

const Landing = () => {
  return (
    <Content>
      <Title>Landing</Title>
    </Content>
  );
};

export default Landing;
