import styled from "styled-components";
import { Container } from "../Container";
export const User = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserImage = styled.img`
  border-radius: 63px;
  width: 125px;
  height: 125px;
`;
export const Divheader = styled.p`
  color: ${({ theme }) => theme.secondryColor};
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  padding: 5px;
  font-family: "Lato", sans-serif;
  @media (max-width: 577px) {
    font-size: 17px;
  }
`;
export const IconImage = styled.img`
  position: absolute;
  right: 10%;
`;
export const ImgForm = styled.form`
  width: 0;
  margin: 0;
  height: 0;
`;
export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondryColor};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 7%;
  right: 7%;

  input {
    width: 35px;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
  }
`;

export const UserInfo = styled(Container)`
  position: relative;
`;
export const AccountWrapper = styled.div`
  width: 80%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  // margin: 2%;
  @media (max-width: 740px) {
    width: 94%;
    text-align: center;
  }
`;
export const Form = styled.form`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 577px) {
    width: 94%;
    text-align: center;
    margin: auto;
  }
`;
export const Label = styled.label`
  padding: 5px;
  font-family: "Lato", sans-serif;
  margin-left: 1%;
  @media (max-width: 577px) {
    font-size: 14px;
  }
`;
export const Line = styled.div`
  width: 97%;
  border-bottom: 1px solid #707070;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 577px) {
    width: 80%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
export const P = styled.p`
  width: 80%;
  margin: 5rem auto;
  font-size: 3rem;
  color: ${({ theme }) => theme.placeholder};
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const InputSection = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  @media (max-width: 740px) {
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;
export const Password = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 740px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0.8rem;
  }
`;
export const EyeIcon = styled.img`
  position: absolute;
  right: 5%;
  top: 10%;
  @media (max-width: 740px) {
    position: absolute;
    right: 5%;
    top: 1%;
  }
`;
export const Input = styled.input`
  background-color: ${({ theme }) => theme.primaryColor};
  font-family: "Lato", sans-serif;
  color: ${({ theme }) => theme.textColor};
  border: none;
  box-shadow: ${({ theme }) => theme.shadowColor};
  border-radius: 20px;
  outline: none;
  width: 100%;
  height: 45px;
  padding: 0.5rem 1.5rem;
  @media (max-width: 740px) {
    width: 80%;
    height: 30px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0.8rem;
    font-size: 15px;
  }
`;
