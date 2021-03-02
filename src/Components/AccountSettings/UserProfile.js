import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  UserImage,
  Divheader,
  IconImage,
  UserInfo,
  IconWrapper,
  ImgForm
} from "./Style";
import { GET_ALL_CARDS, UPDATE_USER_AVATAR } from "../../app/Actions/index";
import { connect } from "react-redux";

const UserProfile = (props) => {
  const [user, setUser] = useState(null);
  const [srcAttr, setSrcAttr] = useState(null);

  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      props.GET_ALL_CARDS(props.gstate.clientInfo.clientInfo.id);
      setUser(props.gstate.clientInfo.clientInfo);
      setSrcAttr(props.gstate.clientInfo.clientInfo.info.avatar);
    }
  }, [props.gstate.clientInfo.clientInfo]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setSrcAttr(URL.createObjectURL(img));
      const formData = new FormData();
      formData.append("image", e.target.files[0], e.target.files[0].name);
      props.UPDATE_USER_AVATAR(props.gstate.clientInfo.clientInfo.id, formData);
    }
  };

  const onImageUpload = async (e) => {
    e.preventDefault();
  };

  return (
    <User>
      {user && (
        <>
          <div
            style={{ position: "relative", padding: "10px", margin: "10px" }}
          >
            <UserImage src={srcAttr ? srcAttr : "my-backup.png"} />

            <ImgForm onSubmit={(e) => onImageUpload(e)}>
              <label htmlFor="name"></label>

              <IconWrapper>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e) => onImageChange(e)}
                />
                <img src="MaskGroup66.svg" alt="" />
              </IconWrapper>
            </ImgForm>
          </div>
          <UserInfo>
            <Divheader>
              <b>Account Information</b>
            </Divheader>
            <Link to="/accountsettingedit">
              <IconImage src="MaskGroup93.svg" />
            </Link>
            <p>
              <b>Full Name: </b> &nbsp; {user.info.name}
            </p>
            <p>
              <b>Email: </b> &nbsp; {user.info.email}
            </p>
            <p>
              <b>Phone Number: </b> &nbsp; {user.info.mobile}
            </p>
            <p>
              <b>Password: </b> &nbsp; *********
            </p>
          </UserInfo>
          <UserInfo>
            <Divheader>
              <b>Payment Methods</b>
            </Divheader>
            <IconImage src="MaskGroup98.svg" />
            <p>
              <b>Cash on delivery</b>
            </p>
            <Link to="/creditsettingedit">
              <IconImage
                src={
                  props.gstate.getAllCards.allUserCards
                    ? "MaskGroup93.svg"
                    : "MaskGroup97.svg"
                }
              />
            </Link>
            <p>
              <b>Cedit Card</b>
            </p>
          </UserInfo>
        </>
      )}
    </User>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_ALL_CARDS, UPDATE_USER_AVATAR })(
  UserProfile
);
