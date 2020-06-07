import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`


  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,400&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f1f1f1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;

  }

  #root {
    max-width: 100%;
    margin: 0 auto;
    /* padding: 0 20px 50px; */
  }

  a {
    color: #363838;
  }

  a:hover {
    color: #989c9e;
  }
  button {
    cursor: pointer;
  }
`;
