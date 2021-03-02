import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignPopUpStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
`;
export const Overlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.lightGrey};
  z-index: 5000;
  height: 100%;
`;

export const PopUp = styled.div`
  width: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.blockBg};
  z-index: 5001;
  border-radius: 60px;
  overflow: hidden;
  @media (max-width: 678px) {
    width: 95% !important;
  }

  .tab-link {
    width: 50%;
    background: ${({ theme }) => theme.blockBg};
    color: ${({ theme }) => theme.secondryColor};
    box-shadow: none;
    outline: none;
    border: none;
    padding: 0.8rem 0;
  }
  .tab-link-active {
    color: ${({ theme }) => theme.blockBg};
    background: ${({ theme }) => theme.secondryColor};
    box-shadow: ${({ theme }) => theme.shadowColor};
  }
 
  @media (max-width: 922px) {
    width: 50%;
  }
  @media (max-width: 1400px) {
    width: 50%;
  }
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
export const Input = styled.input`
  background: ${({ theme }) => theme.primaryColor};
  width: 80%;
  margin: 1rem auto;
  padding: 1.2rem 1.5rem;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;
export const Password = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  img {
    position: absolute;
    width: 20px;
    left: 80%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const WithOther = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 2rem auto 0 auto;
  padding-top: 1.7rem;
  border-top: 1px solid ${({ theme }) => theme.secondryColor};
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-radius: 50%;
  over-flow: hidden;
  cursor:pointer;

  img {
    width: 100%;
  }
  @media (max-width: 922px) {
    width: 30px;
  height: 30px;
  }
`;
export const FacebookIcon = styled(Icon)``;
export const GoogleIcon = styled(Icon)`
  background: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    margin: 0 auto;
  }

`;
export const AppleIcon = styled(GoogleIcon)`
  background: ${({ theme }) => theme.textColor};
`;



export const Overlay2 = styled.div`
  
  @media  (max-width: 767px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 5000;
    height: 100%;
  }
  @media  (min-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #00000069;
    z-index: 5000;
    height: 100%;
  }
`;
export const PopUp2 = styled.div`
 
  @media  (max-width: 767px) {
    width: 90%;
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #F3F3F3;
    z-index: 5001;
    border-radius: 60px;
    overflow: hidden;
  }
  @media  (min-width: 768px) {
    width: 40%;
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #F3F3F3;
    z-index: 5001;
    border-radius: 60px;
    overflow: hidden;
  }
  `
  export const ResultBOxPopUp = styled.div`
  @media  (max-width: 767px) {
    width: 90%;
    position: fixed;
    left: 50%;
    top: 250px;
    background: transparent;
    transform: translate(-50%, -50%);
    padding: 10px;
    
    border-radius: 15px;
    z-index : 4000
  }
  @media  (min-width: 768px) {
    width: 40%;
    height: 250px;
    position: fixed;
    left: 50%;
    top: 255px;
    background: #F3F3F3;
    transform: translate(-50%, -50%);
    padding: 10px;
    height: 300px !important;
    border-radius: 15px;
   
    z-index : 4000
  }
  
  
  `
export const SearchBar = styled.input`
width: 85%;
outline: none;
border-radius: 60px 0px 0px 60px;
border: 2px #AA2C4A solid;

@media  (max-width: 767px) {
  padding: 10px 20px;
}
@media  (min-width: 768px) {
padding: 10px 20px;
}
`

export const SearchResultLink = styled(Link)`
color : darkgrey !important; 
cursor : pointer; 
margin: 0 0 0 25px;
&:hover{
    color :#AA2C4A !important;
  }
`