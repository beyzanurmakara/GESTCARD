//Initial State
const INITIAL_STATE = {
	item: [],
};

// Action Types
const ADD_ITEM = "item/add_item";

//Action Creators
export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: {
			item,
		}
	}
}

//Selectors
export const itemSelector = state => state.ItemState.item;

//Reducer
export const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			let newItem = action.payload.item;
			return {
				item: newItem,
			}
		default:
			return state;
	}
};
