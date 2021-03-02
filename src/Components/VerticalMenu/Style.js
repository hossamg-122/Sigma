import styled from "styled-components";
export const Menu = styled.div`
  position: fixed;
  z-index: 500;
  background-color: #E9E9E9;
  width: 70%;
  height: 100%;
	animation-name: fadeInOpacity;
	animation-timing-function: ease-in;
  animation-duration: 2s;
`;
export const Backdrop  = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
`;
export const Content  = styled.div`
display: flex
flex-direction: column;

`;
export const Login  = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 1.5rem;
`;
export const Span = styled.span`
font-size: 17px;
letter-spacing: 0px;
color: #000000;
opacity: 1;
font-family: 'Lato',sans-serif;
padding: .5rem;
`;
export const Line = styled.div`
border: 1px solid #FFFFFF;
width: 100%;
height:1px;
`;
export const Ul = styled.div`
display: flex;
flex-direction: column;
padding-top: 1.5rem;
 a{
   :hover{
     text-decoration:none;
   }
 }
`;
export const Item = styled.p`
font-size: 14px;
letter-spacing: 0px;
color: #000000;
opacity: 1;
font-family: 'Lato',sans-serif;
:hover{
  background-color: #00000033;
color: #FFFFFF !important;
border-left : 5px solid #AA2C4A;
  
}
`;
export const SocialData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100px;
  margin-top: 7rem;
  margin-left: 0.5rem;
`;
export const SocialIcon = styled.span`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 577px) {
    width: 20px;
    height: 20px;
  }
`;
export const IconImage = styled.img`
  @media (max-width: 577px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 786px) {
    width: 14px;
    height: 14px;
  }
`;
