import styled from "styled-components";

const Field = styled.div`
  &:first-child {
    margin-top: 2rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export default Field;
