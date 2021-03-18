import React from "react";
// import styled from "styled-components";
// import { FormattedMessage } from "react-intl";

// import Columns from "../components/elements/Columns.component";
// import Column from "../components/elements/Column.component";
// import { Transition } from "react-spring/renderprops";

// import VideoContext from "../stores/contexts/video.context";
import ListMatches from "../components/matches/List.component";
// import ListLeagues from "../components/leagues/List.component";
// import VideoOverlay from "../components/matches/VideoOverlay.component";

import Container from "../components/elements/Container.component";
// import Buttons from "../components/buttons/Buttons.component";
// import ButtonLink from "../components/buttons/ButtonLink.component";
// import Icon from "../components/elements/Icon.component";

// const Title = styled.div`
//   font-size: 22px;
//   font-weight: 800;
// `;

const Dashboard = (props) => {
  // const { showVideoOverlay } = useContext(VideoContext);

  return (
    <>
      <Container>
        {/* <Columns centered vcentered> */}
        {/* <Column>
                <Columns>
                  <Column>
                    <Title>
                      <FormattedMessage
                        id="league.my_leagues"
                        default="My leagues"
                      />
                    </Title>
                  </Column>
                  <Column className="is-6">
                    <Buttons className="is-pulled-right">
                      <ButtonLink primary="true" to="/league/create">
                        <Icon>
                          <i className="fa fa-plus"></i>
                        </Icon>
                        <span>
                          <FormattedMessage
                            id="league.create_league"
                            default="Create league"
                          />
                        </span>
                      </ButtonLink>

                      <ButtonLink primary="true" to="/league/join">
                        <Icon>
                          <i className="fa fa-share"></i>
                        </Icon>
                        <span>
                          <FormattedMessage
                            id="league.join_league"
                            default="Join league"
                          />
                        </span>
                      </ButtonLink>
                    </Buttons>
                  </Column>
                </Columns>

                <ListLeagues user={user} {...props} />
              </Column> */}
        {/* <Column className="is-5"> */}
        {/* <Column>
            <Columns>
              <Column>
                <Title>Résultats</Title>
              </Column>
            </Columns> */}
        <ListMatches />
        {/* </Column>
        </Columns> */}
      </Container>
      {/* <Transition
        native
        items={showVideoOverlay}
        from={{ opacity: 0, transform: "translate3d(-50px,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
        leave={{ opacity: 0, transform: "translate3d(-50px,0,0)" }}
      >
        {(show) => show && ((props) => <VideoOverlay />)}
      </Transition> */}
    </>
  );
};

export default Dashboard;
