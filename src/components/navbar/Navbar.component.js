import React, { useContext } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { FormattedMessage } from "react-intl";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

import UserContext from "../../stores/contexts/user.context";
import { logout } from "../../stores/actions/user.action";

import Hamburger from "./Hamburger.component";
import Button from "../buttons/Button.component";
import ButtonLink from "../buttons/ButtonLink.component";

const NavBar = styled(animated.nav)`
  background: ${(props) => props.theme.background};
  padding: 5px 20px;
`;

const MenuWrapper = styled(animated.ul)`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &.active li.item {
    display: block;
  }

  ${({ theme }) => theme.tablet} {
    justify-content: center;
  }
`;

const NavItem = styled.li`
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  order: 3;
  display: none;
  background: ${(props) => props.theme.background};
  z-index: 1;

  ${({ theme }) => theme.desktop} {
    padding: 15px 10px;
    display: block;
    width: auto;
    order: 1;
  }
`;

const LogoWrapper = styled.li`
  font-size: 20px;
  padding: 15px 5px;
  white-space: nowrap;
  display: block;

  /* Tablet menu */
  ${({ theme }) => theme.tablet} {
    flex: 1;
  }

  /* Desktop menu */
  ${({ theme }) => theme.desktop} {
    padding: 15px 10px;
    order: 0;
  }
`;

const NavItemButton = styled.li`
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  order: 2;
  display: ${(props) => (props.show === "1" ? "block" : "none")};
  background: ${(props) => props.theme.background};
  z-index: 1;

  /* Tablet menu */
  ${({ theme }) => theme.tablet} {
    width: auto;
    order: 1;
    display: block;
  }

  /* Desktop menu */
  ${({ theme }) => theme.desktop} {
    padding: 15px 10px;
    display: block;
    width: auto;
    order: 2;
    padding-right: 0;
  }
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

const HamburgerWrapper = styled.li`
  padding: 15px 5px;
  white-space: nowrap;
  order: 1;
  display: block;
  font-size: 20px;

  /* Tablet menu */
  ${({ theme }) => theme.tablet} {
    flex: 1;
    text-align: right;

    order: 2;
  }

  /* Desktop menu */
  ${({ theme }) => theme.desktop} {
    padding: 15px 10px;
    display: none;
  }
`;

const Navbar = (props) => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    props.toggleOptionsOverlay(!props.showOptionsOverlay);
  };

  return (
    <NavBar>
      <MenuWrapper className={props.showOptionsOverlay ? "active" : ""}>
        <LogoWrapper>
          <Link to={user && user.email ? "/dashboard" : "/"}>
            <Title>
              {user && user.email ? (
                <FormattedMessage id="nav.dashboard" default="Dashboard" />
              ) : (
                "APPLICATION"
              )}
            </Title>
          </Link>
        </LogoWrapper>

        {/* <NavItem className="item">
              <ThemeSelect />
            </NavItem> */}

        {/* <NavItem className="item">
              <Link to="/">Home</Link>
            </NavItem> */}

        {user && user.email ? (
          <>
            <NavItem className="item">
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
                  fgColor="#2d3436"
                  size="30"
                  round={true}
                />
              </Link>
            </NavItem>

            <NavItemButton show={props.showOptionsOverlay ? "1" : "0"}>
              <Button
                primary="true"
                rounded="true"
                onClick={() => {
                  logout();
                  setUser(null);
                  props.history.push("/");
                }}
              >
                <FormattedMessage id="account.logout" default="Logout" />
              </Button>
            </NavItemButton>
          </>
        ) : (
          <>
            <NavItemButton show={props.showOptionsOverlay ? "1" : "0"}>
              <ButtonLink primary="true" rounded="true" to="/login">
                <FormattedMessage id="account.login" default="Login" />
              </ButtonLink>
            </NavItemButton>
          </>
        )}

        <HamburgerWrapper>
          <Hamburger handleClick={handleClick} />
        </HamburgerWrapper>
      </MenuWrapper>
    </NavBar>
  );
};

export default Navbar;
