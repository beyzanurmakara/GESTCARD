import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';

let windowSize = Dimensions.get('window');
const width = windowSize.width;

const CustomBack = props => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('profile') }}>
			<Image
				source={require('../../Images/back.png')}
				resizeMode='contain'
				style={styles.image}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20
	},
	image: {
		width: 20,
		height: 20,
		tintColor: 'white',
	}
})


export default CustomBack;
