import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import DynastiesMoreScreen from "./src/screens/DynastiesMoreScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import CreateEventsScreen from "./src/screens/CreateEventsScreen";
import EventMoreScreen from "./src/screens/EventMoreScreen";
import PlaceMoreScreen from "./src/screens/PlaceMoreScreen";
import WichCrownFitsScreen from "./src/screens/WichCrownFitsScreen";


const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
    )
}

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013' },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                       <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="DynastiesMoreScreen" component={DynastiesMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CreateEventsScreen" component={CreateEventsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="EventMoreScreen" component={EventMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="PlaceMoreScreen" component={PlaceMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="WichCrownFitsScreen" component={WichCrownFitsScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
