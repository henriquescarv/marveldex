import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({theme}) => css`
    * {
      background: ${theme.colors.background};
      box-sizing: border-box;
      color: ${theme.colors.text};
      font-family: 'Lexend', sans-serif;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
      text-align: start;
      transition: background .2s;
    }

    body {
      heigth: 100%;
    }
  `};
`;
