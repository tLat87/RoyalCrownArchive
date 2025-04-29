import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import PlacesScreen from '../screens/PlacesScreen';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';

const icons = {
    Home: require('../assets/img/iconoir_home.png'),
    Events: require('../assets/img/material-symbols-light_event-rounded.png'),
    Places: require('../assets/img/ic_outline-place.png'),
    Quiz: require('../assets/img/famicons_game-controller-outline.png'),
    Settings: require('../assets/img/solar_settings-broken.png'),
};

const screens = {
    Home: HomeScreen,
    Events: EventsScreen,
    Places: PlacesScreen,
    Quiz: QuizScreen,
    Settings: SettingsScreen,
};

const tabConfig = {
    screenOptions: ({ route }) => ({
        headerShown: false,
        headerTitle: '',
        headerStyle: { backgroundColor: '#F9F6F1' },
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: '#191919' },
        tabBarLabelStyle: { color: '#EBEBF580' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#EBEBF580',
        tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12 }}>{route.name}</Text>
        ),
        tabBarIcon: ({ focused }) => (
            <Image source={icons[route.name]} />
        ),
    }),
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator {...tabConfig}>
        {Object.entries(screens).map(([name, component]) => (
            <Tab.Screen key={name} name={name} component={component} />
        ))}
    </Tab.Navigator>
);

export default TabNavigator;
