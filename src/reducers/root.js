import CartReducer from './cart.js';
import CheckoutReducer from './checkout.js';
import MenuReducer from './menu.js';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cart: CartReducer,
  checkout: CheckoutReducer,
  menu: MenuReducer,
})
 
export default RootReducer;