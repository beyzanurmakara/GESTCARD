import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { messageSelector } from '../../Redux/PopupRedux';

import Card from '../Components/Card';
import styles from '../styles/ProfileScreenStyles';

const ProfileScreenUI = props => {
	const colors = [
		{
			background: '#EFE831',
			color: '#001196'
		}, {
			background: '#FFCB3E',
			color: '#001196'
		}, {
			background: '#3181EF',
			color: '#FFFFFF'
		}, {
			background: '#EF3197',
			color: '#FFFFFF'
		},
	]

	const message = useSelector(messageSelector);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setVisible(false)
		}, 2000);
	}, [])

	const renderDataItem = ({ item, index }) => {
		return (
			<Card item={item} colors={colors[index]} />
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.topContainer}>
				<View style={styles.topSeparator} />
				{
					visible ?
						<View style={{ backgroundColor: '#27C67D', padding: 15, paddingHorizontal: 20, borderRadius: 30 }}>
							<Text style={{ color: 'white', fontWeight: 'bold' }}>{message}</Text>
						</View>
						: null
				}
				<Text style={styles.header}>
					<Text>GestCard ile</Text>
					<Text style={{ fontWeight: "bold" }}> indirimlerden faydalanabilirsiniz.</Text>
				</Text>
			</View>
			<View style={styles.bottomContainer} />
			<TouchableOpacity style={styles.newCardApplication} activeOpacity={0.9}>
				<Text style={styles.newCardText}>yeni kart başvurusu</Text>
			</TouchableOpacity>
			<FlatList
				data={props.datas}
				renderItem={renderDataItem}
				keyExtractor={(item, key) => { item.cardId }}
				showsVerticalScrollIndicator={false}
				style={styles.flatList}
			/>
		</View>
	);
};

export default ProfileScreenUI;
