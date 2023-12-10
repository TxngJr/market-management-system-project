import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { AuthContext, AuthProvider } from './contexts/AuthContext';

export default function App() {
  const { token } = useContext(AuthContext);
  useEffect(() => {
    // console.log(token)
  }, [])
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <AppStack /> */}
        <AuthStack />
      </NavigationContainer>
    </AuthProvider>
  );
}