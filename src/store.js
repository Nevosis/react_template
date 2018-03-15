import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

import {loggerMiddleware} from "./middlewares"

// DEVTOOL FOR REDUX !
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(loggerMiddleware, thunk));
export default store;
