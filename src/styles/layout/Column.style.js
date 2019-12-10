import React from "react";
import styled, { css } from "styled-components";
// import styled from "styled-components";

const onetotwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function map1to12(onEach) {
  return onetotwelve.reduce(
    (acc, num) => css`
      ${acc}
      ${onEach(num)}
    `,
    ""
  );
}

function percentage(num) {
  return `${num * 100}%`;
}

const StyledColumn = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;

  .is-gapless > & {
    margin: 0;
    padding: 0;
  }

  ${map1to12(
    i => css`
      &.is-${i} {
        flex: none;
        width: ${percentage(i / 12)};
      }
      &.is-offset-${i} {
        margin-left: ${percentage(i / 12)};
      }
    `
  )}

  @media (max-width: 769px) {
    ${map1to12(
      i => css`
        &.is-${i} {
          background-color: green;
          width: 100%;
        }
      `
    )}
  }
`;

const Column = props => {
  return <StyledColumn {...props} />;
};

export default Column;
