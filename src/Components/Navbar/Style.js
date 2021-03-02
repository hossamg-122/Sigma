import styled from "styled-components";
import { Link } from "react-router-dom";
import { Toast } from "react-bootstrap";

export const NavbarStyle = styled.nav`
background: ${({ theme }) => theme.secondryColor};
height: 61px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
margin: 0 0 40px 0;

@media(max-width: 768px){
  height: 40px;
  margin:  0 0 10px 0;
}
`
export const NavbarContent = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
margin:auto;
@media (max-width : 1366px)
{
  width: 90%;
}
@media (max-width : 1230px)
{
  width: 90%;
}
@media (max-width: 768px)
{
  display:none;
}
`;
export const Ul = styled.ul`
padding: 0;
 margin-bottom: 5px;
  display:flex;
   flex-direction:row;
    justify-content:flex-start;
    margin-left: 0;
    @media (max-width: 768px)
{
  justify-content:space-around;
  margin: 5px 0px;
}
`;
export const NavbarContentMobile = styled.div`
display: none;
@media (max-width: 768px)
{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  display:block;
  width: 94%;
}
`;
export const Item = styled.li`
color: ${({theme})=> theme.primaryColor};
display: inline;
position:relative;
padding: 1.3rem 0.5rem;
text-align: left;
font-size: 16px;
font-weight: 600;
font-family: 'Lato', sans-serif;
letter-spacing: 0px;
opacity: 1;
margin-right : 20px;
text-transform: uppercase;
@media (max-width: 768px)
{
  margin-right : 0px;
}
;

&:hover > div {
  display: block;


  @media (max-width : 950px)
{
  /* display: none; */
}

}
:hover {
  cursor:pointer;
 
}
:hover + div {
display: block;

}
@media (max-width: 1120px)
{
  font-size:14px;
}
@media (max-width: 768px)
{
  padding: 0 1%;
  font-size:12px;
}
`;
export const Line = styled.div`
width: 100%;
border-bottom: 5px solid white;
position: absolute;
bottom:0;
left: 0;
display : none;
`;
export const CategoriesStyle = styled.div`
position: absolute;
padding: 0% 20%;
background-color: #F3F3F3;
margin: auto;
z-index: 101;;

left: -20%;
top: 97%;
display: none;


transition : 1s opacity ease-in-out;

width: 400%;
max-width: 300px;
:hover{
  display: block;
  }
`;
export const CategoriesContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: auto;
`;
export const SubCategories = styled.div`
width: 100%;

display: flex;
flex-direction: column;
align-items: self-start;
padding: 5% 0%;
@media (max-width: 1300px)
{
width: 100%;

}
@media (max-width: 1120px)
{
width: 100%;
}
`;
export const SubCategoryName = styled.span`
margin: 1% 1%  3% 1%;
font-size:15px;
font-weight: 500 ;
width: max-content;
max-width: 90%;
font-family: 'Lato', sans-serif;
color: ${({theme})=> theme.textColor};
text-transform: capitalize;

&:hover{
  text-decoration:none;
  color: ${({theme})=> theme.secondryColor};
}
@media (max-width: 1300px)
{
  font-size:18px;
}
@media (max-width: 1120px)
{
  font-size:17px;
}
`;
export const DownArrow = styled.img`
// position:absolute;
// right:0;
`;
export const Mobile = styled.div`
display: none;
@media (max-width: 577px)
{
  display: block;
}
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  margin: 0 1rem 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border : 1px black solid;
  &:hover{
    border : none;
  }
`;
export const Facebook = styled(Icon)`
  background: transparent;
  color : #AA2C4A;
  border : 1px #AA2C4A solid;
  /* color: ${({ theme }) => theme.facebookBg}; */
  &:hover {
    border: none;
    background: ${({ theme }) => theme.facebookBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const Twitter = styled(Icon)`
  background: transparent;
  color : #AA2C4A;
  border : 1px #AA2C4A solid;
  /* color: ${({ theme }) => theme.twitterBg}; */

  &:hover {
    border: none;
    background: ${({ theme }) => theme.twitterBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const Instagram = styled(Icon)`
  background: transparent;
  color : #AA2C4A;
  border : 1px #AA2C4A solid;
  /* color: ${({ theme }) => theme.instagramBg}; */
  

  &:hover {
    border: none;
    background: ${({ theme }) => theme.instagramBg};
    color: ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 480px) {
    margin-right: 3rem;
  }
`;
export const Youtube = styled(Icon)`
  background: transparent;
  color : #AA2C4A;
  border : 1px #AA2C4A solid;
  /* color: ${({ theme }) => theme.youtubeBg}; */
  &:hover {
    border: none;
  background: ${({ theme }) => theme.youtubeBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
// linkedinBg: "#0077B5",
//     youtubeBg : "#FF0000",
export const Linkedin = styled(Icon)`
  background: transparent;
  color : #AA2C4A;
  border : 1px #AA2C4A solid;
  /* color :${({ theme }) => theme.linkedinBg}; */
  margin-right: 5rem;
  &:hover {
    border: none;
  background: ${({ theme }) => theme.linkedinBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const HeaderIconStyle = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 0.7rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  @media(max-width: 577px)
  {
    display:none;
  }
`;
export const MainHeaderStyle = styled.div`
  width: 100%;
  margin: 0 0 20px;
  background: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
`;
export const HeaderStyle = styled.div`
  padding: 0rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 30%;
    @media(max-width: 577px)
  {
    width: 75%;

  }
  }
  @media(max-width: 577px)
  {
    padding: 0rem 4%;
  }
  img {
    width: 100%;
  }
`;
export const Logo = styled(Link)`
width: 20%;
@media(max-width: 577px)
  {
    width: 50%;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Data = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DataItem = styled.div`
  border-right: 1px solid ${({ theme }) => theme.lightGrey};
  padding: 0 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 20px;
    cursor: pointer;
  }
  @media(max-width: 577px)
  {
  border-right: none;
  padding-left: 0;
  img {
    width: 24px;
  }
  
  }
`;
export const BurgerIcon= styled.img`
width: 24px !important;
height:24px;
@media(min-width: 577px)
  {
  display: none;

  }
`;
export const DataItemTemp = styled(DataItem)`
@media (max-width: 1050px) {
  display: none;
}
`;
export const LanguageContainer = styled.div`
  border-radius: 50%;
  width: 50%;
  margin: 0 auto;
`;
export const CartIconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  
`;
export const UserContainer = styled(DataItem)`
  display: flex;
  justify-content: space-between;
  border: none;
  @media(max-width: 577px)
  {
    display:none;
  }
`;
export const UserImgContainer = styled.div`
border-radius: 50%;
overflow: hidden;
width: 25px;
height: 25px;

  img {
    width: 100%;
  }
`;
export const UserDataContainer = styled.div`
cursor: pointer;
  p {
    margin: 0;
  }
`;
export const P = styled.p`
  margin: 0;
`;
export const Number = styled.div`
  background: ${({ theme }) => theme.secondryColor};
  position: absolute;
  width: 14px;
  border-radius: 50%;
  height: 14px;
  bottom: 10%;
  left: 50%;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.div`
@media(max-width: 577px)
  {
    display:none;
  }
`;
export const AllCategories = styled.div`
display: none;
@media (max-width: 768px)
{
  justify-content: space-between;
  width: 85%;
 margin: auto;
 
  display: flex;
}
`;
export const PCategory = styled.p`
font-size: 14px;
font-weight: 800;
font-family: 'Lato',sans-serif;
margin-bottom: 0.5rem;
display: inline-block
`;
export const ViewLink = styled(PCategory)`
margin-bottom: 0.5rem;
color: #0A4B9B;
font-size: 12px;
font-weight: 400;
`;
export const VericalMenu = styled.div`
width: 70%;
height: 100%;
background-color: red;

`;
export const UserModal = styled.div`
position: absolute;
top: 100%;
padding: 10px 20px;
width: 100%;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 4px 4px 8px #00000033;
border-radius: 10px;
z-index: 1000;
min-width: 170px;


`;
export const UserModalListItem = styled.li`
font-weight: 600;
margin:5px 0px;

&:hover{
  color:#AA2C4A
}
`;

export const MyToast = styled(Toast)`
  position: fixed;
  top: 3%;
  right: 3%;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  border: none;
  z-index: 100000;
  min-width: 300px;
  
`;
     