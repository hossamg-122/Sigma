import styled from "styled-components";
import ReactImageFallback from "react-image-fallback";

export const CommentWrapper = styled.div`
  width: 100%;
  // max-height: 200px;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 1px solid #707070;
  margin-bottom: 1rem;
`;
export const ReviewerInfo = styled.div`
  display: flex;
`;
export const Comment = styled.div`
  color: #000000;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin-top: 1rem;
  margin-left: 80px;
  margin-bottom: 0;
  p {
    margin-right: 7%;
  }
  @media (max-width: 577px) {
    font-size: 12px;
    width: 100%;
    margin-top: 0.5rem;
    margin-left: 60px;
    flex-direction: column;
  }
`;
export const ReviewerImage = styled(ReactImageFallback)`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  @media (max-width: 577px) {
    width: 40px;
    height: 40px;
  }
`;
export const ReviewerName = styled.p`
  color: #000000;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  margin-left: 1.5rem;
  @media (max-width: 577px) {
    font-size: 12px;
  }
`;
export const CommentTime = styled.span`
  display: block;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 10px;
  font-family: "Lato", sans-serif;
  @media (max-width: 577px) {
    font-size: 10px;
  }
`;
