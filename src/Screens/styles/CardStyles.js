import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		padding: 10,
		borderRadius: 20,
		marginBottom: 10
	},
	typeName: {
		fontWeight: 'bold',
		fontSize: 20
	},
	typeDesc: {
		fontSize: 14
	},
	bottomSeparator: {
		width: 50,
		height: 2,
		borderRadius: 100,
		marginVertical: 5
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 5
	},
	icon: {
		width: 20,
		height: 20,
	},
	cardNo: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	dottedSeparator: {
		borderStyle: 'dotted',
		borderWidth: 1,
		borderRadius: 1,
		marginVertical: 5
	},
	balanceContainer: {
		justifyContent: 'flex-end',
		flexDirection: 'row'
	},
	balance: {
		fontWeight: 'bold',
		fontSize: 16
	}
});
