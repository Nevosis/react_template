import * as types from "../actions/actionTypes";

const initialState = {
  message:""
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return { ...state, message: action.text };
    case types.HIDE_NOTIFICATION:
      return { ...state, message: "" };
    default:
      return state;
  }
};

export default appReducer;
