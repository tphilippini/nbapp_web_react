import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 4px;
  background-color: ${props => props.theme.fontSecondary};
`;

const DividerItem = styled(animated.div)`
  height: 4px;
  background-color: ${props => props.theme.primary};
  width: 50%;
  position: relative;
  cursor: pointer;
`;

const Divider = ({ homeSelected, toggleDivider }) => {
  const dividerStyle = useSpring({
    left: homeSelected ? -100 : 100,
    from: { left: homeSelected ? -100 : 100 },
    config: { mass: 1, tension: 450, friction: 80 }
  });

  return (
    <DividerWrapper>
      <DividerItem
        style={dividerStyle}
        onClick={event => toggleDivider(event)}
      />
    </DividerWrapper>
  );
};

export default Divider;
