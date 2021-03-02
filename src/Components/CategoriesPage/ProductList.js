import React, { useState } from "react";
import ReactStars from "react-stars";

import Heart from "../../media/heart.png";
import Star from "../../media/star.png";
import Cart from "../../media/cart2.png";
import currency from "../../media/currency.png";
import {
  Hover,
  Overlay,
  QuickList,
  HeartStyle,
  ProductTitle,
  CartStyle,
  ProductListStyle,
  StarStyle,
  ImgList,
  Content,
  Price,
  SaleBatch,
  ListSoldOutBatch,
} from "./style";
import ReactImageFallback from "react-image-fallback";
import fallbackImage from "../../media/my-backup.png";
import {
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT_TO_CART,
  UPDATE_QTY,
  REMOVE_PRODUCT_FROM_CART,
} from "../../app/Actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MyToast } from "../Cart/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import PopupReview from "../Review/PopupReview";
import WriteReview from "../Review/WriteReview";
import { Backdrop } from "../Review/style";

const ProductList = (props) => {
  const [hover, setHover] = useState(false);

  const handleAddToCart = () => {
    !props.gstate.clientInfo.clientInfo.id && setSignInFirst(!signInFirst);
    let productExists = props.gstate.getAllProductsInCart.productsInCart.filter(
      (product) => product.productId === props.product.id
    );
    productExists.length
      ? props.UPDATE_QTY(
          props.gstate.clientInfo.clientInfo.id,
          productExists[0].cartProductId,
          productExists[0].quantity + 1
        )
      : props.ADD_PRODUCT_TO_CART({
          ClientId: props.gstate.clientInfo.clientInfo.id,
          Products: [{ ProductId: props.product.id, Quantity: 1 }],
          // this is for naming convension in different components
        });
  };

  const [booked, setBooked] = useState(false);
  const [show, setShow] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const [signInFirst, setSignInFirst] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleBookMark = () => {
    props.gstate.clientInfo.clientInfo.id && setBooked(!booked);
    setShow(true);
    props.gstate.clientInfo.clientInfo.id &&
      localStorage.setItem(`${props.product.id}`, `${props.product.id}`) &&
      handleAddToCart();
  };
  const handleUnBookMark = () => {
    setBooked(!booked);
    setShow(true);
    localStorage.removeItem(`${props.product.id}`);
    props.REMOVE_PRODUCT_FROM_CART(
      props.gstate.clientInfo.clientInfo.id,
      props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === props.product.id
      )[0].cartProductId
    );
  };
  const handleAddReview = () => {
    setModalShow(!modalShow);
  };

  const prodRef = React.createRef();
  return (
    <>
      <Link
        ref={prodRef}
        style={{ display: "none" }}
        to={`/product-details/${
          props.product.productId ? props.product.productId : props.product.id
        }`}
      ></Link>
      <ProductListStyle
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={(e) => {
          e.stopPropagation();
          if (props.product.stock < 1) {
            window.localStorage.setItem("reload", "true");
            prodRef.current.click();
          }
        }}
      >
        {props.product.inSale && <SaleBatch>SALE</SaleBatch>}
        {props.product.stock < 1 && (
          <ListSoldOutBatch>OUT OF STOCK</ListSoldOutBatch>
        )}
        <ImgList>
          <ReactImageFallback
            src={props.product.heroImage}
            fallbackImage={fallbackImage}
            alt={props.product.name}
          />
        </ImgList>
        <Content>
          <ProductTitle>{props.product.name}</ProductTitle>
          <Price>
            {props.product.discount > 0 && (
              <>
                <span style={{ color: "grey", textDecoration: "line-through" }}>
                  {`£${props.product.price.toFixed(2)} `}
                </span>
                &nbsp; ➔
              </>
            )}
            {/* <img src={currency} alt="" /> */}£{" "}
            {(props.product.price - props.product.discount).toFixed(2)} &nbsp;{" "}
            <small>
              {props.product.includeVat === true ? "Incl. VAT" : "Excl. VAT"}
            </small>
          </Price>
          <div>
            <ReactStars
              className="d-inline-block align-middle"
              count={5}
              value={props.product.totalReview}
              edit={false}
              size={16}
              color={"ffc107"}
            />
            <small style={{ color: "grey", verticalAlign: "middel" }}>
              {" "}
              ({props.product.reviews})
            </small>
            &nbsp;&nbsp;
          {<span class="badge badge-danger py-1" style={{display:props.product.isFreeShipping?null:"none"}}>free shipping</span>}
          </div>
        </Content>
        {hover && props.product.stock > 0 ? (
          <Hover title={props.product.name}>
            <Link to={`/product-details/${props.product.id}`}>
              <Overlay />
            </Link>
            <QuickList>
              {booked ||
              window.localStorage.getItem(
                `${
                  props.product.id ? props.product.id : props.product.productId
                }`
              ) ? (
                <HeartStyle>
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => handleUnBookMark()}
                  />
                </HeartStyle>
              ) : (
                <HeartStyle>
                  <FontAwesomeIcon
                    icon={farHeart}
                    onClick={() => handleBookMark()}
                  />
                </HeartStyle>
              )}
              <CartStyle
                onClick={() => {
                  handleAddToCart();
                  setAddedToCart(true);
                }}
              >
                <img src={Cart} alt="" />
              </CartStyle>
              <StarStyle onClick={() => handleAddReview()}>
                <img src={Star} alt="" />
              </StarStyle>
            </QuickList>
          </Hover>
        ) : null}
        <Backdrop
          style={{
            transform: modalShow
              ? "translateY(-50%,-50%)"
              : "translateY(-50%,-50%)",
            opacity: modalShow ? 1 : 0,
            display: !modalShow ? "none" : null,
          }}
          onClick={() => setModalShow(!modalShow)}
        />
        {modalShow && (
          <PopupReview
            show={modalShow}
            style={{ width: "80%", height: "30%", textAlign: "center" }}
          >
            <WriteReview
              modalShow={modalShow}
              setModalShow={setModalShow}
              signInFirst={signInFirst}
              setSignInFirst={setSignInFirst}
              product={props.product}
            />
          </PopupReview>
        )}
        <MyToast
          onClose={() => setShow(!show) && setSignInFirst(!signInFirst)}
          show={show || signInFirst}
          delay={3200}
          autohide
        >
          <MyToast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">
              {props.product.productName
                ? "Cart"
                : "Cart"}
            </strong>
            <small>1 sec ago</small>
          </MyToast.Header>
          {!props.gstate.clientInfo.clientInfo.id && (
            <MyToast.Body>You need to be signed in first</MyToast.Body>
          )}
          {props.gstate.clientInfo.clientInfo.id && (
            <MyToast.Body>
              {props.product.productName
                ? props.product.productName
                : props.product.name}{" "}
              has been {booked ? "added to" : "removed from"} both of your cart
              and Bookmarks
            </MyToast.Body>
          )}
        </MyToast>

        <MyToast
          onClose={() => setAddedToCart(false)}
          show={addedToCart}
          delay={3000}
          autohide
        >
          <MyToast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{"Added to Cart"}</strong>
            <small>1 sec ago</small>
          </MyToast.Header>
          <MyToast.Body>
            {props.product.name} has been added to your cart.
          </MyToast.Body>
        </MyToast>
      </ProductListStyle>
    </>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT_TO_CART,
  UPDATE_QTY,
  REMOVE_PRODUCT_FROM_CART,
})(ProductList);
