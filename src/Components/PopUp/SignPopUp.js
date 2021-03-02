import React, { useState, useImperativeHandle } from "react";
import { TabLink, Tabs, TabContent } from "react-tabs-redux";
import { connect } from "react-redux";
import { SIGN_UP, SIGN_IN, SOCIAL_SIGN_UP } from "../../app/Actions/index";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from 'react-facebook-login';import {
  SignPopUpStyle,
  Overlay,
  PopUp,
  SignForm,
  Password,
  Input,
  WithOther,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
} from "./style";
import Button from "../Button/Button";
import Eye from "../../media/eye.png";
import Apple from "../../media/apple.png";
import Facebook from "../../media/face.png";
import Google from "../../media/google.png";

const SignPopUp = (props) => {
  const [name, setName] = useState(["", ""]);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordEyeFilter, setPasswordEyeFilter] = useState("opacity(0.5)");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const facebokBtnRef = React.createRef();

  const isRegFormValid = () => {
    let isValid = false;
    let isEmailValid = false;
    let isMobileValid = false;
    const email_form = /\S+@\S+\.\S+/;
    const numbers_only_form = /^[0-9]+$/;
    if (
      name[0] !== "" &&
      name[1] !== "" &&
      email !== "" &&
      mobile !== "" &&
      password !== ""
    ) {
      isValid = true;
      if (email.match(email_form)) {
        isEmailValid = true;
      } else {
        alert("email is not correct");
      }

      if (mobile.match(numbers_only_form) && mobile.length >= 7) {
        isMobileValid = true;
      } else {
        alert("mobile is not correct");
      }
    }
    return isValid && isEmailValid && isMobileValid;
  };
  
  const dissmisPopUp = () => {
    props.dissmiss();
  }
  const signUpHandler = () => {
    var signUpFormData = {
      name: `${name[0]} ${name[1]}`,
      email: email,
      mobile: mobile,
      password: password,
    };
    if (isRegFormValid()) {
      props.SIGN_UP(signUpFormData,dissmisPopUp);
    }
  };

  const loginHandler = () => {
    var loginFormData = {
      email: loginEmail,
      password: loginPassword,
    };
    props.SIGN_IN(loginFormData,dissmisPopUp);
  };

  const googleSign = () => {
    if (!window.localStorage.getItem("clientInfo")) {
      var that = this;
      window.gapi.load("client:auth2", function () {
        window.gapi.client
          .init({
            clientId:
              "594932200960-rogelk4n79812iuoqlm0sup257m25i00.apps.googleusercontent.com",
            scope: "email",
          })
          .then(function () {
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
            });
            if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
              window.gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(() => {
                  props.SOCIAL_SIGN_UP(getGoogleUserData(),"Google", dissmisPopUp);
                });
            } else {
              props.SOCIAL_SIGN_UP(getGoogleUserData(),"Google", dissmisPopUp);
            }
          });
      });
    } else {
      // console.log("you already signed in");
    }
  };
  
  const facebookSign = (response) => {
    if (!window.localStorage.getItem("clientInfo")) {
      if(response.id){
        props.SOCIAL_SIGN_UP(getFbUserData(response), "Facebook", dissmisPopUp);
      }
     
      
    } else {
      // console.log("you already signed in");
    }
  };

  const getGoogleUserData = () => {
    var userData = {};
    userData.token = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getId();
    userData.email = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile()
      .getEmail();
    userData.name = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile()
      .getName();
    userData.avatar = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile()
      .getImageUrl();
    userData.type = "Google";
    return userData;
  };

  const getFbUserData = (fbResbonse) => {
    var userData = {};
    userData.token = fbResbonse.id;
    userData.email = fbResbonse.email;
    userData.name = fbResbonse.name;
    userData.avatar = fbResbonse.picture.data.url;
    userData.type = "Facebook";
    return userData;
  } 
  const togglePassword = () =>{
    if(passwordType==="password"){
      setPasswordType("text");
    }
    else {
      setPasswordType("password");
    }
  }

  const eyeFilter =() => {
    if (passwordEyeFilter==="none"){
      setPasswordEyeFilter("opacity(0.5)");
    }
    else{
      setPasswordEyeFilter("none");
    }
  }


  return (
    <SignPopUpStyle>
      <Overlay onClick={props.remove} />
      <PopUp>
        <Tabs>
          <TabLink to="tab1">Sign Up</TabLink>
          <TabLink to="tab2">Log In</TabLink>
          <TabContent for="tab1">
            <SignForm
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                type="text"
                required
                onChange={(e) => {
                  setName([e.target.value, name[1]]);
                }}
                value={name[0]}
                placeholder="First Name"
              />
              <Input
                type="text"
                required
                onChange={(e) => {
                  setName([name[0], e.target.value]);
                }}
                value={name[1]}
                placeholder="Last Name"
              />
              <Input
                type="phone"
                required
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                value={mobile}
                placeholder="Phone Numner"
              />
              <Input
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email"
              />

              <Password>
                <Input
                  required
                  type={passwordType}
                  
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  placeholder="Password"
                />
                {/* needs onclick */}
                <img src={Eye} style={{filter:passwordEyeFilter}} alt="" onClick={()=>{
                  togglePassword();
                  eyeFilter()
                  }} />
              </Password>
              <Button
                text="Sign Up"
                type="submit"
                handleFunction={signUpHandler}
              />
              <WithOther>
                <FacebookIcon onClick={()=>{facebokBtnRef.current.childNodes[0].childNodes[0].click()}}>
                  <img src={Facebook} alt="" />
                </FacebookIcon>
                <GoogleIcon onClick={googleSign}>
                  <img src={Google} alt="" />
                </GoogleIcon>
                <AppleIcon>
                  <img src={Apple} alt="" />
                </AppleIcon>
              </WithOther>
              <div style={{display:"none"}} ref={facebokBtnRef}>
                <FacebookLogin
                  appId="795222784552706"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={facebookSign}
                  />
              </div>
            </SignForm>
          </TabContent>
          <TabContent for="tab2">
            <SignForm
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                value={loginEmail}
                required
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
              />

              <Password>
                <Input
                  value={loginPassword}
                  required
                  onChange={(e) => {
                    setloginPassword(e.target.value);
                  }}
                  type={passwordType}
                  placeholder="Password"
                />
                {/* needs onclick */}
                <img src={Eye} alt="" style={{filter:passwordEyeFilter}} alt="" onClick={()=>{
                  togglePassword();
                  eyeFilter()
                  }} />
              </Password>
              <Button text="Log In" handleFunction={loginHandler} />
              <WithOther>
                <FacebookIcon>
                  <img src={Facebook} alt="" />
                </FacebookIcon>
                <GoogleIcon>
                  <img src={Google} alt="" />
                </GoogleIcon>
                <AppleIcon>
                  <img src={Apple} alt="" />
                </AppleIcon>
              </WithOther>
            </SignForm>
          </TabContent>
        </Tabs>
      </PopUp>
    </SignPopUpStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { SIGN_UP, SIGN_IN, SOCIAL_SIGN_UP })(
  SignPopUp
);
