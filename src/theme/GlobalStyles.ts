import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  }
  body {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    background-color: linear-gradient(132.34deg, #F8F8FC -16.21%, #E1E2E8 123.86%);
    overflow-x: hidden;
  }
  *,*:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style-type: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0 !important;
  }
  
  .container {
    width: 100%;
    max-width: 1960px;
    padding: 0 20px;
    margin: 0 auto;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  .container-two {
    width: 100%;
    max-width: 1229px;
    padding: 0 20px;
    margin: 0 auto;
  }
  
  .modalCenter {
    background-color: red;
    left: 50% !important;
    top: 50% !important;
    text-align: center;
    width: 300px;
    max-width: 300px;
    transform: translate(-50%, -50%);
  }
`;

export default GlobalStyle
