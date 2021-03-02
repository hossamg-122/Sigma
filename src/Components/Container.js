import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  width: 80%;
  margin: 1rem auto;
  padding: 1.2rem 1.5rem;
  border-radius: 20px;
`;
