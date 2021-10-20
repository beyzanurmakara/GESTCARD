import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../Screens/Profile/ProfileScreen';
import Detail from '../Screens/Detail/DetailScreenUI';
import CustomBack from './Components/CustomBack';

const Home = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home</Text>
			{/* <Button onPress={() => navigation.navigate('Orders')} title="Go back home" /> */}
		</View>
	);
}

const Lines = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Lines</Text>
		</View>
	);
}

const Tickets = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Tickets</Text>
		</View>
	);
}

const Categories = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Categories</Text>
		</View>
	);
}


const Stack = createStackNavigator();
const ProfileStack = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerLeft: () => (
					<CustomBack />
				)
			}}
		>
			<Stack.Screen
				name="profile"
				component={ProfileScreen}
				options={{
					title: 'GestCard Listesi',
					headerStyle: {
						backgroundColor: '#001196',
						height: 100,
						// borderBottomColor: 'white',
						// borderBottomWidth: 0.5,
					},
					headerTitleAlign: 'center',
					headerTitleStyle: {
						color: 'white'
					},
				}}

			/>
			<Stack.Screen
				name="detail"
				component={Detail}
				options={{
					title: 'GestCard',
					headerStyle: {
						backgroundColor: '#001196',
						height: 100,
						// borderBottomColor: 'white',
						// borderBottomWidth: 0.5,
					},
					headerTitleAlign: 'center',
					headerTitleStyle: {
						color: 'white'
					},
				}}

			/>
		</Stack.Navigator>
	)
}

const Tabs = createBottomTabNavigator();

const TabNavigation = props => {
	return (
		<Tabs.Navigator
			initialRouteName='profileStack'
			screenOptions={{
				tabBarInactiveBackgroundColor: '#00AEEF',
				tabBarActiveTintColor: 'white',
				tabBarStyle: {
					position: 'absolute',
					height: 60,
					backgroundColor: '#00AEEF'
				},
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home"
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Image
								source={require('../Images/home.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? 'white' : '#DCDCDC',
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="lines"
				component={Lines}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Image
								source={require('../Images/ship.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? 'white' : '#DCDCDC',
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="tickets"
				component={Tickets}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Image
								source={require('../Images/ticket.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? 'white' : '#DCDCDC',
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="profileStack"
				component={ProfileStack}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Image
								source={require('../Images/user.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? 'white' : '#DCDCDC',
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="categories"
				component={Categories}
				options={{
					// // headerShown: true,
					// headerTitle: 'GestCard Listesi',
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Image
								source={require('../Images/th-large.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? 'white' : '#DCDCDC',
								}}
							/>
						</View>
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default TabNavigation;
