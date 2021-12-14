import styled, { css } from "styled-components";
import { LightenDarkenColor } from "../../utils/mixins.utils";

interface IMessageProps {
  primary: string;
  danger: string;
  small: string;
}

const Message = styled.div<IMessageProps>`
  display: block;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 1rem;
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 1.25em 1.5em;
  margin-top: 2rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &.is-success {
    background-color: ${LightenDarkenColor((props: { theme: { success: any; }; }) => props.theme.success, 100)};
    border-color: ${props => props.theme.success};
    color: ${props => props.theme.success};
  }

  &.is-warning {
    background-color: ${LightenDarkenColor((props: { theme: { warning: any; }; }) => props.theme.warning, 100)};
    border-color: ${props => props.theme.warning};
    color: ${props => props.theme.warning};
  }

  &.is-danger {
    background-color: ${LightenDarkenColor((props: { theme: { danger: any; }; }) => props.theme.danger, 100)};
    border-color: ${props => props.theme.danger};
    color: ${props => props.theme.danger};
  }

  &.is-primary {
    background-color: ${LightenDarkenColor((props: { theme: { primary: any; }; }) => props.theme.primary, 150)};
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${LightenDarkenColor(props.theme.primary, 150)};
      border-color: ${props.theme.primary};
      color: ${props.theme.primary};
    `};

  ${props =>
    props.danger &&
    css`
      background-color: ${LightenDarkenColor(props.theme.danger, 100)};
      border-color: ${props.theme.danger};
      color: ${props.theme.danger};
    `};

  ${props =>
    props.small &&
    css`
      font-size: 0.75rem;
    `};
`;
export default Message;
