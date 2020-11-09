import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1C1C28;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, button {
    font: 16px 'Inter', sans-serif;
  }

  #root {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;
