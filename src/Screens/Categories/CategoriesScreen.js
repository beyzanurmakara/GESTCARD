import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../Redux/UserRedux';

const CategoriesScreen = props => {

	const dispatch=useDispatch();
	const _onPress=()=>{
		dispatch(signInRequest('beyza', '123'))
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>
				Categories1
			</Text>
			<TouchableOpacity style={{padding:10,backgroundColor:'pink'}} onPress={_onPress}>
				<Text>
					GETİR Bİ MUTLULUK
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CategoriesScreen;
