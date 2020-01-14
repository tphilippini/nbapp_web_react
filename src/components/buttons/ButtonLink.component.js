import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #2d3436;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  box-shadow: none;
  display: inline-flex;
  font-size: 0.8rem;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }

  ${props =>
    props.text &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${props.theme.font};
    `};

  ${props =>
    props.rounded &&
    css`
      border-radius: "2rem";
      border-radius: 290486px;
      padding-left: calc(1em + 0.25em);
      padding-right: calc(1em + 0.25em);
    `};

  ${props =>
    props.primary &&
    css`
      background-color: ${props.theme.primary};
      border-color: transparent;
      color: #fff;
    `};

  ${props =>
    props.small &&
    css`
      border-radius: 2px;
      font-size: 0.75rem;
    `};

  ${props =>
    props.medium &&
    css`
      font-size: 1.25rem;
    `};

  ${props =>
    props.large &&
    css`
      font-size: 1.5rem;
    `};
`;
export default ButtonLink;
