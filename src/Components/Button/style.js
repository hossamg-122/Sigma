import styled from "styled-components";

export const ButtonStyle = styled.button`
  border-radius: 20px;
  background: ${({ theme }) => theme.secondryColor};
  min-width: 15%;
  max-width: 30%;
  margin: 0 auto;
  color: ${({ theme }) => theme.primaryColor};
  padding: 0.4rem 1.5rem;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  outline: none;
  &:focus{
    outline : none;
    border:none;
  }

  @media (max-width: 1440px) {
    min-width: 30%;
  max-width: 30%;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  }
  @media (max-width: 1100px) {
    min-width: 40%;
  max-width: 40%;
  }
  @media (max-width: 867px) {
    min-width: 50%;
  max-width: 50%;
  }
  @media (max-width: 730px) {
    min-width: 50%;
  max-width: 90%;
  }
`;
export const ButtonItem = styled.div`
  margin: 0 1.5rem;
  
  @media (max-width: 1440px) {
    margin: 0 1rem;
  }
`;
export const ButtonTotal = styled(ButtonItem)`
  margin-left: 5rem;
  
  @media (max-width: 1440px) {
    margin-left: 3rem;
  }
`;