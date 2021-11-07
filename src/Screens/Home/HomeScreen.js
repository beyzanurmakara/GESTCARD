import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Store from '../../Redux/Store';

const HomeScreen = props => {
	console.log('this oblect >>')
	console.log(Store.readStore());
	useEffect(() => {
		Store.readStore();
		console.log(Store.readStore());
	}, [])
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home</Text>
			{/* <Button onPress={() => navigation.navigate('Orders')} title="Go back home" /> */}
		</View>
	);
};

export default HomeScreen;
