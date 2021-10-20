import React from 'react';
import { Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { itemSelector } from '../../Redux/ItemRedux';
import Button from '../Components/Button';
import styles from '../styles/DetailStyles';

let windowSize = Dimensions.get('window');
const height = windowSize.height;
const DetailScreenUI = props => {
	// const { datas } = props.route.params;
	const datas = useSelector(itemSelector);
	// console.log(datas)
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.topContainer} />
			<View style={styles.bottomContainer} />
			<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
				<View style={styles.headerContainer}>
					<Text style={styles.typeName}>
						{datas.typeName}
					</Text>
					<Text style={styles.typeDesc}>
						{datas.typeDesc}
					</Text>
					<View style={styles.bottomSeparator} />
					<View style={styles.cardNoContainer}>
						{datas.cardNo === '--' ?
							<View style={{ flexDirection: 'row' }}>
								<Text style={styles.dealStatus}>
									{'Sözleşme Durumu: '}
								</Text>
								<View style={styles.iconContainer}>
									<Image
										source={require('../../Images/close.png')}
										resizeMode='contain'
										style={styles.icon}
									/>
								</View>
							</View>
							:
							<Text style={styles.cardNo}>
								{datas.cardNo}
							</Text>
						}
					</View>
					<View style={styles.dottedSeparator} />
					<View style={{ marginVertical: 10 }}>
						<Text style={styles.dealStatus}>Firma</Text>
						<Text style={styles.boldText}>540Plus Tanıtım Reklam Ajansı</Text>
						<View
							style={styles.separator}
						/>
					</View>
					<View style={{ marginVertical: 10 }}>
						<Text style={styles.dealStatus}>Sözleşme Bitiş Tarihi</Text>
						<Text style={styles.boldText}>
							{datas.dealEndDate}
						</Text>
						<View
							style={styles.separator}
						/>
					</View>
					<View style={{ alignItems: 'flex-end' }}>
						<View>
							<Text style={{ color: '#001196' }}>
								<Text style={{ fontSize: 25, }}>Bakiye: </Text>
								<Text style={{ fontWeight: "bold", fontSize: 27 }}>{datas.balance} ₺</Text>
							</Text>
							<View style={styles.bottomSeparator} />
						</View>
					</View>
				</View>
				<Button color={'#27C67D'} text={'bakiye yükle'} />
				<Button color={'#3181EF'} text={'gesdcard geçişleri'} />
				<Button color={'#001196'} text={'araçlar'} />
				<Button color={'#EF3832'} text={'gestcard iptal'} />
			</ScrollView>
			<View style={[styles.roundFrame, { left: 10 }]} />
			<View style={[styles.roundFrame, { right: 10 }]} />
		</View>
	);
};

export default DetailScreenUI;
