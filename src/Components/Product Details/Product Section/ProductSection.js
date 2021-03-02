import React, { useState, useEffect } from "react";
import Button from "../../Button/Button";
import ImageGallery from "react-image-gallery";
import "../../index.css";
import Plus from "../../../media/plus.svg";
import Minus from "../../../media/minus.svg";
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import {
  ProductImageWrapper,
  ProductName,
  ProductData,
  QTY,
  QTYIcon,
  Hint,
  HintMobile,
  Share,
  MainContainer,
  UponMainContainer,
  LeftContainer,
  RightContainer,
  QtySign,
} from "./Style";
import {
  ADD_PRODUCT_TO_CART,
  UPDATE_QTY,
  NOTIFY,
  CLEAR_CURRENT_PROD,
} from "../../../app/Actions/index";
import { connect } from "react-redux";
import { MyToast } from "../../Cart/style";

const ProductSection = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [signInFirst] = useState(false);

  const descriptionRef = React.createRef();

  const handleAddToCart = () => {
    if (props.product.stock < 1) {
      props.NOTIFY({
        title: "Notification",
        body: "this product is out of stock",
        kind:"error"
      });
    } else if (!props.gstate.clientInfo.clientInfo.id) {
      props.NOTIFY({
        title: "authentication",
        body: "You Need To Sign in First",
        kind:"error"
      });
    } else {
      let productExists = props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === props.product.id
      );
      props.gstate.clientInfo.clientInfo.id && productExists.length
        ? props.UPDATE_QTY(
            props.gstate.clientInfo.clientInfo.id,
            productExists[0].cartProductId,
            productExists[0].quantity + quantity
          )
        : props.ADD_PRODUCT_TO_CART({
            ClientId: props.gstate.clientInfo.clientInfo.id,
            Products: [{ ProductId: props.product.id, Quantity: quantity }],
            // this is for naming convension in different components
          });
      productExists = [];
      props.NOTIFY({
        title: "Added to Cart",
        body: `${props.product.info.name} has been added to your cart`,
        kind:"success"
      });
    }
  };
  const add = () => {
    props.product.stock >= quantity + 1
      ? setQuantity(quantity + 1)
      : setShow(!show);
  };
  const sup = () => {
    quantity - 1 > 0 && setQuantity(quantity - 1);
  };

  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(window.location.href);
  }, [props.product]);

  useEffect(() => {
    descriptionRef.current.innerHTML = props.product.info.description;
  });

  useEffect(() => {
    return () => {
      props.CLEAR_CURRENT_PROD();
    };
  }, []);

  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    var anything = [];

    anything.push({
      original: props.product.heroImage,
      thumbnail: props.product.heroImage,
    });
    props.product.images.map((img) => {
      anything.push({
        original: img.url,
        thumbnail: img.url,
      });
    });
    setImgs(anything);
  }, [props.product.images]);

  return (
    <>
      <UponMainContainer>
        <p style={{ color: "#AA2C4A", cursor: "pointer" }}>
          {props.product.info.category} {"⮞"} {props.product.info.subCategory}
        </p>
        {/* <ProductName>{props.product.info.name}</ProductName> */}
      </UponMainContainer>

      <MainContainer>
        <LeftContainer>
          <ProductImageWrapper>
            <ImageGallery items={imgs} />
          </ProductImageWrapper>
        </LeftContainer>
        <RightContainer>
          <ProductName>{props.product.info.name}</ProductName>
          <ProductData>
            {props.product.info.description && <> <b style={{ marginBottom: "0px" }}>Description :</b> <br/></>}
            <span ref={descriptionRef}></span>
          </ProductData>
          <ProductData style={{color:"#AA2C4A"}}>
            {props.product.info.notes && <><b>Notes :</b> <br /> </>} 
            {props.product.info.notes}
          </ProductData>
          <br></br>
          <QTY>
            <ProductData style={{ display: "inline-block" }}>
              QTY :
              <QTYIcon onClick={() => add()}>
                <QtySign src={Plus} alt="" />
              </QTYIcon>
              {quantity}
              <QTYIcon onClick={() => sup()}>
                <QtySign src={Minus} alt="" />
              </QTYIcon>
              <br />
              <br />
              {props.product.discount > 0 && (
                <>
                  <span
                    style={{ color: "grey", textDecoration: "line-through" }}
                  >
                    {`£${props.product.price.toFixed(2)} `}
                  </span>
                  &nbsp; ➔
                </>
              )}
              <b style={{ color: "#AA2C4A" }}>
                {" "}
                £ {(props.product.price - props.product.discount).toFixed(
                  2
                )}{" "}
                &nbsp; &nbsp;
                {props.product.includeVat === true ? "Incl. VAT" : "Excl. VAT"}
              </b>
              <br />
              <br />
            </ProductData>
          </QTY>
          <HintMobile>
            {props.product.stock < 1
              ? `OUT OF STOCK`
              : `${props.product.stock} Left in the stock`}
          </HintMobile>
          <Hint>
            {props.product.stock < 1
              ? `OUT OF STOCK`
              : `${props.product.stock} Left in the stock`}
          </Hint>

          <Share>
            <p>Share this product : </p>
            <div>
              
                <img
                style={{
                  display: "inline-block",
                  height: "30px",
                  margin: "0px 0px -10px 0px"
                }} 
                onClick={(e)=>{
                window.FB.ui({
                  method: 'feed',
                  link: window.location.href,
                  redirect_uri: window.location.href,
                  picture:props.product.heroImage,
                  thumbnail:props.product.heroImage,
                  name:props.product.info.name,
                  caption:props.product.info.name,
                  description :props.product.info.name
                }, function(response){});
              }} src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg"/>
              
              {/* <FacebookShareButton url={url}>
                <FacebookIcon size={32} round={true} />{" "}
              </FacebookShareButton> */}
              <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <EmailShareButton url={url}>
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
            </div>
          </Share>
        </RightContainer>
      </MainContainer>

      <Button text="Add to Cart" handleFunction={handleAddToCart} />

      <MyToast
        onClose={() => setShow(false)}
        show={show || signInFirst}
        delay={3200}
        autohide
      >
        <MyToast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">
            {props.gstate.clientInfo.clientInfo.id
              ? "Quantity Issue"
              : "Authentication Issue"}
          </strong>
          <small>1 sec ago</small>
        </MyToast.Header>
        {!props.gstate.clientInfo.clientInfo.id && (
          <MyToast.Body>You need to be logged in first</MyToast.Body>
        )}
        {props.gstate.clientInfo.clientInfo.id && (
          <MyToast.Body>{show && "Not enough products in stock"}</MyToast.Body>
        )}
      </MyToast>
    </>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  ADD_PRODUCT_TO_CART,
  UPDATE_QTY,
  NOTIFY,
  CLEAR_CURRENT_PROD,
  NOTIFY,
})(ProductSection);
