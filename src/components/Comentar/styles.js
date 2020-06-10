import styled from 'styled-components';

export const Container = styled.div`




`;

export const Userinfo = styled.div`
    width: 15%;
    padding: 20px 0 15px 15px;
`;


export const Avatar = styled.div`
    width: 37px;
    margin-left: 5px;
    position: relative;
    img {
      width: 100%;
    }
`;



export const TextComent = styled.div`
    /* display: block; */
    width: 100%;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    color: #989c9e;
    font-size: 14px;
    font-family: 'Open Sans Light', sans-serif;
    line-height: 25px;

    .postreply {
      font-size: 12px;
      color: #000;
      font-weight: bold;
      display: block;
      font-family: 'Open Sans Regular', sans-serif;
    }
  .comentwraper {
    background-color: #f1f1f1;
    border-radius: 2px;
    padding: 18px;
    textarea, input {
    border: none;
    box-shadow: none;
    background-color: #f1f1f1;
    /* width: 610px; */
    width: 75%;
    }

    button {
      float: right;
    }

    span {
        margin-top: 0px;
        font-size: 10px;
        color: red;
        font-weight: bold;
      }

    .error {
      color: #f00;
      font-style: italic;
    }

}

`;



export const TextComentarios = styled.div`
    /* display: block; */
    width: 100%;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    color: #989c9e;
    font-size: 14px;
    font-family: 'Open Sans Light', sans-serif;
    line-height: 25px;

    .postreply {
      font-size: 12px;
      color: #000;
      font-weight: bold;
      display: block;
      font-family: 'Open Sans Regular', sans-serif;
    }
  .comentwraper {
    background-color: #f1f1f1;
    border-radius: 2px;
    padding: 18px;
    textarea, input {
    border: none;
    box-shadow: none;
    background-color: #f1f1f1;
    /* width: 610px; */
    width: 75%;
    }

    button {
      float: right;
    }

    span {
        margin-top: 0px;
        font-size: 10px;
        color: red;
        font-weight: bold;
      }

    .error {
      color: #f00;
      font-style: italic;
    }

}

`;



export const Opcoes = styled.div`
    width: 100%;
    border-top: solid 1px #f1f1f1;

    .up {
      border: 0;
      background: none;
      color: #999;
      svg:not(:root).svg-inline--fa {
          overflow: visible;
          border: 8px;
      }
    }
    .comentario {
      border: 0;
      background: none;
      color: #999;
      font-size:12px;
    }
`;

