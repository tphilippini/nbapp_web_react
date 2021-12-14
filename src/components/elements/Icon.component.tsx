import styled, { css } from "styled-components";

interface IIconProps {
  small?: string;
  medium?: string;
  large?: string;
  className?: string;
}

const Icon = styled.span<IIconProps>`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;

  ${(props) =>
    props.small &&
    css`
      height: 1rem;
      width: 1rem;
    `};

  ${(props) =>
    props.medium &&
    css`
      height: 2rem;
      width: 2rem;
    `};

  ${(props) =>
    props.large &&
    css`
      height: 1rem;
      width: 1rem;
    `};
`;

export default Icon;
