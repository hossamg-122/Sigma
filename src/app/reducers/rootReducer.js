import { combineReducers } from "redux";
import prodsFeed from "./prodsFeed";
import labeledProds from "./labeledProds";
import sliderProds from "./sliderProds";
import getProductById from "./getproductbyID";
import getCategories from "./getCategories";
import getSubcategoriesById from "./getSubcategoriesById";
import clientInfo from "./clientInfo";
import getAllOrders from "./getAllOrders";
import getOrderTracking from "./getOrderTracking";
import getAllProductsInCart from "./getAllProductsInCart";
import getOrderItem from "./getOrderItem";
import getAllCards from "./getAllCards";
import updateUserInfo from "./updateUserInfo";
import catProds from './catProds';
import clientLocations from "./clientLocations";
import commData from './commData';
import chatUser from './chatUser';
import groups from './groups';
import allProds from './allProds';
import notify from './notify';



export default combineReducers({
  prodsFeed,
  labeledProds,
  getCategories,
  getSubcategoriesById,
  sliderProds,
  getProductById,
  clientInfo,
  getAllOrders,
  getOrderTracking,
  getAllProductsInCart,
  getOrderItem,
  getAllCards,
  updateUserInfo,
  catProds,
  clientLocations,
  commData,
  chatUser,
  groups,
  allProds,
  notify
});
