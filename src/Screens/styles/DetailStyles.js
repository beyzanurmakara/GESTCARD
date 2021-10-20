import { StyleSheet, Dimensions } from 'react-native';

let windowSize = Dimensions.get('window');
const height = windowSize.height;

export default StyleSheet.create({
	topContainer: {
		backgroundColor: '#001196',
		height: height * 0.2,
	},
	bottomContainer: {
		backgroundColor: 'white',
		height: height * 0.8
	},
	scrollView: {
		position: 'absolute',
		top: height * 0.07,
		left: 20,
		right: 20,
		bottom: 75
	},
	headerContainer: {
		backgroundColor: '#FFCB3E',
		padding: 20,
		borderRadius: 20,
		marginBottom: 30
	},
	typeName: {
		color: '#001196',
		fontWeight: 'bold',
		fontSize: 20
	},
	typeDesc: {
		color: '#001196',
		fontSize: 14
	},
	bottomSeparator: {
		backgroundColor: '#001196',
		width: 50,
		height: 2,
		borderRadius: 100,
		marginVertical: 5
	},
	cardNoContainer: {
		alignItems: 'flex-end',
		marginBottom: 10
	},
	dealStatus: {
		color: '#001196',
		fontSize: 14,
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 5
	},
	icon: {
		width: 20,
		height: 20,
		tintColor: '#EF3832',
	},
	cardNo: {
		color: '#001196',
		fontWeight: 'bold',
		fontSize: 20,
	},
	dottedSeparator: {
		borderStyle: 'dotted',
		borderWidth: 1,
		borderRadius: 1,
		borderColor: '#001196',
		marginVertical: 5
	},
	separator: {
		borderStyle: 'solid',
		borderWidth: 0.5,
		borderRadius: 1,
		borderColor: '#001196',
		marginVertical: 5
	},
	boldText: {
		color: '#001196',
		fontWeight: 'bold'
	},
	roundFrame: {
		position: 'absolute',
		backgroundColor: 'white',
		padding: 12,
		borderRadius: 1000,
		top: height * 0.201,
	}
});
