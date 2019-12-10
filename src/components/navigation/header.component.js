import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AuthContext from "../../stores/contexts/auth.context";
import Avatar from "react-avatar";
import LangSelect from "../helpers/lang.helpers";
import { logout } from "../../stores/actions/auth.action";

import styled from "styled-components";
import { device } from "../../utils/device.utils";
import { ReactComponent as Ball } from "../../assets/images/ball.svg";

const HeaderWrapper = styled.div`
  user-select: none;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1;

  @media ${device.tablet} {
    background-color: red;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const Title = styled.span`
  color: white;
  font-family: "Fugaz One", cursive;
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

const Menu = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 450px) {
    /* flex-flow: column wrap; */
    display: none;
  }
`;

const Item = styled.li`
  padding: 1em;
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-family: "Fugaz One", cursive;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
`;

const BallWrapper = styled.div`
  margin: 10px;
`;

const Header = () => {
  const { dispatch } = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {({ user }) => (
        <HeaderWrapper>
          <LogoWrapper href={user && user.email ? "/dashboard" : "/"}>
            <BallWrapper>
              <Ball />
            </BallWrapper>
            <div>
              <Title>
                {user && user.email ? (
                  <FormattedMessage id="nav.dashboard" default="Dashboard" />
                ) : (
                  "FANJAM"
                )}
              </Title>
            </div>
          </LogoWrapper>
          <Menu>
            <Item>
              <LangSelect />
            </Item>
            {user && user.email ? (
              <>
                <Item>
                  <Link to="/account">
                    <Avatar
                      facebookId={user.fid ? user.fid : ""}
                      googleId={user.gid ? user.gid : ""}
                      name={
                        user.firstName && user.lastName
                          ? user.firstName + " " + user.lastName
                          : user.alias
                      }
                      color="#f4f4f4"
                      fgColor="#5f45bb"
                      size="30"
                      round={true}
                    />
                  </Link>
                </Item>
                <Item onClick={() => logout(dispatch)}>
                  <FormattedMessage id="account.logout" default="Logout" />
                </Item>
              </>
            ) : (
              <Item>
                <Link to="/login">
                  <FormattedMessage id="account.login" default="Login" />
                </Link>
              </Item>
            )}
          </Menu>
        </HeaderWrapper>
      )}
    </AuthContext.Consumer>
  );
};

export default Header;
