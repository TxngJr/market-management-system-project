import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Owner/HomeScreen';
import LoginScreen from './screens/Owner/LoginScreen';
import RegisterForm1Screen from './screens/Owner/RegisterScreen/RegisterForm1';
import RegisterForm2Screen from './screens/Owner/RegisterScreen/RegisterForm2';
import {AuthContext} from './contexts/AuthContext';
// import CheckListStoresScreen from './screens/CheckListStoresScreen';
// import EditStoreScreen from './screens/EditStoreScreen';
// import AddStoreScreen from './screens/AddStoreScreen';
// import MapStoreScreen from './screens/MapStoreScreen';
import {Text, View} from 'react-native';
// import ProfileScreen from './screens/Owner/ProfileScreen';
import CheckListStoresScreen from './screens/Owner/CheckListStoresScreen';
// import AddStoreScreen from './screens/Owner/AddStoreScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const {user} = useContext(AuthContext);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 50);
  }, []);

  if (!authLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            {user.isOwner ? (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen
                  name="CheckListStores"
                  component={CheckListStoresScreen}
                />
                <Stack.Screen name="AddStore" component={AddStoreScreen} />
                <Stack.Screen name="EditStore" component={EditStoreScreen} />
                <Stack.Screen name="MapStore" component={MapStoreScreen} /> */}
              </>
            ) : (
              // <Stack.Screen name="Home" component={HomeScreen} />
              <></>
            )}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterForm1Screen} />
            <Stack.Screen name="RegisterNext" component={RegisterForm2Screen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
