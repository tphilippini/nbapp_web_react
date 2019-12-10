import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import api from "../../stores/actions/api.action";
import styled from "styled-components/macro";
import { Trail, animated } from "react-spring/renderprops";

import VideoContext from "../../stores/contexts/video.context";
import Card from "./Card.component";

const ScrollableArea = styled(animated.div)`
  height: 100%;
  margin-top: 5px;
  display: ${props => (props.show === 1 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const CardContainer = styled(animated.div)`
  :first-child {
    margin-top: 20px;
  }
  display: ${props => (props.show === 1 ? "none" : "inherit")};
`;

const Title = styled.div`
  color: white;
  font-size: 22px;
  font-family: "Fugaz One", cursive;
  font-weight: 800;
  text-transform: uppercase;
`;

const List = () => {
  const [matches, setMatches] = useState([]);
  const { showVideoOverlay } = useContext(VideoContext);
  const date =
    moment().hours() < 16
      ? moment()
          .subtract(1, "d")
          .format("YYYYMMDD")
      : moment().format("YYYYMMDD");

  useEffect(() => {
    api.match
      .fetch(date)
      .then(res => {
        setMatches(res.data);
      })
      .catch(err => {
        console.log("ERR", err);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <ScrollableArea>
      {matches.length ? (
        <Trail
          native
          items={matches}
          from={{
            opacity: 0,
            transform: "translateX(-100px)"
          }}
          to={{
            opacity: 1,
            transform: "translateX(0px)"
          }}
          keys={item => item.matchId}
        >
          {(item, index) => props => (
            <CardContainer show={showVideoOverlay ? 1 : 0}>
              <Card {...item} key={index} />
            </CardContainer>
          )}
        </Trail>
      ) : (
        <Title>No game today</Title>
      )}
    </ScrollableArea>
  );
};

export default List;
