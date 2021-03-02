import React, { useState } from "react";
import { ItemPrice } from "../Cart/style";
import { OrderStyle, Date, IconContainer, OrdersContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Order = ({ order }) => {

  const [track] = useState(true);
  return (
    <OrderStyle>
      <Date>
        <p>{order.date.replace("T", " - ").slice(0,order.date.lastIndexOf(":")+2) }</p>
      </Date>
      <OrdersContainer>
        <ItemPrice>
          Order Number : &nbsp;<span>{order.orderNumber}</span>
        </ItemPrice>
        {/* <ItemPrice>
          Payment Method : &nbsp; <span>{order.payment}</span>
        </ItemPrice> */}
        <ItemPrice >
          Order Price : &nbsp;<span>£{order.total.toFixed(2)}</span>
        </ItemPrice>
      </OrdersContainer>
      {track && (
        <IconContainer>
          {/* <Link to={`/order-tracking/$order.orderId`}> */}
          <Link to={`/order-tracking/${order.orderId}/${order.orderNumber}`}>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </Link>
        </IconContainer>
      )}
    </OrderStyle>
  );
};

export default Order
