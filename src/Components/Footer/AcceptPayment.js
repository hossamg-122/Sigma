import React from "react";
import { AcceptPaymentStyle, ImgsContainer, ImgContainer } from "./Style";
import Img1 from "../../media/visa.png";
import Img2 from "../../media/moreabout_cr.png";
import Img3 from "../../media/moreabout_ms.png";
import Img4 from "../../media/mastercard.png";

const AcceptPayment = () => {
  return (
    <AcceptPaymentStyle>
      <h5>We Accept Payment by</h5>
      <ImgsContainer>
        <ImgContainer>
          <img src={Img1} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={Img2} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={Img3} alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src={Img4} alt="" />
        </ImgContainer>
      </ImgsContainer>
    </AcceptPaymentStyle>
  );
};
export default AcceptPayment;
