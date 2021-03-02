import React, { useState } from "react";
import {
  Left,
  Right,
  Line,
  ItemContainer,
  Title,
  Img,
  H6,
  Price,
  Qty,
  ItemPrice,
} from "./orderItemsStyle";

const OrderItem = ({item, paymentDetails}) => {
  const handleBookMark = () => {
    setBooked(!booked);
    setShow(true);
    localStorage.setItem(`${item.productId}`,`${item.productId}`)
  };
  const handleUnBookMark = () => {
    setBooked(!booked);
    setShow(true);
    localStorage.removeItem(`${item.productId}`)
  };
  const [booked, setBooked] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <ItemContainer>
      <Left>
        <Img>
          <img src={item.productImage} alt={item.productName} />
        </Img>
        <Title>
          <H6>{item.productName}</H6>
          {paymentDetails && <Price>
          £{item.price.toFixed(2)}
          </Price>}
          <Price>
          {item.isFreeShipping && <span class="badge badge-danger">free shipping</span>}
          </Price>
        </Title>
      </Left>
      <Line />
      <Right>
        <Qty>
          QTY :
          {/* <Counter onClick={() => add(item.productId)}>
            <FontAwesomeIcon icon={faPlus} />
          </Counter> */}
          <span>{item.productQuantity}</span>
          {/* <Counter onClick={() => sup(item.productId)}>
            <FontAwesomeIcon icon={faMinus} />
          </Counter> */}
        </Qty>
        <ItemPrice>
          Item price: <span>£{item.price.toFixed(2)}</span>
        </ItemPrice>
        {item.vat>0 && <ItemPrice>
          VAT: <span>£{(item.vat*item.productQuantity).toFixed(2)}</span>
        </ItemPrice>}
        <ItemPrice>
          Total price: <span>£{((item.price+item.vat)*item.productQuantity).toFixed(2)}</span>
        </ItemPrice>
      </Right>

     
    </ItemContainer>
  );
};

export default OrderItem;
