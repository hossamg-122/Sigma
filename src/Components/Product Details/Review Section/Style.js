import styled from "styled-components";

export const ReviewWrapper = styled.div`
  width: 100%;
  height: 210px;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
  box-shadow: ${({ theme }) => theme.shadowColor};
  display: flex;
  @media (max-width: 577px) {
    height: 116px;
    margin-top: 8%;
    margin-bottom: 8%;
  }
`;
export const Rating = styled.div`
  width: 33.3%;
  border-right: 1px solid #707070;
  border-left: 1px solid #707070;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  margin: 0;
  display: inline-block;
  margin-right: 0.8rem;
  color: #000000;
  opacity: 1;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  @media (max-width: 877px) {
    font-size: 16px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 577px) {
    font-size: 7px;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1%;
  width: 100%;
`;
export const Stroke = styled.div`
  height: 20px;
  position: relative;
  background: #d3d3d3;
  border-radius: 25px;
  width: 200px;
  @media (max-width: 877px) {
    width: 180px;
    height: 18px;
  }
  @media (max-width: 750px) {
    width: 160px;
    height: 18px;
  }
  @media (max-width: 700px) {
    width: 130px;
    height: 12px;
  }
  @media (max-width: 577px) {
    width: 91px;
    height: 8px;
  }
  @media (max-width: 420px) {
    width: 70px;
    height: 6px;

  }
`;
export const Fill = styled.span`
  display: block;
  height: 100%;
  border-radius: 25px;
  background-color: #ffc107;
  position: relative;
  width: 33%;
`;
export const StarsSection = styled.div`
  width: 33.4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  @media (max-width: 615px) {
    width: 50px;
    height: 50px;
  }
`;
export const CircleContent = styled.p`
  text-align: center;
  color: #000000;
  opacity: 1;
  font-size: 25px;
  font-family: "Lato", sans-serif;
  margin-bottom: 0;
  @media (max-width: 615px) {
    font-size: 15px;
  }
`;
export const Stars = styled.div`
  width: 168px;
  height: 35px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 615px) {
    width: 80px;
    height: 17px;
  }
`;
export const ReviewPrecentage = styled(CircleContent)`
  font-size: 20px;
  width: 50%;
  height: 50%;
  @media (max-width: 577px) {
    font-size: 10px;
    width: 80%;
  }
`;
export const NoOfRating = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.darkGrey};
  @media (max-width: 615px) {
    font-size: 10px;
  }
`;
export const WriteReviews = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: #0a4b9b;
  display: block;
  opacity: 2;
  font-weight: 520;
  cursor: pointer;
  @media (max-width: 577px) {
    font-size: 10px;
  }
`;
export const WriteReviewsMobile = styled.span`
  font-size: 10px;
  font-family: "Lato", sans-serif;
  color: #0a4b9b;
  display: block;
  cursor: pointer;
  opacity: 2;
  font-weight: 520;
  @media (min-width: 577px) {
    display: none;
  }
`;
