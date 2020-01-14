import React from "react";
import styled, { css } from "styled-components";

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01

const StyledColumns = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  display: block;

  &:last-child {
    margin-bottom: -0.75rem;
  }
  &:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem);
  }

  ${props =>
    props.centered &&
    css`
      justify-content: center;
    `};

  ${props =>
    props.vcentered &&
    css`
      align-items: center;
    `};

  ${props =>
    props.marginless &&
    css`
      margin: 0;
    `};

  &.is-gapless {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.is-mobile {
    display: flex;
  }
  &.is-multiline {
    flex-wrap: wrap;
  }

  @media (min-width: 769px) {
    display: flex;
  }
`;

const Columns = props => {
  return <StyledColumns {...props} />;
};

export default Columns;
