import React from "react";
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Login,Event,Tour,Onboarding, DestinationDetail, Home, DestinationDetails3, DestinationDetails2, Flight, Beach, Train, Bus,Taxi, Hotel,Food} from "./screens/";
// extra screens
import Tabs from "./navigation/tabs";

import { icons, COLORS, SIZES } from './constants';
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    //For fonts
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Login'}
            >
                {/* Screens */}

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />

                <Stack.Screen
                    name="DestinationDetail"
                    component={DestinationDetail}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="DestinationDetails2"
                    component={DestinationDetails2}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="DestinationDetails3"
                    component={DestinationDetails3}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Beach"
                    component={Beach}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Flight"
                    component={Flight}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Train"
                    component={Train}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Bus"
                    component={Bus}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Taxi"
                    component={Taxi}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Hotel"
                    component={Hotel}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Food"
                    component={Food}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Tour"
                    component={Tour}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Event"
                    component={Event}
                    options={{ headerShown: false }}
                />

                {/* Tabs */}
                < Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Menu")}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};
