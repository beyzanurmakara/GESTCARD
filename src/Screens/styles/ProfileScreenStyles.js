import { StyleSheet, Dimensions } from 'react-native';

let windowSize = Dimensions.get('window');
const height = windowSize.height;

export default StyleSheet.create({
	topContainer: {
		backgroundColor: '#001196',
		height: height * 0.2,
		alignItems: 'center'
	},
	topSeparator: {
		backgroundColor: 'white',
		width: 50,
		height: 2,
		borderRadius: 100,
		marginVertical: 5,

	},
	header: {
		color: 'white',
		fontSize: 20,
		marginBottom: 25,
		paddingTop: 20,
		paddingHorizontal: 10
	},
	bottomContainer: {
		backgroundColor: 'white',
		height: height * 0.8
	},
	newCardApplication: {
		position: 'absolute',
		backgroundColor: '#27C67D',
		padding: 20,
		top: height * 0.16,
		left: 20,
		right: 20,
		borderRadius: 1000,
		justifyContent: 'center',
		alignItems: 'center'
	},
	newCardText: {
		textTransform: 'uppercase',
		color: 'white',
		fontWeight: 'bold'
	},
	flatList: {
		flex: 0.9,
		backgroundColor: 'white',
		position: 'absolute',
		top: height * 0.26,
		left: 25,
		right: 25,
		bottom: 50,
		paddingBottom: 10
	}
});
