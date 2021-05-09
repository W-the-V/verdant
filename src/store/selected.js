const SET_SELECTED = "selected/set";

export const setSelected = (item) => {
  return {
    type: SET_SELECTED,
    item,
  };
};

const initialState = { prev: null, current: null };
const selected = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SELECTED:
      newState = Object.assign({}, state, {
        prev: state.current,
        current: action.item,
      });
      return newState;
    default:
      return state;
  }
};

export default selected;
