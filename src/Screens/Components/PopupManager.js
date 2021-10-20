import React, { useState } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { messageSelector } from '../../Redux/PopupRedux';


const PopupManager = props => {
	const message = useSelector(messageSelector);
	// const [data, setData] = useState('');
	console.log(message);
	return (
		<Modal visible={message.length === 0 ? true : false} style={{ justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#001196' }}>
				<ActivityIndicator size="large" color="white" />
				<Text style={{ color: 'white' }}>Bağlanıyor</Text>
			</View>
		</Modal>
	);
};

export default PopupManager;
