import styled from "styled-components";
import { Container } from "../Container";
import { ArrowContainer, SelectContainer } from "../Cart/style";

export const CategoryPageStyle = styled.div`
  width: 90%;
  margin: 1.2rem auto;
  display: flex;
  position: relative;
  
  @media (min-width: 1366px) {
    width: 85%;
  }
 
  @media (max-width: 577px) {
    width: 100%;
      }
`;
export const SubCategoryStyle = styled.div`
  width: 23%;
  margin : 25px 0px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadowColor};
  border-radius: 20px;
  background: ${({ theme }) => theme.body};
  overflow: hidden;
  height: fit-content;
  @media (max-width: 921.99px) {
    display: none;
  }
`;
export const SubCategoryMobileStyle = styled(SubCategoryStyle)`
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 7;
  @media (max-width: 921.99px) {
    display: block;
  }
`;
export const Title = styled.h3`
  background: ${({ theme }) => theme.sub};
  color: ${({ theme }) => theme.secondryColor};
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.7rem 0;
  @media (min-width: 1366px) {
    font-size: 1rem;
  }
`;
export const Subs = styled.div`
  font-weight: 400;
  padding: 1rem 2rem;
  p {
    font-size: 0.8rem;
    margin: 0.4rem 0;
    cursor: pointer;
    width: fit-content;
  }
  @media (min-width: 1366px) {
    padding: 1rem 3rem;
    p {
      font-size: 1rem;
    }
  }
`;
export const CategoryProductsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-left: auto;
  padding: 0.3rem 1rem;
  background: ${({ theme }) => theme.body};
  @media (max-width: 921.99px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 70%;
  margin-right: auto;

  img {
    width: 5% !important;
  }
`;
export const ProductGrid = styled(Container)`
  width: 100%;
  position: relative;
  overflow: visible;
  height: 43vw;
  display: inline-block;
  transition: all 0.15s ease-in-out;
  
  @media (max-width: 500px) {
    height: 70vw;
  }

  @media (max-width: 991px) {
    min-height: 40vw;
  }
  
  @media (min-width: 992px) {
    height: 35vw;
  }
  @media (min-width: 1200px) {
    height: 350px;
  }
`;
export const ImgGrid = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 70%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
  }

`;
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 0.32fr));
  grid-column-gap: 30px;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(auto-fit, minmax(45%, 0.5fr));
  }
  @media (max-width: 922px) {
    grid-template-columns: repeat(auto-fit, minmax(47%, 0.5fr));
  }
  
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

`;
export const ProductListStyle = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: visible;
  padding: 0.2rem 1.5rem;
  height: 35vw;
  @media (min-width: 341px) {
    height: 25vw;
    padding: 0.2rem 1.5rem;
  }
  @media (min-width: 1017px) {
    height: 12vw;
    padding: 1.2rem 1.5rem;
  }
  @media (min-width: 1366px) {
    height: 8vw;
    padding: 1.2rem 1.5rem;
  }
  transition: all 0.15s ease-in-out;
`;
export const ImgList = styled.div`
  width: 30%;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
  }

  @media (min-width: 1017px) {
    width: 20%;
  }
  @media (min-width: 1366px) {
    width: 15%;
  }
`;
export const ProductsList = styled.div``;
export const ProductTitle = styled.h6`
  font-size: 1rem;
  height: 50%;
  font-weight: 600;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-height: 25px;
    line-height: 25px;
    margin: 0 0 0 0;
    font-size: 0.85rem;
    
  }
`;
export const Control = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
  p {
    margin: 0;
    margin-right: 1rem;
  }

  .active {
    background: ${({ theme }) => theme.secondryColor};

    svg {
      .a {
        fill: ${({ theme }) => theme.primaryColor} !important;
      }
    }
  }

  @media (max-width: 577px) {
    flex-direction: column;
    align-items: flex-start;
      }
`;

export const SortContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 577px) {
    p{
    margin-right:.4rem;
  }  }
`;

export const ViewContainer = styled.div`
  display: flex;
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
  margin-bottom: 2.3rem;

  @media (max-width: 922px) {
    font-size: 1.4rem;
    font-weight: 700;  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 700;  }

  @media (max-width: 577px) {
    font-size: 1rem;
    font-weight: 700;  }
`;
export const Select = styled.select`
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  padding-right: 7rem;
  padding-left: 1.2rem;
  font-size: 0.7rem;
  height: 24px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.secondryColor};
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  @media (max-width: 577px) {
    height: 30px;
    /* width: 80%; */
    padding-right: 5rem;
    padding-left: .7rem;
    font-size: 1rem;  }

`;
export const Option = styled.option`
  color: ${({ theme }) => theme.placeholder};
`;
export const Display = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.categoryBorder};
  margin: 0 0.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 70%;
    margin: 0 auto;
    .a {
      fill: ${({ theme }) => theme.placeholder} !important;
    }
  }
`;
export const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 200;
  

  a {
    height: 100%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.3;
  z-index: 2000;
`;
export const Quick = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  z-index: 3000;

  /* @media (min-width: 670px) {
    width: 50%;
  } */
`;
export const QuickList = styled(Quick)`
  width: 60%;

  @media (min-width: 670px) {
    width: 20%;
  }
`;
export const ProductStyle = styled.div`
  width: 70%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 0.3fr));
  grid-column-gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(30%, 0.33fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(47%, 0.5fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
export const Icons = styled.div`
  background: ${({ theme }) => theme.productIconBg};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0.7rem;
  img {
    width: 27px;
    height: 27px;
    margin: 0 auto;
  }
`;
export const HeartStyle = styled(Icons)`
  padding-left: 0.9rem;
  padding-right: 0.2rem;
  margin-right: auto;
  color: #f9fbfd;
  svg {
    font-size: 27px;
    padding: 0 0.25rem 0 0;
  }
`;
export const CartStyle = styled(Icons)`
  margin: 0 0.2rem;
`;
export const StarStyle = styled(Icons)`
  padding-left: 0.2rem;
  padding-right: 0.9rem;
  margin-left: auto;
`;
export const SubArrowContainer = styled(ArrowContainer)`
  @media (min-width: 922px) {
    display: none;
  }
`;
export const CategoryArrowContainer = styled(ArrowContainer)`
  left: 84%;
`;
export const CategorySelectContainer = styled(SelectContainer)`
  margin-right: 1rem;
`;
export const Price = styled.div`
  color: ${({ theme }) => theme.secondryColor};
  font-weight: 500;
  align-items: center;
  display: flex;
  font-size: 1rem;

  img {
    width: 7%;
  }

  @media (max-width: 1022px) {
    font-size: 1rem;
    img {
      width: 5%;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const SaleBatch = styled.span`
    background-color: #AA2C4A;
    color: white;
    border-radius: 50%50%;
    height: 50px;
    width: 50px;
    position: absolute;
    top: -10px;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:201;
    transform : rotate(-45deg);
  @media (max-width: 577px) {
   font-size:13px;
    width: 35px;
    height: 35px;
  }
  @media (max-width: 768px) {
   
  }
`;

export const GridSoldOutBatch  = styled.span`
    background-color: #9a0b0bad;
    color: #ffffff;
    height: 50px;
    width: 100%;
    position: absolute;
    top: 40%;
    left: 0%;
    right: 0%;
    font-weight: 700;
    text-shadow: 10;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 100;
  
@media (max-width: 577px) {

}
@media (max-width: 768px) {

}
`;

export const ListSoldOutBatch  = styled.span`
    background-color: #9a0b0bad;
    color: #ffffff;
    height: 50px;
    width: 100%;
    position: absolute;
    top: 40%;
    left: 0%;
    right: 0%;
    font-weight: 700;
    text-shadow: 10;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 100;
  
@media (max-width: 577px) {
font-size : small;
height : 35px;
}
@media (max-width: 768px) {

}
`;
