import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import WordListScreen from "./Screens/WordListScreen";
import AddWordScreen from "./Screens/AddWordScreen";
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderLeft from "./Components/Common/HeaderLeft";
import HeaderRight from "./Components/Common/HeaderRight";
import {Button} from 'react-native';
import {navigationRef} from "./RootNavigation";

const Stack = createStackNavigator();

// Create Storage

const storage = new Storage({
    // maximum capacity, default 1000 key-ids
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

global.storage = storage;

// Create Storage End

const App = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: "LearnFast",
                    headerLeft: () => <HeaderLeft/>,
                    headerRight: () => <HeaderRight/>,
                }}/>
                <Stack.Screen name="WordList" component={WordListScreen} options={{
                    title: "Words List",
                    headerRight: () => <></>,
                }}/>
                <Stack.Screen name="AddWord" component={AddWordScreen} options={{
                    title: "Add New Word",
                    headerRight: () => <></>,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
