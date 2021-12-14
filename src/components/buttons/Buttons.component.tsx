/* stylelint-disable no-descending-specificity */
import styled, { css } from "styled-components";

interface IButtonsProps {
  centered: string;
  right: string;
}

export const Buttons = styled.div<IButtonsProps>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &:last-child {
    margin-bottom: -0.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${props =>
    props.centered &&
    css`
      justify-content: center;
    `};

  ${props =>
    props.right &&
    css`
      justify-content: flex-end;
    `};
`;

export default Buttons;
