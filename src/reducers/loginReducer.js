import * as types from "../actions/actionTypes";

const initialState = {
	logging: false,
	logged: false
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_USER_START:
			return { ...state, logging: true };
		case types.LOGIN_USER_SUCCESS:
			return { ...state, logging: false, logged: true };
		case types.LOGIN_USER_ERROR:
			return { ...state, logging: false };
		default:
			return state;
	}
};

export default loginReducer;
