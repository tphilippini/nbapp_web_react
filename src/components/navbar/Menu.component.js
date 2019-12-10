import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

const MenuWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Fugaz One", cursive;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #fff;
      /* border-bottom: 1px solid #fdcb6e; */
    }
  }
`;

const Menu = ({ showOptionsOverlay }) => {
  const { open } = useSpring({ open: showOptionsOverlay ? 0 : 1 });

  if (showOptionsOverlay === true) {
    return (
      <MenuWrapper
        style={{
          transform: open.interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200]
          })
          // .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavItems>
          <li>
            <a href="/">link n1</a>
          </li>
          <li>
            <a href="/">link n2</a>
          </li>
          <li>
            <a href="/">link n3</a>
          </li>
          <li>
            <a href="/">link n4</a>
          </li>
        </NavItems>
      </MenuWrapper>
    );
  }
  return null;
};

export default Menu;
