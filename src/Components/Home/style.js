import styled from "styled-components";

export const ViewAll = styled.p`
  align-self: flex-end;
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  cursor: pointer;
  &:hover {
    filter: contrast(0.5);
  }
`;
export const TitlePart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;
export const List = styled.div`
  width: 90%;
  margin: 5rem auto;
  @media (min-width: 1400px) {
    width: F70%;
  }
`;
export const Title = styled.h4`
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  font-size: 1.3rem;
  align-self: flex-start;
  margin: 0;
`;
export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24%, 0.3fr));
  grid-column-gap: 15px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(30%, 0.333fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(47%, 0.5fr));
  }
  
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
export const HomeStyle = styled.div`
  width: 100%;
`;
