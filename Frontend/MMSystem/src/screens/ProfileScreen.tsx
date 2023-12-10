import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Button, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { token, removeToken } = useContext(AuthContext)

  return (
    <View>
      <Text>Welcome {token}!</Text>

      <Button title="Logout" onPress={removeToken} />
    </View>
  )
}