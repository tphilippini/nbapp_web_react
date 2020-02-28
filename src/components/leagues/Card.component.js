import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

const CardWrapper = styled(animated.div)`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  background-color: ${props => props.theme.box};
  /* background: url(${props => props.bg}) no-repeat;
  background-size: cover;
  background-position: top center; */
  width: 100%;
  min-height: 120px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 5px;
  cursor: pointer;
`;

const LeagueName = styled(animated.div)`
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
`;

const Card = props => {
  const onCardClick = () => {
    console.log("click");
  };

  return (
    <CardWrapper onClick={onCardClick}>
      <LeagueName>{props.name}</LeagueName>
    </CardWrapper>
  );
};

export default Card;
