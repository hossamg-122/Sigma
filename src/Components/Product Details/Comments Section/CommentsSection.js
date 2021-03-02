import React from "react";
import {
  CommentWrapper,
  ReviewerInfo,
  Comment,
  ReviewerImage,
  ReviewerName,
  CommentTime,
} from "./Style";
import { Stars } from "../Review Section/Style";
import ShowMoreText from 'react-show-more-text';
import StarRatings from "react-star-ratings";
import fallbackImage from "../../../media/my-backup.png"
import { connect } from "react-redux";


const CommentsSection = (props) => {

  return (props.gstate.getProductById.product.reviews && props.gstate.getProductById.product.reviews.length)
    ? props.gstate.getProductById.product.reviews.map((review) => (
      <CommentWrapper key={review.reviewId}>
        <ReviewerInfo>
          <ReviewerImage fallbackImage={fallbackImage} src={review.userAvatarUrl} />
          <ReviewerName>
            {review.user}{" "}
            <CommentTime>{review.dateTime.replace("T", " - ").slice(0, review.dateTime.lastIndexOf(":")+2)} </CommentTime>{" "}
          </ReviewerName>
        </ReviewerInfo>
        <Comment>
          <p> <ShowMoreText
            lines={2}
            more='Show more'
            less='Show less'
            anchorClass='show-more'
            expanded={false}
            width={800}
          >
            {review.comment}
          </ShowMoreText></p>
          <Stars>
            <StarRatings
              rating={review.rate}
              starRatedColor="#ffc107"
              numberOfStars={5}
              name="rating"
              starHoverColor="#ffc107"
              starSpacing="0px"
            />
          </Stars>
        </Comment>
      </CommentWrapper>
    ))
    : null;
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps)(CommentsSection);
