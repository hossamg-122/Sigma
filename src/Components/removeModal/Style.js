import styled from "styled-components";
export const Modal = styled.div`
  position: fixed;
  z-index: 209;
  padding: 16px;
  left: 15%;
  top: 30%;
  transition: all 0.8s ease-out;
  @media (min-width: 600px) {
    width: 533px;
    left: calc(50% - 250px);
  }
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 20px;
  width: 533px;
  height: 175px;
  text-align: center
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
