
const initialState = {
  cart: []
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CART': {
      return { cart: action.cart };
    }
    default:
      return state;
  }
}
