
const initialState = {
  data: [],
  subtotal: 0,
};

export default function CheckoutReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHECKOUT': {
      return { ...state, data: action.data };
    }
    case 'SET_SUBTOTAL': {
      return { ...state, subtotal: action.subtotal };
    }
    default:
      return state;
  }
}
