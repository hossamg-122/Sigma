import React from "react";
import { CardStyle } from "./Style";
import {  } from "../../app/Actions/index";
import { connect } from "react-redux";

const CreditCardEdit = (props) => {
  
  return (
    <CardStyle>
        
    </CardStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  
})(CreditCardEdit);
