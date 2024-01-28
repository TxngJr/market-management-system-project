import React from 'react';
import {AuthProvider} from './contexts/AuthContext';
import Navigator from './Navigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </ApplicationProvider>
  );
}
