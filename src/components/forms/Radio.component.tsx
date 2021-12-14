import React from "react";
import styled from "styled-components";
// import { FormattedMessage } from "react-intl";
const FormattedMessage = require("react-intl")

const Wrapper = styled.div`
  position: relative;
  text-align: center;

  input:checked + label {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.font};
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);
  }
`;

const RadioContainer = styled.div`
  display: inline-block;
`;

const RadioLabel = styled.label`
  color: ${props => props.theme.font};
  padding: 1em 2em;
  margin: 0.5em;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  transition: 0.3s;
  user-select: none;
  font-size: 0.8rem;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2),
      inset 0px -1px 0 rgba(0, 0, 0, 0.22);
  }
`;

interface IRadioProps {
  options: any;
  name: string;
  idMessage: string;
  checked: string;
  onChange: any;
}

const Radio = (props:IRadioProps) => {
  let { options, name, idMessage, checked, onChange } = props;

  return (
    /* eslint eqeqeq: 0 */
    <Wrapper>
      {options.map((opt:any, index:string) => {
        return (
          <RadioContainer key={index}>
            <input
              id={index}
              name={name}
              type="radio"
              checked={checked == opt}
              className="is-hidden"
              value={opt}
              onChange={onChange}
            ></input>
            <RadioLabel htmlFor={index}>
              <FormattedMessage id={idMessage} values={{ items: opt }} />
            </RadioLabel>
          </RadioContainer>
        );
      })}
    </Wrapper>
  );
};

export default Radio;
