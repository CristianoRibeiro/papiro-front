import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 1px 2px #c9cccd;
    margin-bottom: 20px;
    display: block;

    .clearfix:before {
      content: " ";
      display: table;
    }
`;
export const ContentLeft = styled.div`
  float: left!important;
  width: 85%;
  box-sizing: border-box;
  display: flex;

  .clearfix:before {
      content: " ";
      display: table;
    }
`;

export const ContentLeftAll = styled.div`
  float: left!important;
  width: 100%;
  box-sizing: border-box;
  display: flex;

  .clearfix:before {
      content: " ";
      display: table;
    }
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


export const Posttext = styled.div`
    display: block;
    width: 100%;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    color: #989c9e;
    font-size: 14px;
    font-family: 'Open Sans Light', sans-serif;
    line-height: 25px;

    h2 {
      color: #363838;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    }

    p {
      margin: 0 0 10px;
    }

   blockquote {
        border: solid 1px #f1f1f1;
        border-radius: 2px;
        font-size: 14px;
        padding: 18px;

        .original, .postreply {
            font-size: 12px;
            color: #bdc3c7;
            display: block;
            font-family: 'Open Sans Regular', sans-serif;
        }
    }


`;





export const Postinfo = styled.div`
width: 15%;
    border-left: solid 1px #f1f1f1;
    display: flex;
    flex-direction: column;
`;


export const Comments = styled.div`
    border-bottom: solid 1px #f1f1f1;
    padding: 18px 0 25px 0;
    text-align: center;

`;


export const Commentbg = styled.div`
    background-color: #bdc3c7;
    border-radius: 2px;
    display: inline-block;
    padding: 12px 17px;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Open Sans Bold', sans-serif;
    position: relative;
`;


export const Mark = styled.div`
    width: 11px;
    height: 11px;
    background-color: #bdc3c7;
    position: absolute;
    bottom: 0;
    left: 43%;
    margin-bottom: -5px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`;


export const Views = styled.div`
    border-bottom: solid 1px #f1f1f1;
    color: #9da6aa;
    font-size: 12px;
    font-family: 'Open Sans Regular', sans-serif;
    text-align: center;
    line-height: 29px;
`;


export const Time = styled.div`
    color: #9da6aa;
    font-size: 12px;
    font-family: 'Open Sans Regular', sans-serif;
    text-align: center;
    line-height: 29px;
`;

export const Postinfobot = styled.div`
    border-top: solid 1px #f1f1f1;
    line-height: 50px;
    padding: 0 30px 0 94px;
    color:#999;

    .pull-left {
      float: left;
    }

    .likeblock {
       width: 15%;
    }
    .up {
      color: #1abc9c;
      font-size: 12px;
    }
    .down {
        color: #db7a7a;
        font-size: 12px;
        margin-left: 20px;
    }
    .prev {
        width: 10%;
        margin-left: 20px;
    }
    .posted {
        width: 50%;
        margin-left: 18px;
        font-size: 12px;
        color: #999;
        font-family: 'Open Sans Regular', sans-serif;
    }
    .next {
        width: 10%;
        text-align: right;
    }
    .pull-right {
      float: right!important;
  }
`;

export const Form = styled.form`
    display: block;
    margin-top: 0em;
    .topwrap{
      display: flex;
    }
`;

export const PosttextComent = styled.div`
    display: block;
    width: 80%;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    color: #989c9e;
    font-size: 14px;
    font-family: 'Open Sans Light', sans-serif;
    line-height: 25px;

    .postreply {
      font-size: 12px;
      color: #bdc3c7;
      display: block;
      font-family: 'Open Sans Regular', sans-serif;
  }
  .textwraper {
    background-color: #f1f1f1;
    border-radius: 2px;
    padding: 18px;
    textarea {
    border: none;
    box-shadow: none;
    background-color: #f1f1f1;
    /* width: 610px; */
    width: 100%;
}

}




`;


