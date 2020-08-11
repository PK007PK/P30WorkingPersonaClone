import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }
  body {
    margin: 0;
    font-family: 'Montserrat';
  }
  
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
    background-color: black;
    color: white;
    padding: 10px 30px;
    border: none;
    font-weight: 200;
  }

  p {
    font-size: 16px;
    line-height: 150%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
