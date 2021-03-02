import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: ${({ theme }) => theme.darkBlue};
  width: 100%;
  flex-shrink: 0;
`;
export const FooterContent = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
  @media (max-width: 577px) {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }
`;
export const Copyright = styled.div`
  width: 80%;
  margin: auto;
  border-top: 1px solid #fff;
  padding: 2rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: #fff;
  a {
    font-weight: bold;
  }
`;
export const FooterInfo = styled.div`
  width: 25%;
  padding: 2%;
  @media (max-width: 577px) {
    width: 272px;
    width: 158px;
    text-align: left;
    width: 75%;
  }
`;
export const FooterHeader = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 20px;
  font-family: "Lato", sans-serif;
  @media (max-width: 577px) {
    font-size: 16px;
    position: relative;
    margin-top: 15px;
    width: 100%;
  }
`;
export const FooterSubHeader = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 18px;
  font-family: "Lato", sans-serif;
  margin-bottom: 0.5rem;
  @media (max-width: 577px) {
    font-size: 14px;
  }
`;
export const FooterData = styled.p`
  color: #ffffffb3;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  margin-bottom: 0.5rem;
  @media (max-width: 577px) {
    font-size: 12px;
  }
`;
export const SocialIcon = styled.span`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 577px) {
    width: 20px;
    height: 20px;
  }
`;
export const IconImage = styled.img`
  @media (max-width: 577px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 786px) {
    width: 14px;
    height: 14px;
  }
`;
export const SocialData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  @media (max-width: 577px) {
    width: 100px;
    margin: auto;
  }
`;
export const SubscribeInput = styled.input`
  ::placeholder {
    color: #70707080;
    font-size: 12px;
    font-family: "Lato", sans-serif;
  }
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid #0a3264;
  border-radius: 20px;
  opacity: 1;
  padding-left: 10%;
  padding-top: 0px;
  box-shadow: ${({ theme }) => theme.shadowColor};
`;
export const DotIcon = styled.img`
  @media (max-width: 577px) {
    height: 0px;
    width: 0px;
  }
`;
export const DownArrow = styled.img`
  position: absolute;
  right: 1%;
`;
export const Subscribe = styled.div`
  position: relative;
`;
export const SendIcon = styled.img`
  position: absolute;
  right: 8%;
  bottom: 15%;
  @media (max-width: 577px) {
    right: 5%;
  }
`;
export const Line = styled.div`
  height: 97%;
  border-right: 1px solid #707070;
  position: absolute;
  right: 23%;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  margin: 0 1rem 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
  &:hover {
    border: none;
  }
`;
export const Facebook = styled(Icon)`
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};
  &:hover {
    background: ${({ theme }) => theme.facebookBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const Twitter = styled(Icon)`
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    background: ${({ theme }) => theme.twitterBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const Instagram = styled(Icon)`
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    background: ${({ theme }) => theme.instagramBg};
    color: ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 480px) {
    margin-right: 3rem;
  }
`;
export const Youtube = styled(Icon)`
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};
  &:hover {
    background: ${({ theme }) => theme.youtubeBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
// linkedinBg: "#0077B5",
//     youtubeBg : "#FF0000",
export const Linkedin = styled(Icon)`
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    background: ${({ theme }) => theme.linkedinBg};
    color: ${({ theme }) => theme.primaryColor};
  }
`;
export const HeaderIconStyle = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 0.7rem 0;
  @media (max-width: 577px) {
    display: none;
  }
`;

export const MobileOnly = styled.div`
  @media (min-width: 577px) {
    display: none;
  }
`;
export const AcceptPaymentStyle = styled.div`
  margin-top: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.primaryColor};

  h5 {
    margin-bottom: 1rem;
  }
`;
export const ImgContainer = styled.div`
  width: 20%;

  img {
    width: 100%;
  }
`;
export const ImgsContainer = styled.div`
  width: 100%;
  display: flex;
`;
