import React, { useState, useContext, useEffect } from "react";

import api from "../../stores/actions/api.action";
import styled from "styled-components/macro";
import { Trail } from "react-spring/renderprops";

import VideoContext from "../../stores/contexts/video.context";

import Columns from "../elements/Columns.component";
import Column from "../elements/Column.component";
import LeagueCard from "./Card.component";

const Title = styled.div`
  color: ${props => props.theme.font};
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
`;

const List = props => {
  const [user] = useState({ ...props.user });
  const [leagues, setLeagues] = useState([]);
  const { showVideoOverlay } = useContext(VideoContext);

  useEffect(() => {
    api.league
      .fetch(user.uuid)
      .then(res => {
        setLeagues(res.data);
      })
      .catch(err => {
        console.log("ERR", err);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <Columns show={showVideoOverlay ? 1 : 0} className="is-multiline">
      {leagues.length ? (
        <Trail
          native
          items={leagues}
          from={{
            opacity: 0,
            transform: "translateX(-100px)"
          }}
          to={{
            opacity: 1,
            transform: "translateX(0px)"
          }}
          key={item => item.leagueId}
          keys={item => item.leagueId}
        >
          {(item, index) => props => (
            <Column className="is-4" key={index}>
              <LeagueCard {...item} />
            </Column>
          )}
        </Trail>
      ) : (
        <Title>No league / creer une ligue / rejoindre une ligue</Title>
      )}
    </Columns>
  );
};

export default List;
