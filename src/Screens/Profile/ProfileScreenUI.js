import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

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

	const renderDataItem = ({ item, index }) => {
		return (
			<Card item={item} colors={colors[index]} />
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.topContainer}>
				<View style={styles.topSeparator} />
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
