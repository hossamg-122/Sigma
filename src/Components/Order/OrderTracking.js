import React, { useEffect } from "react";
import OrderItem from "./OrderItem";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Get_ORDER_TRACKING, GET_ORDER_ITEMS } from "../../app/Actions/index";


const OrderTracking = (props) => {
  useEffect(() => {
    props.Get_ORDER_TRACKING(props.match.params.orderId);
    props.GET_ORDER_ITEMS(props.match.params.orderId)
  }, []);

  return (
    <div style={{ margin: "50px" }}>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h3>Order Details</h3>
        <span>order number : {props.match.params.orderNumber}</span>
      </div>
      <div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
        <Timeline style={{width:"100%"}} >
          {props.gstate.getOrderTracking.orderTracking.prods && props.gstate.getOrderTracking.orderTracking.prods.map((step)=>{
            return (
              <TimelineEvent
              style={{overflow:"visible"}}
              iconStyle={{ color: "#AA2C4A" }}
              bubbleStyle={{
              background: "rgb(244 250 255)",
              border: "2px solid #aa2c4a",
              }}
            title={<h5>{step.statue}</h5>}
            createdAt={step.date.replace("T", " - ").slice(0,step.date.lastIndexOf(":")+2)}
            icon={<FontAwesomeIcon icon={faHeartbeat} />}
            style={{ width:"100%" }}
          >
            {/* I received the payment for $543. Should be shipping the item within a couple of hours. */}
          </TimelineEvent>
            )
          })}
          
      
        </Timeline>
      </div>


      <div style={{ width: "100%", margin: "1% 1%", display:"inline-block" }}>
        <h3 style={{textAlign:"center", margin:"5% auto"}}>Order Items </h3>
          {props.gstate.getOrderItem.orderItems.prods? props.gstate.getOrderItem.orderItems.prods.map((order)=>{
            return (
              <OrderItem item={order} paymentDetails={true} />
            // <>
            // <p>{order.productName} ----  QTY : {order.productQuantity}</p>
            // <img src={order.productImage}></img>
            // </>
            )
          }) 
          :
          null
          }
      </div>

    
      
      <div style={{display:"inline-block", width :"60%", margin:"1%"}}>{null}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { Get_ORDER_TRACKING, GET_ORDER_ITEMS })(OrderTracking);
