import React, { useContext } from "react";
import styled from "styled-components";

import Columns from "../components/elements/Columns.component";
import Column from "../components/elements/Column.component";
import { Transition } from "react-spring/renderprops";

import VideoContext from "../stores/contexts/video.context";
import ListMatches from "../components/matches/List.component";
import VideoOverlay from "../components/matches/VideoOverlay.component";

const Content = styled.div`
  height: 100%;
  margin-top: 3rem;
  /* display: ${props => (props.show === 1 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  /* overflow: hidden; */
`;

const Container = styled.div`
  max-width: 80rem;
  margin: auto;
`;

const Title = styled.div`
  font-size: 22px;
  /* font-family: "Fugaz One", cursive; */
  font-weight: 800;
`;

const Dashboard = () => {
  const { showVideoOverlay } = useContext(VideoContext);

  return (
    <>
      <Content>
        <Container>
          <Columns>
            <Column>
              <Title>Dashboard</Title>
            </Column>
            <Column className="is-4">
              <ListMatches />
            </Column>
          </Columns>
        </Container>
      </Content>

      <Transition
        native
        items={showVideoOverlay}
        from={{ opacity: 0, transform: "translate3d(-50px,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
        leave={{ opacity: 0, transform: "translate3d(-50px,0,0)" }}
      >
        {show => show && (props => <VideoOverlay />)}
      </Transition>
    </>
  );
};

export default Dashboard;
