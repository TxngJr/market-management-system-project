import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { AuthContext } from './contexts/AuthContext';
import CheckListStoresScreen from './screens/CheckListStoresScreen';
import EditStoreScreen from './screens/EditStoreScreen';
import AddStoreScreen from './screens/AddStoreScreen';
import MapStoreScreen from './screens/MapStoreScreen';

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
                                <Stack.Screen name="CheckListStores" component={CheckListStoresScreen} />
                                <Stack.Screen name="EditStore" component={EditStoreScreen} />
                                <Stack.Screen name="AddStore" component={AddStoreScreen} />
                                <Stack.Screen name="MapStore" component={MapStoreScreen} />
                            </>
                        ) : (
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
