import CartReducer from './cart.js';
import MenuReducer from './menu.js';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cart: CartReducer,
  menu: MenuReducer,
})
 
export default RootReducer;