import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import ThemeSelect from "../components/helpers/Theme.helpers";
import LangSelect from "../components/helpers/Lang.helpers";
import AccountProfileForm from "../components/layouts/user/AccountProfile.form";
import AccountPasswordForm from "../components/layouts/user/AccountPassword.form";
import LinkSocialForm from "../components/layouts/user/LinkSocial.form";

import Container from "../components/elements/Container.component";
import Box from "../components/elements/Box.component";
import Columns from "../components/elements/Columns.component";
import Column from "../components/elements/Column.component";

const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
`;

const LeagueSettings = () => {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
};

export default LeagueSettings;
