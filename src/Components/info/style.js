import styled from "styled-components";
import { Container } from "../Container";

export const OrderSummaryStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: left;
`;
export const OrderStyle = styled(Container)`
  width: 90%;
  position: relative;
`;
export const OrdersContainer = styled.div``;
export const Date = styled.div`
  text-align: right;
  p {
    color: ${({ theme }) => theme.placeholder};
    font-size: 0.7rem;
  }
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.textColor};
`;
export const H2 = styled.h2`
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  margin-bottom: 4rem;
`;
export const P = styled.p`
  color: ${({ theme }) => theme.paragraphColor};
`;
export const IconContainer = styled.div`
  color: ${({ theme }) => theme.secondryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
 right: 4%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.paragraphColor};
  }
`;
