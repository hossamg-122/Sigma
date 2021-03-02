import React, { Component } from 'react';
import { connect } from "react-redux";
import { OrderSummaryStyle, H3, P } from "./style";

class info extends Component {
  
  About = <p>
  <br/>Sigma Medical supplies Ltd based in the United Kingdom is an effective healthcare distribution company, which specializes, in cost-effective nursing, medical supplies and 
  <br/>medical equipment to the healthcare market sector. 
  <br/>Excellence leading medical supply company with outstanding liability customer service 
  <br/>for many clinics, hospitals and GP's across the UK.
  <br/>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. 
  <br/><br/>Sincerely, 
  <br/>Nawar Kadhim 
  <br/>General Director
  </p>

Returns = <p>
 <br/>We hope that you will be delighted with your purchase from Sigmamedicalsupplies.co.uk, but we understand that sometimes there may be a reason that
 <br/>you would like to return an item you have purchased to us. We aim to make this process as simple as possible.

 <br/><br/>You have 14 days from the date of receiving your product to inform us of your wish to return an item. This timescale is strictly 14 days. We are unable to
 <br/>accept returns outside of 14 days unless faulty. Items outside of 14 days from date of receipt cannot be exchanged or refunded.
 <br/>Please​​​​ view our full terms and conditions for further details.
</p>

Terms = <p>
 <br/>SigmaMedicalSupplies.co.uk is an online retailer of medical supplies and medical equipment. 
 <br/>SigmaMedicalSupplies.co.uk
 <br/>52A Waverley Road, St. Albans, AL3 5PE, United Kingdom
 <br/><br/>Registration Details:
 <br/>o    Company registration number: 11917538
 <br/>o    Registered in England and Wales
 
</p>
  render() {
    window.scrollTo(0, 0);
    return (
      <OrderSummaryStyle>
      <H3>{this.props.match.params.data}</H3>
      <P> {this.props.match.params.data==="About Us"? this.About:null}</P>
      <P> {this.props.match.params.data==="Returns Policies"? this.Returns:null}</P>
      <P> {this.props.match.params.data==="Terms and conditions"? this.Terms:null}</P>
    </OrderSummaryStyle>
     
    );
  }
}

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps)(info);
