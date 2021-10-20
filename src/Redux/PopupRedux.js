const INITIAL_STATE = {
	message: '',
}

export const messageSelector = state => state.popup.message;

const SET_MESSAGE = "popup/set_message";

export const setMessageAC = (message) => {
	return {
		type: SET_MESSAGE,
		payload: {
			message
		}
	}
}

export const messageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_MESSAGE:
			return {
				message: action.payload.message
			}

		default:
			return state;
	}

}