import React, { useState, useEffect } from "react";
import countryTelephoneCode, {countries} from "country-telephone-code";
import Item from "./Item";
import {
  Items,
  OrderForm,
  PlaceOrderCartStyle,
  InputTitle,
  FormInputItem,
  FormSelectItem,
  Input,
  Row,
  Select,
  Option,
  ArrowContainer,
  SelectContainer,
  NoOrders,
} from "./style";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  GET_ALL_PRODUCTS_IN_CART,
  PLACE_ORDER,
  GET_PRODUCT_BY_ID,
  UPDATE_QTY,
  ADD_LOCATION,
  GET_CLIENT_LOCATIONS,
  REMOVE_PRODUCT_FROM_CART,
  GET_ALL_CARDS,
  NOTIFY,
} from "../../app/Actions/index";
import { connect } from "react-redux";
import AlgoliaPlaces from "algolia-places-react";

const PlaceOrderCart = (props) => {
  const [orderItems, setorderItems] = useState([]);
  const [adressesFormDisplay, setAdressesFormDisplay] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      props.GET_ALL_PRODUCTS_IN_CART(props.gstate.clientInfo.clientInfo.id);
      props.GET_ALL_CARDS(props.gstate.clientInfo.clientInfo.id);
    }
  }, [props.gstate.clientInfo.clientInfo.id]);
  useEffect(() => {
    if (props.gstate.clientInfo.clientInfo.id) {
      props.GET_CLIENT_LOCATIONS(props.gstate.clientInfo.clientInfo.id);
    }
  }, [props.gstate.clientInfo.clientInfo.id]);
  useEffect(() => {
    props.gstate.getAllProductsInCart.productsInCart &&
      setorderItems(
        props.gstate.getAllProductsInCart.productsInCart.filter(
          (product) =>
            product.productId !==
            window.localStorage.getItem(`${product.productId}`)
        )
      );
  }, [props.gstate.getAllProductsInCart.productsInCart]);

  const add = (id) => {
    if (props.gstate.getAllProductsInCart.productsInCart) {
      const product = props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === id
      );

      product[0].quantity + 1 > product[0].numberOfProductInStock
        ? alert("not enough products in store")
        : props.UPDATE_QTY(
            props.gstate.clientInfo.clientInfo.id,
            product[0].cartProductId,
            product[0].quantity + 1
          );
    }
  };
  const sup = (id) => {
    if (props.gstate.getAllProductsInCart.productsInCart) {
      const product = props.gstate.getAllProductsInCart.productsInCart.filter(
        (product) => product.productId === id
      );
      product[0].quantity - 1
        ? props.UPDATE_QTY(
            props.gstate.clientInfo.clientInfo.id,
            product[0].cartProductId,
            product[0].quantity - 1
          )
        : props.REMOVE_PRODUCT_FROM_CART(
            props.gstate.clientInfo.clientInfo.id,
            product[0].cartProductId
          );
    }
  };
  const [form, setForm] = useState({
    phone: "",
    zipCode: "",
    home: "",
    street: "",
    state: "",
  });
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [zip, setzip] = useState("");
  const [state, setstate] = useState("");
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleCityChange = (e) => {
    console.log(e);
    setcity(e.suggestion.name);
    setcountry(e.suggestion.country);
    document.getElementById("country").value = e.suggestion.country;
    if (e.suggestion.administrative) {
      setstate(e.suggestion.administrative);
      document.getElementById("state").value = e.suggestion.administrative;
    }
    if (e.suggestion.postcode) {
      setzip(e.suggestion.postcode);
      document.getElementById("zipCode").value = e.suggestion.postcode;
    }
    if(e.suggestion.countryCode){
      console.log(e.suggestion.countryCode.toUpperCase())
      console.log(countryTelephoneCode(e.suggestion.countryCode.toUpperCase()) );
      document.getElementById("phone").value = countryTelephoneCode(e.suggestion.countryCode.toUpperCase());
    }
  };

  const handleCountryChange = (e) => {
    console.log(e);
    e.suggestion? setcountry(e.suggestion.value) : setcountry(e.target.value);
  };
  // const nameValidation = /^[a-zA-Z]+$/;
  const phoneValidation = /^[0-9]+$/;

  const handleValidation = () => {
    if (!phoneValidation.test(form.phone)) {
      props.NOTIFY({ title: "Notification", body: "Invalid data",  kind:"error" });
      return false;
    } else if (zip.length < 3 || zip.length > 8) {
      props.NOTIFY({ title: "Notification", body: "Invalid ZIP Code",  kind:"error" });
      return false;
    } else if (
      form.phone === "" ||
      zip === "" ||
      city === "" ||
      form.home === "" ||
      state === "" ||
      form.street === "" ||
      country === ""
    ) {
      props.NOTIFY({ title: "Notification", body: "please fill all feilds" ,  kind:"error"});
      return false;
    } else {
      return true;
    }
  };

  const onSumbitSuccess = () => {
    props.NOTIFY({ title: "Notification", body: "Order placed successfully",  kind:"success" });
    props.history.push(`/pay`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!adressesFormDisplay && address != null) {
      props.PLACE_ORDER(
        {
          ClientId: props.gstate.clientInfo.clientInfo.id,
          LocationId: window.localStorage.getItem("locationId"),
          Notes: null,
          AdditionalMobile: null,
          Fees: 0,
          ProductQuentity: orderItems,
        },
        onSumbitSuccess
      );
    } else if (handleValidation()) {
      props.ADD_LOCATION({
        Address: form.home,
        City: city,
        ClientId: props.gstate.clientInfo.clientInfo.id,
        Latitude: "10.557685",
        Longitude: "13.707504",
        Country: country,
        State: state,
        Street: form.street,
      });
    }
  };

  const onAdressSelect = (e) => {
    if (e.target.value === "add") {
      setAdressesFormDisplay(true);
    } else {
      setAddress(e.target.value);
      window.localStorage.setItem("locationId", e.target.value);
    }
  };
  return orderItems.length ? (
    <PlaceOrderCartStyle>
      <Items>
        {orderItems.length > 0 &&
          orderItems.map((item) => (
            <Item key={item.productId} item={item} add={add} sup={sup} />
          ))}
      </Items>
      {/* <OrderSummery>
        <ItemPrice>
          Items price: &nbsp;
          <span>
          £{orderItems.length > 0 &&
              orderItems.reduce(
                (sum, item) => item.price * item.quantity + sum,
                0
              )}
          </span>
        </ItemPrice>
        <ItemPrice>
          Total VAT : &nbsp;
          <span>
          £{orderItems.length > 0 &&
              orderItems.reduce(
                (sum, item) => item.vat * item.quantity + sum,
                0
              )}
          </span>
        </ItemPrice>
      </OrderSummery> */}

      <OrderForm onSubmit={handleSubmit} autocomplete="off">
        <FormSelectItem>
          <InputTitle> Your Addresses </InputTitle>
          <SelectContainer>
            <Select
              id="adresses"
              required
              onChange={(e) => {
                onAdressSelect(e);
              }}
            >
              <Option disabled selected>
                Select Or Create An Address
              </Option>
              {props.gstate.clientLocations.locations[0]
                ? props.gstate.clientLocations.locations.map((location) => {
                    return (
                      <Option onSelect value={location.id}>
                        {`${location.address} ${location.street} st - ${location.city} - ${location.state} - ${location.country}`}
                      </Option>
                    );
                  })
                : null}
              <Option value="add">Add Location</Option>
            </Select>
            <ArrowContainer>
              <FontAwesomeIcon icon={faChevronDown} />
            </ArrowContainer>
          </SelectContainer>
        </FormSelectItem>
        {adressesFormDisplay && (
          <div>
            <Row></Row>
            <Row>
              <FormInputItem>
                <InputTitle>Home / Flat</InputTitle>
                <Input
                  placeholder="Home / Flat"
                  autocomplete="off"
                  type="text"
                  id="home"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </FormInputItem>
              <FormInputItem>
                <InputTitle>Street Name</InputTitle>
                <Input
                  placeholder="street name"
                  autocomplete="off"
                  type="text"
                  id="street"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </FormInputItem>
            </Row>
            <Row>
              <FormInputItem>
                <InputTitle>City</InputTitle>
                <AlgoliaPlaces
                  placeholder="City"
                  id="city"
                  onChange={(e) => handleCityChange(e)}
                  required
                  options={{
                    appId: "plBBQSP8FUFL",
                    apiKey: "232b735e7fe42041159479a8a6307b91",
                    language: "sv",
                    type: "city",
                  }}
                />
              </FormInputItem>
              <FormInputItem>
                <InputTitle>County / State</InputTitle>
                <Input
                  placeholder="County / State"
                  autocomplete="off"
                  type="text"
                  id="state"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </FormInputItem>
            </Row>
            <Row>
              <FormInputItem>
                <InputTitle>Country</InputTitle>
                <Input
                  placeholder="Country"
                  id="country"
                  onChange={(e) => handleCountryChange(e)}
                  required
                />
              </FormInputItem>
              <FormInputItem>
                <InputTitle>ZIP Code/Postal Code</InputTitle>
                <Input
                  placeholder="ZIP Code/Postal Code"
                  autocomplete="off"
                  type="text"
                  inputmode="numeric"
                  id="zipCode"
                  required
                  value={zip}
                  onChange={(e) => handleChange(e)}
                />
              </FormInputItem>
            </Row>
            <FormInputItem>
              <InputTitle>Phone</InputTitle>
              <Input
                placeholder="Phone"
                autocomplete="off"
                type="text"
                id="phone"
                onChange={(e) => handleChange(e)}
                required
              />
            </FormInputItem>
          </div>
        )}
        <Button
          text="Check Out"
          // the following logic is to make cumulative summation of each item price and vat [using Array.reduce JS built in function]
          total={Math.ceil(
            orderItems.reduce((sum, product) => {
              window.localStorage.setItem(
                "totalPrice",
                Math.ceil(
                  // the following logic is to make cumulative summation of each item price and vat [using Array.reduce JS built in function]
                  orderItems.reduce(
                    (sum, product) =>
                      sum +
                      product.price * product.quantity +
                      product.vat * product.quantity,
                    0
                  )
                )
              );
              return (
                sum +
                product.price * product.quantity +
                product.vat * product.quantity
              );
            }, 0)
          )}
          type="submit"
        />
      </OrderForm>
    </PlaceOrderCartStyle>
  ) : (
    <PlaceOrderCartStyle>
      <NoOrders>
        Your Cart Is Empty Or All Bookmarked, So No Order To Make.
      </NoOrders>
    </PlaceOrderCartStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  GET_ALL_PRODUCTS_IN_CART,
  PLACE_ORDER,
  GET_PRODUCT_BY_ID,
  UPDATE_QTY,
  ADD_LOCATION,
  REMOVE_PRODUCT_FROM_CART,
  GET_CLIENT_LOCATIONS,
  GET_ALL_CARDS,
  NOTIFY,
})(PlaceOrderCart);
