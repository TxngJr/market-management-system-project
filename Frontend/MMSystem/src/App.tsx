import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/appNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;