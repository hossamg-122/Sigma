import React, { Component } from 'react';
import { connect } from "react-redux";
import { faTwitter, faFacebookF, faInstagram, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, HeaderIconStyle } from './Style';
import { Link } from "react-router-dom";

import {GET_COMM_DATA} from "../../app/Actions/index";

class HeaderIcon extends Component {
  componentDidMount(){
    this.props.GET_COMM_DATA();
  }
  render() {
    return (
      <HeaderIconStyle>
      {this.props.gstate.commData.commData.Facebook ? <Facebook>
         <a target="_blank" href={this.props.gstate.commData.commData.Facebook} ><FontAwesomeIcon icon={faFacebookF} /></a>
      </Facebook>:null}
      {this.props.gstate.commData.commData.Twitter ?<Twitter>
         <a target="_blank" href={this.props.gstate.commData.commData.Twitter}> <FontAwesomeIcon icon={faTwitter} /></a>
      </Twitter>:null}
      {this.props.gstate.commData.commData.Instagram ?<Instagram>
         <a  target="_blank" href={this.props.gstate.commData.commData.Instagram}> <FontAwesomeIcon icon={faInstagram} /></a>
      </Instagram>:null}
      {this.props.gstate.commData.commData.Youtube ?<Youtube>
        <a  target="_blank" href={this.props.gstate.commData.commData.Youtube} > <FontAwesomeIcon icon={faYoutube} /></a>
      </Youtube>:null}
      {this.props.gstate.commData.commData.Linkedin ?<Linkedin>
         <a  target="_blank" href={this.props.gstate.commData.commData.Linkedin} > <FontAwesomeIcon icon={faLinkedinIn} /></a>
      </Linkedin>:null}
    </HeaderIconStyle>
    );
  }
}


const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {GET_COMM_DATA})(HeaderIcon);
