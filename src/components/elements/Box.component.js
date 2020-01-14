import styled from "styled-components";

const Box = styled.div`
  background-color: ${props => props.theme.box};
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  color: ${props => props.theme.font};
  display: block;
  padding: 1.25rem;
`;
export default Box;
