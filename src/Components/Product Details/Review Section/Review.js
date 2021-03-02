import React, { useState, useEffect } from "react";
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'
import PopupReview from '../../Review/PopupReview'
import WriteReview from "../../Review/WriteReview"
import {
  ReviewWrapper,
  Rating,
  StarsSection,
  Circle,
  CircleContent,
  NoOfRating,
  ReviewPrecentage,
  WriteReviews,
  WriteReviewsMobile,
  Stars,
  Stroke,
  Fill,
  RatingWrapper,
  Text,
  Item
} from "./Style";
import '../../index.css'
import { MyToast } from "../../Cart/style";
import { connect } from "react-redux";

const Review = (props) => {

  const [rating, setRating] = useState(0)
  const [star1, setStar1] = useState(0)
  const [star2, setStar2] = useState(0)
  const [star3, setStar3] = useState(0)
  const [star4, setStar4] = useState(0)
  const [star5, setStar5] = useState(0)
  const [peoplePrecentage, setPeoplePrecentage] = useState(0)

  const [signInFirst, setSignInFirst] = useState(false);
  
  useEffect(() => {
    if(props.gstate.getProductById.product.reviews)
    {
      calcRating();
      calcStars();
      PeopleLovedProduct();
    }
    
  }, [])
  function calcRating() {
    let totalRate = 0;
    for (let x = 0; x < props.product.reviews.length; x++) {
      totalRate = totalRate + props.product.reviews[x].rate;
    }
    setRating(totalRate / props.product.reviews.length)
  }
  function calcStars()
  {
    for (let x = 0; x < props.product.reviews.length; x++) {

      if(parseInt(props.product.reviews[x].rate) === 5)
      {
        setStar5(((star5+1)/props.product.reviews.length*100))
      }
      if(parseInt(props.product.reviews[x].rate) === 4)
      {
        setStar4(((star4+1)/props.product.reviews.length*100))
      }
      if(parseInt(props.product.reviews[x].rate) === 3)
      {
        setStar3(((star3+1)/props.product.reviews.length*100))
      }
      if(parseInt(props.product.reviews[x].rate) === 2)
      {
        setStar2(((star2+1)/props.product.reviews.length*100))
      }
      if(parseInt(props.product.reviews[x].rate) === 1)
      {
        setStar1(((star1+1)/props.product.reviews.length*100))
      }
    }
  }
  function PeopleLovedProduct()
  {
    let people = 0
    for (let x = 0; x < props.product.reviews.length; x++) {
      if(props.product.reviews[x].rate >= 3.5)
      {
        people += 1;
        setPeoplePrecentage((people/props.product.reviews.length) * 100)
      }
    }
  }
  return (
    <ReviewWrapper>
      <StarsSection>
        <Circle>
          <CircleContent>{props.product.productReviews.totalReview.toFixed(1)}</CircleContent>
        </Circle>
        <Stars>
          <StarRatings
            rating={props.product.productReviews.totalReview}
            starRatedColor="#ffc107"
            numberOfStars={5}
            name='rating'
            starHoverColor="#ffc107"
            starSpacing='0px'
          />
        </Stars>
        <NoOfRating> {props.product.productReviews.reviews} Ratings</NoOfRating>
      </StarsSection>
      <Rating>
        <RatingWrapper>
          <Item>
            <Text>5 Stars</Text>
            <Stroke>
              <Fill style={{ width: `${star5}%` }}></Fill>
            </Stroke>
          </Item>
          <Item>
            <Text>4 Stars</Text>
            <Stroke>
              <Fill style={{ width: `${star4}%` }}></Fill>
            </Stroke>
          </Item>
          <Item>
            <Text>3 Stars</Text>
            <Stroke>
              <Fill style={{ width: `${star3}%` }}></Fill>
            </Stroke>
          </Item>
          <Item>
            <Text>2 Stars</Text>
            <Stroke>
              <Fill style={{ width: `${star2}%` }}></Fill>
            </Stroke>
          </Item>
          <Item>
            <Text>1 Stars</Text>
            <Stroke>
              <Fill style={{ width: `${star1}%` }}></Fill>
            </Stroke>
          </Item>
        </RatingWrapper>
      </Rating>
      <StarsSection>
        <ReviewPrecentage>
     
          {props.product.reviews && <b>{((props.product.reviews.filter(r=>r.rate>=3.5).length / props.product.reviews.length)*100).toFixed(0)}% of users love this product</b>}
          {/* <Link to='/write-review'><WriteReviewsMobile>Write your review</WriteReviewsMobile></Link> */}
          <WriteReviews onClick={() => props.setModalShow(!props.modalShow)}>Rate This Product</WriteReviews>
        </ReviewPrecentage>
      </StarsSection>
      <PopupReview show={props.modalShow} style={{ width: '80%', height: '30%', textAlign: 'center' }}>
        <WriteReview modalShow={props.modalShow} setModalShow={props.setModalShow} signInFirst={signInFirst} setSignInFirst={setSignInFirst} />
      </PopupReview>
      {
        signInFirst ? <MyToast
        onClose={() => setSignInFirst(false)}
        show={signInFirst}
        delay={3000}
        autohide
      >
        <MyToast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">
            Authentication Issue
          </strong>
          <small>1 sec ago</small>
        </MyToast.Header>
        <MyToast.Body>
          You need to be loged in first
        </MyToast.Body>
      </MyToast> : null
      }
    </ReviewWrapper>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps)(Review);
