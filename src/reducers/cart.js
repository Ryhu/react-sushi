
const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_CART': {
      return { data: action.data };
    }
    default:
      return state;
  }
}
