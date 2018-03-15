import * as types from "./actionTypes";
import loginApi from "../api/loginApi";

function loginUserStart() {
  return { type: types.LOGIN_USER_START };
}
function loginUserSuccess() {
  return { type: types.LOGIN_USER_SUCCESS };
}
function loginUserError(err) {
  return { type: types.LOGIN_USER_ERROR, err };
}

export function loginUser(login, password) {
  return function(dispatch, getState) {
    dispatch(loginUserStart());
    let apiCall = loginApi.login(login, password);
    apiCall.then(() => {
      dispatch(loginUserSuccess());
    }).catch((err) => {
      dispatch(loginUserError(err));
    });
    return apiCall;
  };
}
