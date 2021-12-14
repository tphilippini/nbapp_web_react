import styled from "styled-components";

const Help = styled.p`
  display: block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: ${props => props.theme.font};

  &.is-primary {
    color: ${props => props.theme.primary};
  }

  &.is-danger {
    color: ${props => props.theme.danger};
  }
`;

export default Help;
