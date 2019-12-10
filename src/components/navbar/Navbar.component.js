import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { FormattedMessage } from "react-intl";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

import AuthContext from "../../stores/contexts/auth.context";
import Hamburger from "./Hamburger.component";
import Menu from "./Menu.component";

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const Container = styled.div`
  max-width: 80rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 3rem;
`;

const Title = styled.span`
  color: white;
  font-family: "Fugaz One", cursive;
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

const LogoWrapper = styled.div`
  height: 60%;
  margin: auto 0;

  @media (max-width: 768px) {
    height: 75%;
  }
`;

const NavItems = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-family: "Fugaz One", cursive;
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      /* border-bottom: 1px solid #fff; */
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const HamburgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = ({ toggleOptionsOverlay, showOptionsOverlay }) => {
  const handleClick = () => {
    toggleOptionsOverlay(!showOptionsOverlay);
  };

  return (
    <AuthContext.Consumer>
      {({ user }) => (
        <>
          <NavBar>
            <Container>
              <LogoWrapper>
                <Link to={user && user.email ? "/dashboard" : "/"}>
                  <Title>
                    {user && user.email ? (
                      <FormattedMessage
                        id="nav.dashboard"
                        default="Dashboard"
                      />
                    ) : (
                      "APPLICATION"
                    )}
                  </Title>
                </Link>
              </LogoWrapper>
              <NavItems>
                {user && user.email ? (
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
                ) : (
                  <>
                    <Link to="/login">
                      <FormattedMessage id="account.login" default="Login" />
                    </Link>
                    <Link to="/signup">
                      <FormattedMessage id="account.signup" default="Sign up" />
                    </Link>
                  </>
                )}
              </NavItems>
              <HamburgerWrapper>
                <Hamburger handleClick={handleClick} />
              </HamburgerWrapper>
            </Container>
          </NavBar>
          <Menu showOptionsOverlay={showOptionsOverlay} />
        </>
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;
