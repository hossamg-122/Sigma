import styled from "styled-components";

export const ChatStyle = styled.div`
  z-index: 210;
  position: fixed;
`;
export const ChatBTN = styled.button`
  position: fixed;
  bottom: 10%;
  right: 5%;
  z-index: 99;
  cursor : pointer;
  border:none;
  display: inline-block;
  padding: 6px 7px 3px;
  margin: 0 0.3em 0.3em 0;
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;
  color: #ffffff;
  background-color: #AA2C4A;
  text-align: center;;
  transition: all 0.2s;
   &:hover{
    background-color:#821831;
  }
  &:focus{
    outline : none;
  }
  svg{
    font-size:22px;
  }
  
  `;
