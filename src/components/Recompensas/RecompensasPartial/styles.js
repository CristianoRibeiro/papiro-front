import styled from 'styled-components';


export const SidebarBlock = styled.div`

    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 1px 2px #c9cccd;
    margin-bottom: 20px;

    h3 {
      color: #363838;
      font-size: 14px;
      font-family: 'Open Sans Bold', sans-serif;
      margin: 0;
      padding: 20px;
  }

  .divline {
      height: 1px;
      line-height: 1px;
      border-bottom: solid 1px #f1f1f1;
  }

  .blocktxt {
      padding: 20px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        display: block;
        margin: 0;
        padding: 0;
        line-height: 30px;
    }
  }


`;
