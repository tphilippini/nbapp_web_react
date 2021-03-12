import React, { useState, useContext, useEffect } from "react";

import api from "../../stores/actions/api.action";
import styled from "styled-components/macro";
import { Trail } from "react-spring/renderprops";

import VideoContext from "../../stores/contexts/video.context";

import Columns from "../elements/Columns.component";
import Column from "../elements/Column.component";
import Message from "../elements/Message.component";
import LeagueCard from "./Card.component";

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
    <div show={showVideoOverlay ? 1 : 0}>
      {leagues.length ? (
        <Columns className="is-multiline">
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
            {(item, index) => () => (
              <Column className="is-4" key={index}>
                <LeagueCard {...item} {...props} />
              </Column>
            )}
          </Trail>
        </Columns>
      ) : (
        <Message className="is-primary">Aucune ligue</Message>
      )}
    </div>
  );
};

export default List;
