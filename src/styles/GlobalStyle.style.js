import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Fugaz+One&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  body {    
    margin: 0;
    padding: 0;
    background-color: #2d3436;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      "Fugaz One", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    text-size-adjust: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
