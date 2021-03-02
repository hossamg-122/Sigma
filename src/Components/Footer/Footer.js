import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GET_COMM_DATA, NEWS_SUBSCRIBE, NOTIFY } from "../../app/Actions/index";
import {
  FooterStyle,
  FooterInfo,
  FooterContent,
  FooterHeader,
  FooterSubHeader,
  FooterData,
  SocialData,
  SubscribeInput,
  DotIcon,
  DownArrow,
  Subscribe,
  SendIcon,
  Line,
  MobileOnly,
  Copyright
} from "./Style";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  HeaderIconStyle,
} from "./Style";
import "../index.css";
import newsIcon from "./sendbutton.svg";
import DownArrowImg from '../../media/downArrow.svg'
import AcceptPayment from "./AcceptPayment";
const Footer = (props) => {
  const [showAccountData, setShowAccountData] = useState(false);
  const [showLinkData, setShowLinkData] = useState(false);
  const [showOtherData, setShowOtherData] = useState(false);

  const [email, setEmail] = useState("");
  useEffect(() => {
    props.GET_COMM_DATA();
  }, []);

  const emailSubscribe = () => {
    const email_form = /\S+@\S+\.\S+/;
    const success = () => {
      setEmail("");
     
      props.NOTIFY({title:"Newsletter", body: "subscibed to newsletter successfully",  kind:"success"});
    };
    const failure = (message) => {
      props.NOTIFY({title:"Newsletter", body: message,  kind:"error"});
    };
    if (email.match(email_form)) {
      props.NEWS_SUBSCRIBE(email, success, failure);
    } else {
      
      props.NOTIFY({title:"Newsletter", body: "Invalid Email Address",  kind:"error"});
    }
  };

  return (
    <FooterStyle>
      <FooterContent>
        <FooterInfo>
          <FooterHeader>
            <b>Contact Information</b>
          </FooterHeader>
          <FooterSubHeader>Address :</FooterSubHeader>
          <FooterData>{props.gstate.commData.commData.Address}</FooterData>
          <FooterSubHeader>Phone :</FooterSubHeader>
          <FooterData>
            <a href={`tel:${props.gstate.commData.commData.Mobile}`}>{props.gstate.commData.commData.Mobile}</a>
          </FooterData>
          <FooterSubHeader>Email :</FooterSubHeader>
          <FooterData>
            <a href={`mailto:${props.gstate.commData.commData.Email}`}>{props.gstate.commData.commData.Email}</a>
          </FooterData>
          <FooterSubHeader>Social Media :</FooterSubHeader>
          <SocialData>
          <HeaderIconStyle>
            {props.gstate.commData.commData.Facebook ? <Facebook>
              <a target="_blank" href={props.gstate.commData.commData.Facebook} ><FontAwesomeIcon icon={faFacebookF} /></a>
            </Facebook>:null}
            {props.gstate.commData.commData.Twitter ?<Twitter>
              <a target="_blank" href={props.gstate.commData.commData.Twitter}> <FontAwesomeIcon icon={faTwitter} /></a>
            </Twitter>:null}
            {props.gstate.commData.commData.Instagram ?<Instagram>
              <a  target="_blank" href={props.gstate.commData.commData.Instagram}> <FontAwesomeIcon icon={faInstagram} /></a>
            </Instagram>:null}
            {props.gstate.commData.commData.Youtube ?<Youtube>
              <a  target="_blank" href={props.gstate.commData.commData.Youtube} > <FontAwesomeIcon icon={faYoutube} /></a>
            </Youtube>:null}
            {props.gstate.commData.commData.Linkedin ?<Linkedin>
              <a  target="_blank" href={props.gstate.commData.commData.Linkedin} > <FontAwesomeIcon icon={faLinkedinIn} /></a>
            </Linkedin>:null}
          </HeaderIconStyle>
          </SocialData>
        </FooterInfo>
        {props.gstate.clientInfo.clientInfo.id ? <> <FooterInfo className="mobileView">
          <FooterHeader>
            <b>My Account</b>
          </FooterHeader>

          <Link to="/user-profile">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • Account Settings
            </FooterData>
          </Link>
          <Link to="/order-summary">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • My Orders
            </FooterData>
          </Link>
        </FooterInfo>
        </> : null}
        <FooterInfo className="mobileView">
          <FooterHeader>
            <b>Useful Links</b>
          </FooterHeader>
          <Link to="/info/About Us">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • About Us
            </FooterData>
          </Link>
          {/* <Link to='/info/delivery'><FooterData><DotIcon src={DotImg} />  Delivery-Information</FooterData></Link> */}
          <Link to="/info/Returns Policies">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • Returns Policies
            </FooterData>
          </Link>
          <Link to="/info/Terms and conditions">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • Terms and conditions{" "}
            </FooterData>
          </Link>
          {/* <Link to='/info/policy'><FooterData><DotIcon src={DotImg} />  Privacy Police</FooterData></Link> */}
          {/* <Link to='/info/export'><FooterData><DotIcon src={DotImg} />  Export Every ware</FooterData></Link> */}
        </FooterInfo>
        <FooterInfo className="mobileView">
          <FooterHeader>
            <b>Be the First to Know</b>
          </FooterHeader>
          <FooterData></FooterData>
          <Subscribe>
            <Line></Line>
            <SendIcon src={newsIcon} onClick={emailSubscribe} />
            <SubscribeInput
              type="email"
              required
              placeholder="subscribe"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Subscribe>
          <FooterSubHeader>
            <br />
            <br />
            <span style={{ textTransform: "capitalize" }}>
              for large quantities please send direct email to sales department{" "}
            </span>
          </FooterSubHeader>
          <FooterData>
            <a href={"mailto:sales@sigmamedicalsupplies.co.uk"}>sales@sigmamedicalsupplies.co.uk</a>
          </FooterData>
          <AcceptPayment />
        </FooterInfo>
        {/*Mobile View Elements*/}
        {props.gstate.clientInfo.clientInfo.id ? <>
        <FooterHeader
          className="mobileButton"
          onClick={() => setShowAccountData(!showAccountData)}
        >
          <b>My Account</b>
          <DownArrow src={DownArrowImg} />
        </FooterHeader>
        <FooterInfo
          className="mobileFooterData"
          style={{ display: !showAccountData ? "none" : "" }}
        >
          <Link to="/user-profile">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • Account Settings
            </FooterData>
          </Link>
          <Link to="/order-summary">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
              • My Orders
            </FooterData>
          </Link>
        </FooterInfo>
        </> : null
        }
        <FooterHeader
          className="mobileButton"
          onClick={() => setShowLinkData(!showLinkData)}
        >
          <b>Useful Links</b>
          <DownArrow src={DownArrowImg} />
        </FooterHeader>
        <FooterInfo
          className="mobileFooterData"
          style={{ display: !showLinkData ? "none" : "" }}
        >
          <Link to="/info/About Us" >
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
               • About Us
            </FooterData>
          </Link>
          {/* <Link to='/info/delivery'><FooterData><DotIcon src={DotImg} />  Delivery-Information</FooterData></Link> */}
          <Link to="/info/Returns Policies">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
               • Returns Policies
            </FooterData>
          </Link>
          <Link to="/info/Terms and conditions">
            <FooterData>
              {/* <DotIcon src={DotImg} /> */}
               • Terms and conditions{" "}
            </FooterData>
          </Link>
          {/* <Link to='/info/policy'><FooterData><DotIcon src={DotImg} />  Privacy Police</FooterData></Link> */}
          {/* <Link to='/info/export'><FooterData><DotIcon src={DotImg} />  Export Every ware</FooterData></Link> */}
        </FooterInfo>
        <FooterHeader
          className="mobileButton"
          onClick={() => setShowOtherData(!showOtherData)}
        >
          <b>Be the First to Know</b>
          <DownArrow src={DownArrowImg} />
        </FooterHeader>
        <FooterInfo
          className="mobileFooterData"
          style={{ display: !showOtherData ? "none" : "" }}
        >
          <FooterData></FooterData>
          <Subscribe>
            <Line></Line>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <SendIcon
                type="submit"
                src={require("./sendbutton.svg")}
                onClick={emailSubscribe}
              />
              <SubscribeInput
                type="email"
                required
                placeholder="subscribe"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </form>
          </Subscribe>
        </FooterInfo>
        <MobileOnly>
        <FooterSubHeader>
          <br />
          <br />
          <span style={{ textTransform: "capitalize" }}>
            for large quantities please send direct email to sales department{" "}
          </span>
        </FooterSubHeader>
        <FooterData>
          <a href={"mailto:sales@sigmamedicalsupplies.co.uk"}>sales@sigmamedicalsupplies.co.uk</a>
        </FooterData>
        <br/><br/>
        <AcceptPayment />
        </MobileOnly>
      </FooterContent>
      <Copyright>
      Sigma Medical Supplies Ltd © Copyrights 2020. All Rights Reserved.
      <br/>
      Crafted with love by <a href="#" >Urgent Solutions</a>
      </Copyright>
    </FooterStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_COMM_DATA, NEWS_SUBSCRIBE, NOTIFY })(
  Footer
);
