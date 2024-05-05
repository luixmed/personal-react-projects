import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body{
    color: white;
    font-family: sans-serif;
    font-size: 1.6rem;
    background-color: #555;
  }
`;
