import React, { useEffect } from 'react';
import ProfileScreenUI from './ProfileScreenUI';
import API from '../../API/API';
import { useDispatch } from 'react-redux';
import { setMessageAC } from '../../Redux/PopupRedux';

const ProfileScreen = props => {

	const dispatch = useDispatch();
	const [datas, setDatas] = React.useState([]);

	useEffect(() => {
		API.getUsercardList()
			.then(response => {
				dispatch(setMessageAC(response.message));
				setDatas(response.gestCardList)
				// console.log(response)
			})
			.catch(error => console.log(error))

	}, [])

	// const data = require('../../API/getUserGestCardList.json');

	// useEffect(() => {
	// 	setDatas(data.gestcardList);
	// }, [])

	return (
		<ProfileScreenUI datas={datas} />
	);
};

export default ProfileScreen;
