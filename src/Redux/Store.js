import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (user) => {
	try {
		await AsyncStorage.setItem('user', JSON.stringify(user));
		console.log('kaydediliyor...')
	} catch (e) {
		// saving error
		console.log('store data error  >> ', e)
	}
}

const readStore = async () => {
	try {
		const value = await AsyncStorage.getItem('user');
		// const parsedValue = JSON.parse(value);
		// console.log('veriler >> ')
		console.log(value);
		// if (parsedValue !== null) {
		// 	this.setState({
		// 		user: {
		// 			username: parsedValue.username,
		// 			password: parsedValue.password
		// 		}
		// 	}, () => {
		// 		this.handleLogin()
		// 	})
		// }
		return value;
	} catch (e) {
		// error reading value
		console.log('dont read value >> ', e)
	}
}

export default {
	readStore,
	storeData,
}