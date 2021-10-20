import { createStore, combineReducers } from "redux";
import { itemReducer } from "./ItemRedux";
import { messageReducer } from "./PopupRedux";

const rootReducer = combineReducers({
	ItemState: itemReducer,
	popup: messageReducer,
});

export default () => {
	let store = createStore(rootReducer);
	return { store };
}