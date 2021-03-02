import React, { useEffect, useState } from "react";
import { AccountWrapper, Label, Form, Input, P } from "./Style";
import Button from "../Button/Button";
import { FormInputItem, LastRow, Row } from "../Cart/style";
import { GET_ALL_CARDS, ADD_CARD, UPDATE_CART } from "../../app/Actions/index";
import { connect } from "react-redux";

const CreditCardEdit = (props) => {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    year: "",
    month: "",
    CVV: "",
  });

  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      props.GET_ALL_CARDS(props.gstate.clientInfo.clientInfo.id);
      setForm(
        props.gstate.getAllCards.allUserCards
          ? {
              name: props.gstate.getAllCards.allUserCards.placeholder,
              cardNumber: props.gstate.getAllCards.allUserCards.number,
              year: props.gstate.getAllCards.allUserCards.year,
              month: props.gstate.getAllCards.allUserCards.month,
              CVV: props.gstate.getAllCards.allUserCards.cvv,
            }
          : form
      );
    }
  }, [props.gstate.clientInfo.clientInfo]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleEXDateChange = (e) => {
    let date = e.target.value.split("/");
    setForm({
      ...form,
      year: date[1],
      month: date[0],
    });
  };
  const normalizeYear = (year) => {
    // Century fix
    let YEARS_AHEAD = 20;
    if (year < 100) {
      let nowYear = new Date().getFullYear();
      year += Math.floor(nowYear / 100) * 100;
      if (year > nowYear + YEARS_AHEAD) {
        year -= 100;
      } else if (year <= nowYear - 100 + YEARS_AHEAD) {
        year += 100;
      }
    }
    return year;
  };
  const checkExp = () => {
    let match = `${form.month}/${form.year}`.match(
      /^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/
    );
    if (!match) {
      alert(
        "Input string isn't match the expiration date format or date fragments are invalid."
      );
      return false;
    }
    let exp = new Date(
      normalizeYear(1 * match[2]),
      1 * match[1] - 1,
      1
    ).valueOf();
    let now = new Date();
    let currMonth = new Date(now.getFullYear(), now.getMonth(), 1).valueOf();
    if (exp <= currMonth) {
      return false;
    } else {
      return true;
    }
  };

  const nameValidation = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const cardEx = /^[0-9]+$/;
  // const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  // const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  // const amexpRegEx = /^(?:3[47][0-9]{13})$/;
  // const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  const cvvValidation = /^[0-9]{3,4}$/;

  const handleValidation = () => {
    if (
      !nameValidation.test(form.name) ||
      form.name === "" ||
      form.name === null
    )
      return false;

    if (
      !cardEx.test(form.cardNumber)
      // !visaRegEx.test(form.cardNumber) ||
      // !mastercardRegEx.test(form.cardNumber) ||
      // !amexpRegEx.test(form.cardNumber) ||
      // !discovRegEx.test(form.cardNumber)
    )
      return false;
    if (!checkExp()) return false;
    if (!cvvValidation.test(form.CVV)) return false;

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // props.gstate.getAllCards.allUserCards
      //   ? props.UPDATE_CART({
      //       id: props.gstate.getAllCards.allUserCards[0].id,
      //       placeholder: form.name,
      //       number: form.cardNumber,
      //       year: form.year,
      //       month: form.month,
      //       cvv: form.CVV,
      //       clientId: props.gstate.clientInfo.clientInfo.id,
      //     })
      //   :
      props.ADD_CARD({
        placeholder: form.name,
        number: form.cardNumber,
        year: form.year,
        month: form.month,
        cvv: form.CVV,
        clientId: props.gstate.clientInfo.clientInfo.id,
      });
    }
  };
  return (
    <AccountWrapper>
      {props.gstate.clientInfo.clientInfo.id ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Row>
            <FormInputItem>
              <Label>
                <b>Card Holder Name</b>
              </Label>
              <Input
                placeholder="Full Name"
                type="text"
                value={form.name}
                id="name"
                onChange={(e) => handleChange(e)}
              />
            </FormInputItem>
            <FormInputItem>
              <Label>
                <b>Card Number</b>
              </Label>
              <Input
                type="text"
                value={form.cardNumber}
                id="cardNumber"
                placeholder="Card Number"
                onChange={(e) => handleChange(e)}
              />
            </FormInputItem>
          </Row>
          <LastRow>
            <FormInputItem>
              <Label>
                <b>Expiration Date</b>
              </Label>
              <Input
                value={form.ExDate}
                type="text"
                placeholder="mm/yy"
                onChange={(e) => handleEXDateChange(e)}
              />
            </FormInputItem>
            <FormInputItem>
              <Label>
                <b>Security code/ CVV</b>
              </Label>
              <Input
                type="text"
                placeholder="Security code/ CVV"
                value={form.CVV}
                id="CVV"
                onChange={(e) => handleChange(e)}
              />
            </FormInputItem>
          </LastRow>
          <Button text="  Save  " handleFunction={(e) => handleSubmit(e)} />
        </Form>
      ) : (
        <P>You Need To Sign In First</P>
      )}
    </AccountWrapper>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  GET_ALL_CARDS,
  ADD_CARD,
  UPDATE_CART,
})(CreditCardEdit);
