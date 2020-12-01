
const initialState = {
  data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA': {
      return { data: action.data };
    }
    default:
      return state;
  }
}
