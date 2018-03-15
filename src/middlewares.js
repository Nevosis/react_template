export const loggerMiddleware = store => next => action => {
	if (typeof action.type === "string") { // action type is function when thunk is used
		console.groupCollapsed(action.type);
		console.info("dispatching", action);
	}
	let result = next(action);
	if (typeof action.type === "string") {
		console.log("next state", store.getState());
		console.groupEnd(action.type);
	}
	return result;
};
