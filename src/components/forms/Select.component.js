import React from "react";
import styled, { css } from "styled-components";

const Control = styled.div`
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
  height: 2.5em;

  &::after {
    border: 3px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
    border-color: #3273dc;
    right: 1.125em;
    z-index: 4;
  }

  &::after,
  select {
    border-color: ${props => props.theme.fontSecondary};
    color: ${props => props.theme.font};
  }

  ${props =>
    props.rounded &&
    css`
      select {
        border-radius: 290486px;
        padding-left: 1em;
      }
    `};

  ${props =>
    props.primary &&
    css`
      &::after,
      select {
        border-color: ${props => props.theme.primary};
        color: ${props => props.theme.fontSecondary};
      }
    `};

  ${props =>
    props.fullwidth &&
    css`
      width: 100%;

      select {
        width: 100%;
      }
    `};

  ${props =>
    props.small &&
    css`
      border-radius: 2px;
      font-size: 0.75rem;
    `};
`;

const Selector = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  background-color: ${props => props.theme.background};
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;

  cursor: pointer;
  font-size: 1em;
  max-width: 100%;
  outline: none;

  &::-ms-expand {
    display: none;
  }

  &::-moz-placeholder,
  &::-webkit-input-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder {
    color: rgba(54, 54, 54, 0.3);
  }
`;

const Select = props => {
  let { options, className, value, onChange } = props;

  return (
    <Control
      primary={!!props.primary}
      rounded={!!props.rounded}
      fullwidth={!!props.fullwidth}
      small={!!props.small}
      className={className ? className : ""}
    >
      <Selector value={value ? value : ""} onChange={onChange}>
        {options.map((opt, index) => {
          return (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </Selector>
    </Control>
  );
};

export default Select;
