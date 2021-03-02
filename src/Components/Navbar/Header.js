import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignPopUp from "../PopUp/SignPopUp";
import SearchPopUp from "../PopUp/SearchPopUp";

import logo from "../../media/SIGMALOGO.png";
import lang from "../../media/lang.png";
import user from "../../media/us.png";
import search from "../../media/search.png";
import cart from "../../media/cart.png";
import phone from "../../media/phone.png";

import {
  HeaderStyle,
  Logo,
  ImgContainer,
  Data,
  DataItem,
  CartIconContainer,
  Number,
  P,
  DataItemTemp,
  UserContainer,
  UserImgContainer,
  UserDataContainer,
  BurgerIcon,
  UserModal,
  UserModalListItem,
  MyToast
} from "./Style";
import {
  LOCAL_SIGN_IN,
  GET_ALL_PRODUCTS_IN_CART,
  LOG_OUT,
  GET_ALL_PRODS,
  NOTIFY
} from "../../app/Actions/index";


const Header = (props) => {
  const [showSignPopUp, setShowSignPopUp] = useState(false);
  const [showSearchPopUp, setSearchSignPopUp] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    props.GET_ALL_PRODS()
    if (window.localStorage.getItem("clientInfo")) {
      props.LOCAL_SIGN_IN();
    }
  }, []);

  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      props.GET_ALL_PRODUCTS_IN_CART(props.gstate.clientInfo.clientInfo.id);
    }
  }, [props.gstate.clientInfo.clientInfo.id]);

  useEffect(()=>{
    if(props.gstate.notify.notify.title != "" && props.gstate.notify.notify.body != "") {
      setShow(true);
      
    }
  }, [props.gstate.notify.notify.counter])


  const handleClick = () => {
    setShowSignPopUp(!showSignPopUp);
  };
  const handleClick2 = () => {
    setSearchSignPopUp(!showSearchPopUp);
  };
  const [userModalDisplay, setUserModalDisplay] = useState("none");
  const userModalDisplayToggle = ()=> {
    if(userModalDisplay === "none"){
      setUserModalDisplay("block");
    }
    else{
      setUserModalDisplay("none")
    }
  }
  const logOut = () => {
    window.localStorage.clear();
    props.LOG_OUT();
    props.history.push("/")
    window.location.reload();
  }
  return (
    <HeaderStyle>
      <BurgerIcon
        onClick={() => props.setShowMenu(!props.showMenu)}
        src={require('./burgerIcon.svg')}
      />
      <Logo to="/">
        <ImgContainer>
          <img src={require('./logo.gif')} alt="" />
        </ImgContainer>
      </Logo>
      <Data>
        <DataItem>
          <img src={search} alt="" onClick={() => handleClick2()} />
        </DataItem>
        <DataItemTemp>
          <img src={lang} alt="" />
        </DataItemTemp>
        <DataItemTemp>
          <img src={phone} alt="" />
          <P>&nbsp; {props.gstate.commData.commData.Mobile}</P>
        </DataItemTemp>
        <DataItem>
          <Link to="/cart">
            <CartIconContainer>
              <img src={cart} alt="" />
            </CartIconContainer>
            <Number>
              {props.gstate.getAllProductsInCart.productsInCart.length}
            </Number>
          </Link>
        </DataItem>
        <UserContainer style={{ position: "relative" }}>
          <UserImgContainer>
            <img
              src={
                props.gstate.clientInfo.clientInfo.info
                  ? props.gstate.clientInfo.clientInfo.info.avatar
                    ? props.gstate.clientInfo.clientInfo.info.avatar
                    : user
                  : user
              }
              alt=""
            />
          </UserImgContainer>
          <UserDataContainer>
            {props.gstate.clientInfo.clientInfo.info ? (
                <>
               {/* check for very long compound name - split and render 1st two names only   */}
            <p onClick={userModalDisplayToggle} style={{fontWeight:"600"}}>&nbsp;{props.gstate.clientInfo.clientInfo.info.name.split(" ")[0]} {props.gstate.clientInfo.clientInfo.info.name.split(" ")[1]}</p>
                <UserModal onMouseLeave={userModalDisplayToggle} style={{display: userModalDisplay}}>
                  <ul style={{listStyle: "none",padding:"0px"}}>
                    <UserModalListItem><Link to="/order-summary">My Orders</Link></UserModalListItem>
                    <UserModalListItem><Link to="/user-profile">Account Setting</Link></UserModalListItem>
                    <UserModalListItem onClick={logOut}>Log Out</UserModalListItem>
                  </ul>
                </UserModal>
                </>  
            ) : (
              <p onClick={() => handleClick()} id="log">&nbsp;login</p>
            )}
          </UserDataContainer>
        </UserContainer>
      </Data>
      {showSignPopUp && <SignPopUp remove={handleClick} dissmiss={handleClick}/>}
      {showSearchPopUp &&  <SearchPopUp remove={handleClick2} dissmiss={handleClick2}/>}
      <MyToast onClose={() => setShow(false)} show={show} delay={3000} autohide  className={props.gstate.notify.notify.kind==="error"?"error":"success"}>
        <MyToast.Header className={props.gstate.notify.notify.kind==="error"?"errorHeader":"successHeader"}>
          {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
          <strong className="mr-auto">{props.gstate.notify.notify.title}</strong>
         
          <small>1 sec ago</small>
        </MyToast.Header>
            <MyToast.Body>{props.gstate.notify.notify.kind==="error"?" ❌ ":" ✔ "}{props.gstate.notify.notify.body}</MyToast.Body>
      </MyToast>
       
    </HeaderStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  LOCAL_SIGN_IN,
  GET_ALL_PRODUCTS_IN_CART,
  LOG_OUT,
  GET_ALL_PRODS,
  NOTIFY
})(Header);
