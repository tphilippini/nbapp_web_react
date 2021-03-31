import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import api from "../../stores/actions/api.action";
import styled from "styled-components/macro";
import { Trail, animated } from "react-spring/renderprops";

import VideoContext from "../../stores/contexts/video.context";
import Card from "./Card.component";

const ScrollableArea = styled(animated.div)`
  height: 100%;
  /* margin-top: 5px; */
  display: "flex";
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const CardContainer = styled(animated.div)`
  /* :first-child {
    margin-top: 20px;
  } */
  display: ${(props) => (props.show === 1 ? "none" : "inherit")};
`;

const Title = styled.div`
  color: ${(props) => props.theme.font};
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
`;

const List = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [refreshInterval, setRefreshInterval] = useState(60000);
  const { showVideoOverlay } = useContext(VideoContext);
  const date =
    moment().hours() < 16
      ? moment().subtract(1, "d").format("YYYYMMDD")
      : moment().format("YYYYMMDD");

  console.log(date);

  const fetchData = () => {
    console.log("fetching...");
    setLoading(true);
    api.match
      .fetch(date)
      .then((res) => {
        setLoading(false);
        setMatches(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log("ERR", err);
      });
  };

  // Update fetchData only where game is live
  useEffect(() => {
    /*if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchData, refreshInterval);
      return () => clearInterval(interval);
    }*/
    fetchData();
    // eslint-disable-next-line
  }, []);
  // }, [refreshInterval]);

  return (
    <ScrollableArea>
      {loading ? (
        <Title>Chargement...</Title>
      ) : matches?.length > 0 ? (
        <Trail
          native
          items={matches}
          from={{
            opacity: 0,
            transform: "translateX(-100px)",
          }}
          to={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
          keys={(item) => item.matchId}
        >
          {(item, index) => (props) => (
            <CardContainer show={showVideoOverlay ? 1 : 0}>
              <Card {...item} key={index} />
            </CardContainer>
          )}
        </Trail>
      ) : (
        <Title>Aucun match aujourd'hui</Title>
      )}
    </ScrollableArea>
  );
};

export default List;
