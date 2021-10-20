/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/Redux/ReduxManager';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/Navigation/TabNavigation';
import PopupManager from './src/Screens/Components/PopupManager';

const { store } = configureStore();

const App = () => {

	return (
		<Provider store={store}>
			<PopupManager />
			<NavigationContainer>
				<TabNavigation />
			</NavigationContainer>
		</Provider>
	);
};



export default App;
