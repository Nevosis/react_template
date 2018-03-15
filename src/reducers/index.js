import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from './loginReducer';

// Combine Reducers
const reducers = combineReducers({
	appState: appReducer,
	loginState: loginReducer
});

export default reducers;
