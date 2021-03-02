import React, { useState } from "react";

import ReactStars from 'react-stars'

import {
  WriteReviewStyle,
  ImgContainer,
  Content,
  Form,
  Input,
  P,
  Sign,
} from "./style";
import Button from "../Button/Button";
import { WRITE_REVIEW, NOTIFY } from "../../app/Actions/index";
import { connect, } from "react-redux";
import ReactImageFallback from "react-image-fallback";
import fallbackImage from "../../media/my-backup.png";

const WriteReview = (props) => {
  const [form, setForm] = useState({
    review: "",
    rate: 0,
  });
  const ratingChanged = (newRating) => {
    setForm({ ...form, rate: newRating });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const rateValidation = (e) =>{
    e.preventDefault()
    if (! form.rate > 0 ){
      props.NOTIFY(
        {title:"Notification", body: "rate the product from 1 to 5 in order to add your review",  kind:"error"}
      )
    } 
    else {
      handleSubmit(e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setModalShow(!props.modalShow);
    props.WRITE_REVIEW({
      ClientId: props.gstate.clientInfo.clientInfo.id,
      ProductId: props.product
        ? props.product.productId
          ? props.product.productId
          : props.product.id
        : props.gstate.getProductById.product.id,
      Comment: form.review,
      Rate: form.rate,
    });
  };
  return props.gstate.clientInfo.clientInfo.id ? (
    <WriteReviewStyle>
      <ImgContainer>
        <ReactImageFallback
          src={
            props.product
              ? props.product.heroImage
              : props.gstate.getProductById.product.heroImage
          }
          fallbackImage={fallbackImage}
          alt={
            props.product
              ? props.product.productName
                ? props.product.productName
                : props.product.name
              : props.gstate.getProductById.product.info.name
          }
        />
      </ImgContainer>
      <Content>
        <P>
          Write your review about
          <span>
            {props.product
              ? props.product.productName
                ? props.product.productName
                : props.product.name
              : props.gstate.getProductById.product.info.name}
          </span>
        </P>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
          value={form.rate}
        />
      </Content>
      <Form>
        <Input
          placeholder="Write your review here"
          id="review"
          onChange={(e) => handleChange(e)}
        />
        <Button text="Submit" handleFunction={(e) => rateValidation(e)} />
      </Form>
    </WriteReviewStyle>
  ) : (
    <Sign>You Need To Sign In First</Sign>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { WRITE_REVIEW, NOTIFY })(WriteReview);
