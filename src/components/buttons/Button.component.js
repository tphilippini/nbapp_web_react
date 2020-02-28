import styled, { css } from "styled-components";
import { loader, center } from "../../utils/mixins.utils";
import Icon from "../elements/Icon.component";
import Buttons from "./Buttons.component";

const Button = styled.button`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.4em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.4em - 1px);
  text-align: center;
  white-space: nowrap;
  box-shadow: none;
  display: inline-flex;
  font-size: 0.8rem;
  height: 2.5em;
  line-height: 0.5;
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

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0;
  }

  &.is-loading {
    color: transparent !important;
    pointer-events: none;
    &::after {
      ${loader}
      ${center("1em")}
      position: absolute !important;
    }
  }

  ${Buttons} & {
    margin-bottom: 0.5rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  ${props =>
    props.rounded &&
    css`
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

      ${props =>
        props.outlined &&
        css`
          background-color: transparent;
          border-color: ${props.theme.primary};
          color: ${props.theme.primary};

          &:hover,
          &:focus {
            background-color: ${props.theme.primary};
            border-color: ${props.theme.primary};
            color: #fff;
          }
          &.is-loading {
            &::after {
              border-color: transparent transparent ${props.theme.primary}
                ${props.theme.primary} !important;
            }
          }
          &[disabled] {
            background-color: transparent;
            border-color: ${props.theme.primary};
            box-shadow: none;
            color: ${props.theme.primary};
          }
        `};
    `};

  ${props =>
    props.facebook &&
    css`
      background-color: ${props.theme.facebook};
      border-color: transparent;
      color: #fff;

      ${props =>
        props.outlined &&
        css`
          background-color: transparent;
          border-color: ${props.theme.facebook};
          color: ${props.theme.facebook};

          &:hover,
          &:focus {
            background-color: ${props.theme.facebook};
            border-color: ${props.theme.facebook};
            color: #fff;
          }
          &.is-loading {
            &::after {
              border-color: transparent transparent ${props.theme.facebook}
                ${props.theme.facebook} !important;
            }
          }
          &[disabled] {
            background-color: transparent;
            border-color: ${props.theme.facebook};
            box-shadow: none;
            color: ${props.theme.facebook};
          }
        `};
    `};

  ${props =>
    props.google &&
    css`
      background-color: ${props.theme.google};
      border-color: transparent;
      color: #fff;

      ${props =>
        props.outlined &&
        css`
          background-color: transparent;
          border-color: rgba(0, 0, 0, 0.2);
          color: ${props.theme.primary};

          &:hover,
          &:focus {
            background-color: ${props.theme.google};
            border-color: rgba(0, 0, 0, 0.2);
            color: #fff;
          }
          &.is-loading {
            &::after {
              border-color: transparent transparent ${props.theme.google}
                ${props.theme.google} !important;
            }
          }
          &[disabled] {
            background-color: transparent;
            border-color: ${props.theme.google};
            box-shadow: none;
            color: ${props.theme.google};
          }
        `};
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

  ${Icon} {
    /* stylelint-disable-line */
    &:first-child:not(:last-child) {
      margin-left: calc(-0.375em - 1px);
      margin-right: 0.1875em;
    }
    &:last-child:not(:first-child) {
      margin-left: 0.1875em;
      margin-right: calc(-0.375em - 1px);
    }
    &:first-child:last-child {
      margin-left: calc(-0.375em - 1px);
      margin-right: calc(-0.375em - 1px);
    }
  }
`;
export default Button;
