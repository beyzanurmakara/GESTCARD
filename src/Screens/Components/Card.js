import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { addItem } from '../../Redux/ItemRedux';
import styles from '../styles/CardStyles';

const Card = props => {

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const datas = props.item;

	const _onPress = () => {
		dispatch(addItem(datas));
		navigation.navigate('detail');
		// navigation.navigate('detail', { datas })
	}
	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: props.colors.background }]}
			activeOpacity={0.7}
			onPress={_onPress}
		>
			<Text style={[styles.typeName, { color: props.colors.color, }]}>
				{datas.typeName}
			</Text>
			<Text style={[styles.typeDesc, { color: props.colors.color }]}>
				{datas.typeDesc}
			</Text>
			<View style={[styles.bottomSeparator, { backgroundColor: props.colors.color }]} />
			<View style={{ alignItems: 'flex-end' }}>
				{datas.cardNo === '--' ?
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.typeDesc, { color: props.colors.color }]}>
							{'Sözleşme Durumu: '}
						</Text>
						<View style={styles.iconContainer}>
							<Image
								source={require('../../Images/check.png')}
								resizeMode='contain'
								style={[styles.icon, { tintColor: props.colors.color }]}
							/>
						</View>
					</View>
					:
					<Text style={[styles.cardNo, { color: props.colors.color }]}>
						{datas.cardNo}
					</Text>
				}
			</View>
			<View style={[styles.dottedSeparator, { borderColor: props.colors.color }]} />
			<View style={styles.balanceConatiner}>
				<Text style={{ color: props.colors.color }}>Bakiye:</Text>
				<Text style={[styles.balance, { color: props.colors.color }]}>
					{datas.balance} ₺
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
