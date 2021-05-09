const CART_ADD = "cart/add";

export const addToCart = (item) => {
  return {
    type: CART_ADD,
    item,
  };
};

const initialState = [];
const cart = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CART_ADD:
      newState = [...state, action.item];
      return newState;
    default:
      return state;
  }
};

export default cart;
