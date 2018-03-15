import * as types from "./actionTypes";

function showNotification(text) {
  return { type: types.SHOW_NOTIFICATION, text };
}
function hideNotification() {
  return { type: types.HIDE_NOTIFICATION };
}

export function showNotificationWithTimeout(text) {
  return function(dispatch, getState) {
    
    return new Promise(function(resolve, reject) {
      dispatch(showNotification(text));

      setTimeout(() => {
        dispatch(hideNotification());
        resolve();
      }, 2000);
    });

  };
}
