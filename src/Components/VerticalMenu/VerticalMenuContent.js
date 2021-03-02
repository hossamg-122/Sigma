import React, { useState } from "react";
import { connect } from "react-redux";
import ReactImageFallback from "react-image-fallback";
import {Link} from 'react-router-dom'
import { Content, Login, Span, Line, Ul, Item,SocialData,SocialIcon,IconImage} from "./Style";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, HeaderIconStyle } from './styles2';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {LOG_OUT} from '../../app/Actions/index';
import user from "../../media/us.png";
const VerticalMenuContent = (props) => {

 
  const logOut = () => {
    props.setShowMenu(!props.show);
    window.localStorage.clear();
    props.LOG_OUT();
    window.location.reload();
  }
  return (
    <Content>
      <Login>
      <ReactImageFallback
        src={props.gstate.clientInfo.clientInfo.info? props.gstate.clientInfo.clientInfo.info.avatar : user }
        fallbackImage={user}
        alt={"user avatar"}
        style={{borderRadius:"50%"}}
        width="50px"
        height="50px"
        />
       
        {
          



          props.gstate.clientInfo.clientInfo.info ? (
            <>
            <Span >&nbsp;{props.gstate.clientInfo.clientInfo.info.name}</Span>
            </>  
          ) 
          : 
          (
            <Span onClick={()=>{document.getElementById("log").click()}} style={{cursor:"pointer"}}>Login / Register</Span>
          )







        
          }
      </Login>
      <Line />
      <Ul>
        <Link onClick={()=>{props.setShowMenu(!props.show)}} to="/"><Item>&nbsp; &nbsp; &nbsp; Home</Item></Link>
        {props.gstate.clientInfo.clientInfo.info &&  <><Link onClick={()=>{props.setShowMenu(!props.show)}} to="/order-summary"><Item>&nbsp; &nbsp; &nbsp; My Orders</Item></Link>
        <Link onClick={()=>{props.setShowMenu(!props.show)}} to="/user-profile"><Item>&nbsp; &nbsp; &nbsp; Account Settings</Item></Link>
        <Link onClick={()=>{logOut()}} to="/"><Item style={{color: '#AA2C4A'}}>&nbsp; &nbsp; &nbsp; Log Out</Item></Link></>}
      </Ul>
      <div style={{display:"flex" , margin:"20% 0 0 0", justifyContent:"space-evenly"}}> 
       
       {props.gstate.commData.commData.Facebook ? 
        <Facebook>
          <a target="_blank" href={props.gstate.commData.commData.Facebook} ><FontAwesomeIcon icon={faFacebookF} /></a>
        </Facebook>:null}
       
       {props.gstate.commData.commData.Twitter ?
         <Twitter>
          <a target="_blank" href={props.gstate.commData.commData.Twitter}> <FontAwesomeIcon icon={faTwitter} /></a>
        </Twitter>:null}
        
        {props.gstate.commData.commData.Instagram ? 
        <Instagram>
          <a  target="_blank" href={props.gstate.commData.commData.Instagram}> <FontAwesomeIcon icon={faInstagram} /></a>
        </Instagram>:null}
        
        {props.gstate.commData.commData.Youtube ?
         <Youtube>
          <a  target="_blank" href={props.gstate.commData.commData.Youtube} > <FontAwesomeIcon icon={faYoutube} /></a>
        </Youtube>:null}
        
        {props.gstate.commData.commData.Linkedin ?
         <Linkedin>
          <a  target="_blank" href={props.gstate.commData.commData.Linkedin} > <FontAwesomeIcon icon={faLinkedinIn} /></a>
        </Linkedin>:null}
      </div>
      
          
    </Content>
   
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {LOG_OUT })(
  VerticalMenuContent
);

