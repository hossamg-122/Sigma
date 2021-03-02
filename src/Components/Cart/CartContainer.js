import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { CartContainerStyle, H3, P, CartsContainer, NoOrders } from "./style";
import {
  GET_ALL_PRODUCTS_IN_CART,
  UPDATE_QTY,
  REMOVE_PRODUCT_FROM_CART,
} from "../../app/Actions/index";
import Button from "../Button/Button";
import { connect } from "react-redux";

const CartContainer = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    props.gstate.clientInfo.clientInfo.id &&
      props.GET_ALL_PRODUCTS_IN_CART(props.gstate.clientInfo.clientInfo.id);
  }, [props.gstate.clientInfo.clientInfo.id]);
  useEffect(() => {
    props.gstate.getAllProductsInCart.productsInCart &&
      setCart(props.gstate.getAllProductsInCart.productsInCart);
  });

  const add = (id) => {
    if (props.gstate.getAllProductsInCart.productsInCart) {
      const product = props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === id
      );

      product[0].quantity + 1 > product[0].numberOfProductInStock
        ? alert("not enough products in store")
        : props.UPDATE_QTY(
            props.gstate.clientInfo.clientInfo.id,
            product[0].cartProductId,
            product[0].quantity + 1
          );
    }
  };
  const sup = (id) => {
    if (props.gstate.getAllProductsInCart.productsInCart) {
      const product = props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === id
      );
      product[0].quantity - 1
        ? props.UPDATE_QTY(
            props.gstate.clientInfo.clientInfo.id,
            product[0].cartProductId,
            product[0].quantity - 1
          )
        : props.REMOVE_PRODUCT_FROM_CART(
            props.gstate.clientInfo.clientInfo.id,
            product[0].cartProductId
          );
    }
  };
  const deleteProduct = (id) => {
    if (props.gstate.getAllProductsInCart.productsInCart) {
      const product = props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === id
      );
     props.REMOVE_PRODUCT_FROM_CART(props.gstate.clientInfo.clientInfo.id, product[0].cartProductId);
    }
  };

  const handleRoute = () => {
    props.history.push("/place-order");
  };

  return !props.gstate.clientInfo.clientInfo.id ? 
    (
    <NoOrders>
      You Need T o Sign In First.
    </NoOrders>
  ) : (
    cart.length ? (
      <CartContainerStyle>
        <CartsContainer>
          {cart.map((item, index) => (
            <Cart key={index} item={item} add={add} sup={sup} deleteProduct={deleteProduct} />
          ))}
        </CartsContainer>
        {/* <Link to="/place-order"> */}
        <Button text="Chechout" handleFunction={handleRoute} />
        {/* </Link> */}
      </CartContainerStyle>
    ) : (
      <CartContainerStyle>
        <H3>Shopping Cart</H3>
        <P>You have no items in your shopping cart</P>
      </CartContainerStyle>
    )
  )
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  GET_ALL_PRODUCTS_IN_CART,
  UPDATE_QTY,
  REMOVE_PRODUCT_FROM_CART,
})(CartContainer);
