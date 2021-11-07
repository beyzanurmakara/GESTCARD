import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { itemReducer } from "./ItemRedux";
import { messageReducer } from "./PopupRedux";
import { userReducer } from "./UserRedux";

const thunkMiddleware = applyMiddleware(thunk);


const rootReducer = combineReducers({
	ItemState: itemReducer,
	popup: messageReducer,
	auth:userReducer,
});

export default () => {
	let store = createStore(rootReducer, thunkMiddleware)
	return { store };
}