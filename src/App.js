import React, { useState, useEffect } from "react";
import theme from "./Theme";
import { ThemeProvider } from "styled-components";

import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Navbar/MainHeader";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import CartContainer from "./Components/Cart/CartContainer";
import PlaceOrderCart from "./Components/Cart/PlaceOrderCart";
import CategoriesPage from "./Components/CategoriesPage/CategoriesPage";
import OrderSummary from "./Components/Order/OrderSummary";
import AccountSettingEdit from "./Components/AccountSettings/AccountSettingEdit";
import CreditCardEdit from "./Components/AccountSettings/CreditCardEdit";
import UserProfile from "./Components/AccountSettings/UserProfile";
import ProductDetails from "./Components/Product Details/ProductDetails";
import WriteReview from "./Components/Review/WriteReview";
import Chat from "./Components/Chat/Chat";
import VerticalMenu from "./Components/VerticalMenu/VericalMenu";
import { Backdrop } from "./Components/VerticalMenu/Style";
import OrderTracking from "./Components/Order/OrderTracking";
import VerticalMenuContent from "./Components/VerticalMenu/VerticalMenuContent";
import Products from "./Components/CategoriesPage/Products";
import Info from "./Components/info/Info";
import Pay from "./Components/Cart/Pay";

const App = (props) => {
  useEffect(() => {
    document.title = "Sigma Medical supplies Ltd";
    document.querySelector('meta[name="description"]').setAttribute("content",`Sigma Medical supplies Ltd based in the United Kingdom is an effective healthcare distribution company, which specializes, in cost-effective nursing, medical supplies and
    medical equipment to the healthcare market sector.
    Excellence leading medical supply company with outstanding liability customer service
    for many clinics, hospitals and GP's across the UK.
    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.`);
    
  },[]);
  const [showMenu, setShowMenu] = useState(false);

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="App">
          <Backdrop
            style={{
              transform: showMenu ? "translateY(0)" : "translateY(-100vh)",
              opacity: showMenu ? 1 : 0,
            }}
            onClick={() => setShowMenu(!showMenu)}
          />
          <VerticalMenu show={showMenu}>
            <VerticalMenuContent show={showMenu} setShowMenu={setShowMenu} />
          </VerticalMenu>

          <Route
            path="/"
            render={(props) => (
              <MainHeader
                {...props}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            )}
          />
          <Route path="/" component={Navbar} />
          <div style={{ minHeight: "75vh" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={CartContainer} />
              <Route path="/place-product" component={PlaceOrderCart} />
              <Route
                path="/categories/:cat/:catId/:subCat/:subCatId"
                component={CategoriesPage}
              />
              <Route path="/order-summary" component={OrderSummary} />
              <Route
                path="/accountsettingedit"
                component={AccountSettingEdit}
              />
              <Route path="/creditsettingedit" component={CreditCardEdit} />
              <Route path="/user-profile" component={UserProfile} />
              <Route path="/place-order" component={PlaceOrderCart} />
              <Route path="/product-details/:id" component={ProductDetails} />
              <Route path="/write-review" component={WriteReview} />
              <Route
                path="/order-tracking/:orderId/:orderNumber"
                component={OrderTracking}
              />
              <Route path="/all-products/:labelName" component={Products} />
              <Route path="/info/:data" component={Info} />
              <Route path="/pay" component={Pay} />
            </Switch>
          </div>

          <Chat />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
