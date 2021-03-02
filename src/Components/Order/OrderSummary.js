import React, { useEffect } from "react";
import Order from "./Order";
import { OrderSummaryStyle, H3, P, H2 } from "./style";
import { Get_ALL_ORDERS } from "../../app/Actions/index";
import { connect } from "react-redux";

const OrderSummary = (props) => {
  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      props.Get_ALL_ORDERS(props.gstate.clientInfo.clientInfo.id);
    }
  }, [props.gstate.clientInfo.clientInfo.id]);

  return props.gstate.getAllOrders.orders &&
    props.gstate.getAllOrders.orders.prods ? (
    <OrderSummaryStyle>
      <H2>My Orders</H2>
      {props.gstate.getAllOrders.orders.prods.map((order) => (
        <Order order={order} key={order.orderId} />
      ))}
    </OrderSummaryStyle>
  ) : (
    <OrderSummaryStyle>
      <H3>Orders</H3>
      <P>You haven't ordered anything yet</P>
    </OrderSummaryStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { Get_ALL_ORDERS })(OrderSummary);
