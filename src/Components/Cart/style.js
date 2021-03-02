import styled from "styled-components";
import { Container } from "../Container";
import { IconContainer } from "../Order/style";
import { SignPopUpStyle } from "../PopUp/style";
import { Toast } from "react-bootstrap";

export const CartContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 7rem 0;
  text-align: left;

  button {
    outline: none;
  }
`;
export const CartsContainer = styled.div`
  margin-bottom: 4rem;
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.textColor};
`;
export const H6 = styled.h6`
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 768px) {
    font-size: smaller;
  }
`;
export const P = styled.p`
  color: ${({ theme }) => theme.paragraphColor};
`;
export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  padding-right: 1.2rem;

  @media (max-width: 1022px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  padding: 0px 0px 0px 10px;
  @media (max-width: 768px) {
    font-size: smaller;
  }
`;
export const Img = styled.div`
  width: 30%;
  img {
    width: 100%;
  }
`;
export const ImgPlace = styled(Img)`
  width: 20%;
`;
export const Price = styled.div`
  color: ${({ theme }) => theme.secondryColor};
  font-weight: 500;
  align-items: center;
  display: flex;
  img {
    width: 7%;
  }

  @media (max-width: 1022px) {
    img {
      width: 5%;
    }
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  width: 50%;

  @media (max-width: 1022px) {
    align-items: center;
    padding: 1rem 3rem;
    width: 100%;
  }
`;
export const Qty = styled.div`
  display: flex;
  margin: 0.3rem 0;
  align-items: center;
  font-weight: 500;
`;
export const Counter = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.darkGrey};
  line-height: 0.4rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};

  padding: 0.1rem;
  svg {
    width: 7px !important;
  }
`;
export const ItemPrice = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.25rem 0;

  span {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: smaller;
  }
`;
export const Line = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.secondryColor};
  width: 1px;
  height: 100%;
  left: 50%;
  top: 0;

  @media (max-width: 1022px) {
    width: 100%;
    height: 1px;
    left: 0;
    position: relative;
    margin: 1rem 0;
  }
`;
export const ItemContainer = styled(Container)`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  width: 70%;
  cursor: pointer;

  @media (max-width: 1022px) {
    width: 98%;
    flex-direction: column;
  }
`;
export const PlaceItemContainer = styled(ItemContainer)`
  margin-right: 1.2rem;
  width: 100%;
  @media (max-width: 1022px) {
    flex-direction: row;
  }
`;
export const PlaceOrderCartStyle = styled.div`
  padding: 3rem 0;
  text-align: left;
  background: ${({ theme }) => theme.body};

  button {
    outline: none;
  }
`;
export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(47%, 0.5fr));
  grid-column-gap: 30px;
  margin: 2rem auto;
  width: 90%;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
export const OrderSummery = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  padding: 2rem 5rem;

  span {
    margin-left: 0.5rem;
  }
`;
export const OrderForm = styled.form`
  margin: 2rem 5rem;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  padding: 0rem 1.2rem;
  font-size: 0.9rem;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;
export const Select = styled.select`
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  padding: 0rem 1.2rem;
  font-size: 0.9rem;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;
export const NoOrders = styled.p`
     width: 80%;
    margin: 5rem auto;
    font-size: 1rem;
    color: #000000;
    font-weight: 500;
    text-align: center;
    height: 100%;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Option = styled.option`
  color: ${({ theme }) => theme.placeholder};
`;
export const InputTitle = styled.h6``;
export const FormInputItem = styled.div`
  width: 48%;
  margin: 1.3rem 0;
  margin-right: auto;

  @media (max-width: 867px) {
    width: 98%;
  }
  input {
    background: ${({ theme }) => theme.primaryColor};
    box-shadow: ${({ theme }) => theme.shadowColor};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    padding: 0rem 1.2rem;
    font-size: 0.9rem;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }
`;
export const FormSelectItem = styled(FormInputItem)`
  width: 100%;
  display: flex;
  align-items: center;

  h6 {
    margin-right: 2rem;
  }
  div {
    width: 90%;
    overflow: hidden;
    padding: 1rem;
  }
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 867px) {
    flex-direction: column;
  }
`;
export const LastRow = styled(Row)`
  margin-bottom: 4rem;
`;
export const BookMarkContainer = styled(IconContainer)`
  top: 10%;
  left: 95%;

  @media (max-width: 1022px) {
    top: 5%;
    left: 90%;
  }
`;
export const DeleteIconContainer = styled(IconContainer)`
  top: 10%;
  left: 88%;

  @media (max-width: 1022px) {
    top: 5%;
    left: 80%;
  }
`;
export const ArrowContainer = styled(IconContainer)`
  top: 50%;
  left: 93%;
  transform: translate(-0%, -50%);
  color: ${({ theme }) => theme.placeholder};
  width: fit-content;
`;
export const SelectContainer = styled.div`
  position: relative;
`;

export const MyToast = styled(Toast)`
  position: fixed;
  top: 3%;
  right: 3%;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  border: none;
  z-index: 10;
`;

export const PopUpStyle = styled(SignPopUpStyle)``;
