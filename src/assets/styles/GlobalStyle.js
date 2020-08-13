import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
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
    color: ${({ theme }) => theme.color.mainTextColor};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  
  p {
    font-size: 1.6rem;
    line-height: ${({ theme }) => theme.lineHeight.regular};
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
    border: none;
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
