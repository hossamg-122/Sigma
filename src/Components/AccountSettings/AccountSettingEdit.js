import React, { useEffect } from "react";
import { useState } from "react";
import {
  AccountWrapper,
  InputSection,
  Label,
  Line,
  Form,
  Password,
  EyeIcon,
  Row,
  Input,
  P,
} from "./Style";
import Button from "../Button/Button";
import CreditCardEdit from "./CreditCardEdit";
import { UPDATE_USER_INFO } from "../../app/Actions/index";
import { connect } from "react-redux";

const AccountSettingEdit = (props) => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  // Zip.value.length != 5
  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      setForm({
        ...form,
        fName: props.gstate.clientInfo.clientInfo.info.name.substr(
          0,
          props.gstate.clientInfo.clientInfo.info.name.indexOf(" ")
        ),
        lName: props.gstate.clientInfo.clientInfo.info.name.substr(
          props.gstate.clientInfo.clientInfo.info.name.indexOf(" ") + 1
        ),
        phone: props.gstate.clientInfo.clientInfo.info.mobile,
        email: props.gstate.clientInfo.clientInfo.info.email,
      });
    }
  }, [props.gstate.clientInfo.clientInfo]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const nameVlidation = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const handleValidation = () => {
    if (
      !nameVlidation.test(form.fName) ||
      form.fName === "" ||
      form.fName === null
    )
      return false;
    if (
      !nameVlidation.test(form.lName) ||
      form.lName === "" ||
      form.lName === null
    )
      return false;
    if (
      form.email.indexOf("@") < 1 ||
      form.email.lastIndexOf(".") - form.email.indexOf("@") < 2
    )
      return false;
    if (form.newPassword !== form.confirmNewPassword || form.newPassword === null || form.newPassword === "") return false;

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      props.UPDATE_USER_INFO(props.gstate.clientInfo.clientInfo.id, {
        id: props.gstate.clientInfo.clientInfo.id,
        name: `${form.fName} ${form.lName}`,
        mobile: form.phone,
        email: form.email,
        password: form.newPassword,
      });
    }
  };

  return (
    <AccountWrapper>
      {props.location.pathname === "/accountsettingedit" ? (
        props.gstate.clientInfo.clientInfo.id ? (
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <InputSection>
                <Label>
                  <b>Fisrt Name</b>
                </Label>
                <Input
                  required
                  placeholder="Fisrt Name"
                  type="text"
                  value={form.fName}
                  id="fName"
                  onChange={(e) => handleChange(e)}
                />
              </InputSection>
              <InputSection>
                <Label>
                  <b>Last Name</b>
                </Label>
                <Input
                  required
                  placeholder="Last Name"
                  type="text"
                  value={form.lName}
                  id="lName"
                  onChange={(e) => handleChange(e)}
                />
              </InputSection>
            </Row>
            <Row>
              <InputSection>
                <Label>
                  <b>Email</b>
                </Label>
                <Input
                  required
                  placeholder="Email"
                  type="text"
                  value={form.email}
                  id="email"
                  onChange={(e) => handleChange(e)}
                />
              </InputSection>
              <InputSection>
                <Label>
                  <b>Phone Number</b>
                </Label>
                <Input
                  required
                  placeholder="Mobile Number"
                  type="text"
                  value={form.phone}
                  id="phone"
                  onChange={(e) => handleChange(e)}
                />
              </InputSection>
            </Row>
            <Line />
            <InputSection>
              <Label>
                <b>Current Password</b>
              </Label>
              <Password>
                <EyeIcon src="eye.svg" />
                <Input
                  required
                  placeholder="Current Password"
                  style={{ width: "100%" }}
                  id="password"
                  onChange={(e) => handleChange(e)}
                />
              </Password>
            </InputSection>
            <InputSection>
              <Label>
                <b>New Password</b>
              </Label>
              <Password>
                <EyeIcon src="eye.svg" />
                <Input
                  required
                  placeholder="New Password"
                  style={{ width: "100%" }}
                  id="newPassword"
                  onChange={(e) => handleChange(e)}
                />
              </Password>
            </InputSection>
            <InputSection>
              <Label>
                <b>Confirm New Password</b>
              </Label>
              <Password>
                <EyeIcon src="eye.svg" />
                <Input
                  required
                  placeholder="Confirm New Password"
                  style={{ width: "100%" }}
                  id="confirmNewPassword"
                  onChange={(e) => handleChange(e)}
                />
              </Password>
            </InputSection>
            <Button text="  Save  " handleFunction={(e) => handleSubmit(e)} style={{margin:"50px auto"}} />
          </Form>
        ) : (
          <AccountWrapper>
            <P>You Need To Sign In First</P>
          </AccountWrapper>
        )
      ) : null}
      {props.location.pathname === "/creditedit" ? <CreditCardEdit /> : null}
    </AccountWrapper>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};
export default connect(mapStateToProps, { UPDATE_USER_INFO })(
  AccountSettingEdit
);
// 6/8/2020 React
// 1. order summary data.
// 2. edit account form validation.
// 2. edit card form validation.
// 3. account img update API.