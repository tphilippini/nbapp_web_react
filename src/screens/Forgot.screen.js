import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import ForgotForm from "../components/layouts/user/Forgot.form";
import ButtonLink from "../components/buttons/ButtonLink.component";

import Box from "../components/elements/Box.component";
import Columns from "../components/elements/Columns.component";
import Column from "../components/elements/Column.component";

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

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  word-break: break-word;
  text-align: center;
  color: ${props => props.theme.font};
`;

const Forgot = props => {
  return (
    <Content>
      <Container>
        <Columns centered>
          <Column className="is-6">
            <Box>
              <Title>
                <FormattedMessage
                  id="account.forgot"
                  default="Forgot password?"
                />
              </Title>
              <ForgotForm {...props} />
            </Box>

            <ButtonLink className="is-pulled-right" text="true" to="/signup">
              <FormattedMessage
                id="account.information_3"
                default="New ? sign up"
              />
            </ButtonLink>
          </Column>
        </Columns>
      </Container>
    </Content>
  );
};

export default Forgot;
