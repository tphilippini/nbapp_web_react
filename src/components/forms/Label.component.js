import styled, { css } from "styled-components";

const Label = styled.label`
  color: ${props => props.theme.font};
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5em;
  cursor: default;

  ${props =>
    props.small &&
    css`
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

export default Label;
