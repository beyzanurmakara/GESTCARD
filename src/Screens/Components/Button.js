import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/ButtonStyles';

const Button = props => {
	return (
		<TouchableOpacity style={[styles.container, { backgroundColor: props.color }]} activeOpacity={0.8}>
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
