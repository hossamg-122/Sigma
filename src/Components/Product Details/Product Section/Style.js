import styled from "styled-components";
import ReactImageFallback from "react-image-fallback";

export const ProductSectionWrapper = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between; */
  @media (max-width: 577px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const Product = styled.div`
  width: 50%;
  display: inline-flex;
  vertical-align: top;
  @media (max-width: 577px) {

    width: 100%;
  }
`;
export const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
 
`;
export const ProductImage = styled(ReactImageFallback)`
  max-width: 100% !important;
  width: auto !important;
  max-height: 100% !important;
`;
export const ProductDescription = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;
export const ProductName = styled.p`
  color: #000000;
  font-weight: 800;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  @media (max-width: 577px) {
    font-size: 18px;
  }
`;
export const Details = styled.div`
  width: 50%;
  display : inline-block;
  vertical-align: top;
  @media (max-width: 577px) {
    width: 90%;
    margin: auto;
  }
`;
export const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #000000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 27%;
  @media (max-width: 577px) {
    height: 8px;
    width: 8px;
  }
`;
export const P = styled.p`
  color: #000000;
  display: inline-block;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding-left: 5%;
  text-align: left;
  margin-bottom: 0.5rem;
  position: relative;

  @media (max-width: 577px) {
    font-size: 12px;
    margin-bottom: 0.3rem;
  }
`;
export const ProductData = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  padding: 0px;
  margin-bottom: 0.5rem;
  position: relative;
  @media (max-width: 577px) {
    font-size: 12px;
  }
`;
export const QTY = styled.div`
  margin-left: 0;
`;
export const QTYIcon = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const Hint = styled.p`
  color: ${({ theme }) => theme.secondryColor};
  font-size: 20px;
  font-family: "Lato", sans-serif;
  @media (max-width: 577px) {
  display: none;
  }
`;

export const Share = styled.div`
  display: flex;
  margin: 0rem 0 2rem 0;

  @media (max-width: 577px) {
    flex-direction: column;
  }

  p {
    display: flex;
    align-items: center;
    
    color: ${({theme}) => theme.secondryColor};
    margin: 0 .5rem 0 0;
    @media (max-width: 577px) {
    font-size: 1rem;
  }
  }

  button {
    margin:.3rem;
    &:focus {
      outline: none;
    }

  }
`;

export const HintMobile = styled.p`
  @media (max-width: 577px) {
    color: ${({ theme }) => theme.secondryColor};
    font-size: 12px;
    font-family: "Lato", sans-serif;
  }
  @media (min-width: 577px) {
    display:none;
}
`


export const UponMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 577px) {
    margin: 0 1rem;
  }
`;

export const MainContainer = styled.div`
  display: block;
  height: 100%;
  margin-bottom: 1rem;

  @media (max-width: 577px) {
    margin: 0 1rem 1rem 1rem;
  }

`;

export const LeftContainer = styled.div`
  display: inline-flex;
  width: 40%;
  vertical-align: top;
  padding-right: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const RightContainer = styled.div`
  display: inline-flex;
  width: 60%;
  flex-direction: column;
  vertical-align: top;
  padding-left: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const QtySign = styled.img`

@media (max-width: 768px) {
    width : 14px
  }
@media (max-width: 577px) {
    width : 10px
  }
`