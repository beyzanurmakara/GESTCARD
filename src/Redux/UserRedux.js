import API from "../API/API";
import AsyncStorage from '@react-native-community/async-storage';
import Store from "./Store";

const INITIAL_STATE = {
	user: null,
}

export const userSeleactor = state => state.auth.user;

// Action Types
const SET_USER = "user/set_user";
// Action Creators
export const setUserAC = (user) => {
	return {
		type: SET_USER,
		payload: { user },
	};
}

//thunk
export const signInRequest = (email, password) => {
	console.log('signInRequest')
	return dispatch => {
		console.log('dispatching isLoading true', email, password);

		// isLoading'i true'ya çek
		// dispatch(setIsLoadingAC(true));// yükleniyor

		// signIn isteği gönder ve gelen user'ı store'a kaydet
		//istek atılacak

		API.getUsercardList()
			.then(response => {
				console.log(response.gestCardList);
				Store.storeData(response.gestCardList);
			})// veriyi kaydet
			.catch(error => console.log(error))// veri çekilemedi

		// signIn(email, password)
		// 	.then(response => {
		// 		console.log('dispatching user');
		// 		const user = response.user;
		// 		dispatch(setUserAC(user));
		// 	})
		// 	.catch(error => console.log(error))
		// 	.finally(() => {
		// 		// isLoading'i false'a çek
		// 		console.log('dispatching isLoading false');
		// 		dispatch(setIsLoadingAC(false));
		// 	});
	}
}

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER:
			const newUser = action.payload.user;
			const lastUserEmail = newUser ? newUser.email : state.lastUserEmail;
			return {
				user: newUser,
				lastUserEmail,
			}
		default:
			return state;
	}
};
