import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Image, Text} from 'react-native';
import EventsScreen from '../screens/EventsScreen';
import PlacesScreen from '../screens/PlacesScreen';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#F9F6F1',
                },
                tabBarStyle: {
                    backgroundColor: '#191919',
                },
               tabBarLabelStyle: {
                    color: '#EBEBF580',
               },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#EBEBF580',
                tabBarLabel: ({ focused, color }) => (
                    <Text style={{ color, fontSize: 12 }}>
                        {route.name}
                    </Text>
                ),
                headerShadowVisible: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/iconoir_home.png')}  />
                    ),
                }}
            />
            <Tab.Screen
                name="Events"
                component={EventsScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/material-symbols-light_event-rounded.png')}  />
                    ),
                }}
            />
            <Tab.Screen
                name="Places"
                component={PlacesScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/ic_outline-place.png')}  />
                    ),
                }}
            />
            <Tab.Screen
                name="Quiz"
                component={QuizScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/famicons_game-controller-outline.png')}  />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/solar_settings-broken.png')}  />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
