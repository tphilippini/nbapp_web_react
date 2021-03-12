import React from "react";
import styled from "styled-components/macro";
import { animated } from "react-spring";

const TeamInfoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 50px;
  margin-left: ${(props) => (!props.home ? "60px" : "0px")};
  margin-right: ${(props) => (props.home ? "60px" : "0px")};
`;

const TeamName = styled(animated.div)`
  font-weight: 800;
  text-transform: uppercase;

  @media (max-width: 769px) {
    font-size: 14px !important;
  }
`;

const Score = styled(animated.span)`
  /* font-family: "Fugaz One", cursive; */
`;

const TeamRecord = styled.span`
  /* font-family: "Fugaz One", cursive; */
  /* color: #848181; */
  color: ${(props) => props.theme.fontSecondary};
  font-size: 10px;
`;

const TeamInfo = ({
  teamName,
  teamNameStyle,
  record,
  scoreStyle,
  score,
  toggleDivider,
  cardOpen,
  homeSelected,
  home,
}) => {
  const handleClick = (event) => {
    homeSelected && !home && cardOpen && toggleDivider(event);
    !homeSelected && home && cardOpen && toggleDivider(event);
    cardOpen && event.stopPropagation();
  };
  return (
    <TeamInfoWrapper onClick={handleClick} home={home}>
      <TeamName style={teamNameStyle}>{teamName}</TeamName>
      <TeamRecord>{record}</TeamRecord>
      <Score style={scoreStyle}>{score}</Score>
    </TeamInfoWrapper>
  );
};

export default TeamInfo;
