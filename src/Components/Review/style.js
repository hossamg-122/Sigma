import styled from "styled-components";

export const WriteReviewStyle = styled.div`
  width: 90%;
  margin: 0rem auto 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "img content content"
    "img form form"
    ". form form";

  @media (max-width: 867px) {
    width: 90%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "img content content"
      "form form form";
  }
`;
export const ImgContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  grid-area: img;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
export const Content = styled.div`
  grid-area: content;
  height: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Form = styled.form`
  grid-area: form;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.textarea`
  color: ${({ theme }) => theme.textColor};
  outline: none;
  border-radius: 0.7rem;
  border: 1px solid ${({ theme }) => theme.secondryColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  width: 100%;
  font-size: 0.8rem;
  padding: 0.5rem 2rem 2rem 2rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  @media (max-width: 867px) {
    width: 90%;
    margin-top: 0;
  }

  @media (min-width: 1400px) {
    padding: 0.7rem 2rem 4rem 2rem;
  }
`;
export const P = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 700;
  }
`;
export const Modal = styled.div`
  position: fixed;
  z-index: 500;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  transition: all 1.8s ease-out;
  @media (max-width: 600px) {
    left: 50%;
    top: 50%;
    width: 90%;
  }
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 20px;
  text-align: center;
`;
export const Sign = styled.p`
  width: 80%;
  margin: 5rem auto;
  font-size: 3rem;
  color: ${({ theme }) => theme.placeholder};
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
`;
