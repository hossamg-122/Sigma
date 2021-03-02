import styled from "styled-components";

export const CategoryList = styled.div`
width:80%;
margin: auto;

`;
export const CategoryName = styled.p`
color: #00000080;
    font-family: 'Lato',sans-serif;
    font-size: 13px;
    font-weight: 800;
    &:hover{
        color: #AD2A4A;
    }

`;

export const CloseBtn = styled.button`
    border-radius: 50%;
    background-color: transparent;
    color: #AD2A4A;
    border: #AD2A4A 1px solid;
    padding: 0 10px 3px;
    transition : 0.2s all ease-in-out;
    
    &:focus{
        outline : none
    }
    &:hover{
        background-color: #AD2A4A;
        color: white;
        border: #AD2A4A 1px solid;
    }

`;

export const MobileCategories = styled.div`
position: absolute;
z-index: 210;
padding: 16px;
transition: all 0.8s ease-out;
background: #FAFAFA;
width: 100%;
height: auto;
overflow-y:auto;
-webkit-box-shadow: 0px 7px 20px -6px rgba(168,159,168,1);
-moz-box-shadow: 0px 7px 20px -6px rgba(168,159,168,1);
box-shadow: 0px 7px 20px -6px rgba(168,159,168,1);
@media(min-width : 768px)
{
    display: none !important;
}
}
`;