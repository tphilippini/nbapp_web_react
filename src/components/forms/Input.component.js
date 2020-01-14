import React from "react";
import styled from "styled-components";

const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
`;

const InputText = styled.input`
  -webkit-appearance: none;
  align-items: center;
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
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
  background-color: ${props => props.theme.background};
  border-color: ${props => props.theme.background};
  border-radius: 4px;
  color: ${props => props.theme.font};
  outline: none;

  &:focus {
    border-color: ${props => props.theme.primary};
  }

  &.is-danger {
    border-color: ${props => props.theme.danger};
  }
`;

const Input = props => {
  let {
    id,
    name,
    type,
    placeholder,
    value,
    autoComplete,
    autoFocus,
    className,
    onChange
  } = props;

  return (
    <Control>
      <InputText
        id={id ? id : ""}
        autoComplete={autoComplete ? autoComplete : "off"}
        autoFocus={autoFocus ? autoFocus : false}
        name={name ? name : ""}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        value={value ? value : ""}
        className={className ? className : ""}
        onChange={onChange}
      ></InputText>
    </Control>
  );
};

export default Input;
