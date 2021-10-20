import React, { useEffect } from 'react';
import ProfileScreenUI from './ProfileScreenUI';
import API from '../../API/API';

const ProfileScreen = props => {
	// useEffect(() => {
	// 	API.getUsercardList();

	// }, [])
	const [datas, setDatas] = React.useState([]);

	const data = require('../../API/getUserGestCardList.json');

	useEffect(() => {
		setDatas(data.gestcardList);
	}, [])

	return (
		<ProfileScreenUI datas={datas} />
	);
};

export default ProfileScreen;
