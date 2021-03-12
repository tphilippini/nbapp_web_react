import React, { useState } from "react";
// import moment from "moment";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import CardHeader from "./CardHeader.component";
import Divider from "./Divider.component";
import TeamInfo from "./TeamInfo.component";
import GameTime from "./GameTime.component";
import ScoreTable from "./ScoreTable.component";
import MatchHighlightsRail from "./MatchHighlightsRail.component";
import PlayerStatsSection from "./PlayerStatsSection.component";

const CardWrapper = styled(animated.div)`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  height: 150px;
  background-color: ${(props) => props.theme.box};
  border-radius: 10px;
  margin-bottom: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 769px) {
    width: 350px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = (props) => {
  let [cardOpen, toggleCardOpen] = useState(false);
  let [homeSelected, toggleDivider] = useState(true);

  const onCardClick = () => {
    if (props.statusNum === 1) return;
    if (!cardOpen) toggleDivider(true);
    toggleCardOpen(!cardOpen);
    /*
    onSelect(index, youtubevideos);
    */
  };

  const handleToggleOnClick = (event) => {
    event.stopPropagation();
    toggleDivider(!homeSelected);
  };

  const sortMatchStats = (matchStats, teamId) => {
    return matchStats.filter((stat) => {
      if (stat.player) {
        return stat.player.teamId === teamId;
      } else return null;
    });
  };

  const cardHeightStyle = useSpring({
    height: cardOpen ? "600px" : "120px",
    from: { height: "120px" },
    config: config.stiff,
  });

  const teamNameStyle = useSpring({
    fontSize: cardOpen ? 16 : 20,
    from: { fontSize: 20 },
    config: config.stiff,
  });

  const scoreStyle = useSpring({
    fontSize: cardOpen ? 18 : 24,
    from: { fontSize: 24 },
    config: config.stiff,
  });

  const scoreTableStyle = useSpring({
    opacity: cardOpen ? 1 : 0,
    display: cardOpen ? "inherit" : "none",
    marginTop: 5,
    from: { opacity: 0, display: "none" },
    config: config.stiff,
  });

  const formatTime = (
    currentPeriod,
    gameClock,
    statusNum,
    isHalfTime,
    isEndOfPeriod,
    startTimeUTCString
  ) => {
    if (statusNum === 3) {
      return "FINAL";
    } else if (isHalfTime) {
      return "HALF TIME";
    } else if (isEndOfPeriod) {
      return `END OF Q${currentPeriod}`;
    } else if (statusNum === 1) {
      let gameTimeDate = new Date(startTimeUTCString);
      let hours = gameTimeDate.getHours();
      let minutes = gameTimeDate.getMinutes();
      return `${hours}:${minutes === 0 ? "00" : minutes}`;
      // sometimes nba api is slow to update a match has finished, leaving statusNum at 2 and gameClock null X_X
    } else if (gameClock === null && statusNum === 2 && currentPeriod === 4) {
      return `FINAL`;
      // when quarter is just beginning, game clock is null
    } else if (gameClock === null && statusNum === 2) {
      return `Q${currentPeriod} 12:00}`;
    } else if (gameClock === null) {
      return `END OF Q${currentPeriod}`;
    } else {
      return `Q${currentPeriod} ${gameClock || "12:00"}`;
    }
  };

  return (
    <CardWrapper style={cardHeightStyle} onClick={onCardClick}>
      <CardHeader statusNum={props.statusNum} cardOpen={cardOpen} />
      <CardContent statusNum={props.statusNum}>
        <TeamInfo
          home
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={props.hTeam.teamShortName}
          teamNameStyle={teamNameStyle}
          record={props.hTeamRecordFormatted}
          scoreStyle={scoreStyle}
          score={props.hTeamScore}
        />
        <CardCenter cardOpen={cardOpen}>
          <GameTime
            time={formatTime(
              props.currentPeriod,
              props.gameClock,
              props.statusNum,
              props.isHalfTime,
              props.isEndofPeriod,
              props.startTimeUTCString
            )}
          />
          <animated.div style={scoreTableStyle}>
            {props.hTeamQScore && props.vTeamQScore && (
              <ScoreTable
                homeScores={props.hTeamQScore}
                awayScores={props.vTeamQScore}
              />
            )}
          </animated.div>
        </CardCenter>
        <TeamInfo
          home={false}
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={props.vTeam.teamShortName}
          teamNameStyle={teamNameStyle}
          record={props.vTeamRecordFormatted}
          scoreStyle={scoreStyle}
          score={props.vTeamScore}
        />
      </CardContent>
      {cardOpen && (
        <>
          <Divider
            homeSelected={homeSelected}
            toggleDivider={handleToggleOnClick}
          />
          {props.statusNum === 3 && props.videos.length > 0 && (
            <MatchHighlightsRail videos={props.videos} />
          )}
          {homeSelected && (
            <PlayerStatsSection
              stats={sortMatchStats(props.stats, props.hTeamId)}
              videos={props.videos}
            />
          )}
          {!homeSelected && (
            <PlayerStatsSection
              stats={sortMatchStats(props.stats, props.vTeamId)}
              videos={props.videos}
            />
          )}
        </>
      )}
    </CardWrapper>
  );
};

export default Card;
