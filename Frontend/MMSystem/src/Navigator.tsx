import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { AuthContext } from './contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    const { token } = useContext(AuthContext);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {
                    token ?
                        (
                            <>
                                <Stack.Screen name="Home" component={HomeScreen} />
                            </>
                        ) :
                        (
                            <>
                                <Stack.Screen name="Login" component={LoginScreen} />
                                <Stack.Screen name="Register" component={RegisterScreen} />
                            </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
