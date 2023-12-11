import React from 'react';
import { AuthProvider } from './contexts/AuthContext';

import Navigator from './Navigator';

export default function App() {

  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}