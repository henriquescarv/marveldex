import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({theme}) => css`
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap');

    * {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Lexend', sans-serif;
      text-align: start;
      scroll-behavior: smooth;
    }

    body {
      heigth: 100%;
    }
  `};
`;
