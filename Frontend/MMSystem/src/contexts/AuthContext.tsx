import React, { useState, createContext, ReactNode, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  token: string | null;
  saveToken: (token: string) => void;
  removeToken: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  saveToken: () => { },
  removeToken: () => { }
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      let token;

      try {
        token = await AsyncStorage.getItem('token');
      } catch (error) {
        console.log(error);
      }
      if (token) {
        setToken(token);
      } else {
        setToken(null);
      }
    }
    checkToken();
  }, []);


  const saveToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      console.log(error)
    }
  }
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(null);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}