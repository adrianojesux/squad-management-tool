import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: 0;
    box-sizing: border-box;
  }
  body {
    background: #f6f6f6;
    color: #222;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  button {
    cursor: pointer;
  }
  a, a:hover {
    text-decoration: none;
    color: unset;
  }
`;
