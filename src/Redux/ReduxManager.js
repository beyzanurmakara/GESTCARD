import { createStore, combineReducers } from "redux";
import { itemReducer } from "./ItemRedux";

const rootReducer = combineReducers({
	ItemState: itemReducer,
});

export default () => {
	let store = createStore(rootReducer);
	return { store };
}