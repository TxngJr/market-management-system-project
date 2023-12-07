import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// import { getUserData } from '../services/api';  

const HomeScreen: React.FC<any> = ({navigation}) => {

    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // const userData = await getUserData();
                const token = await AsyncStorage.getItem('token');
                if(!token){
                    navigation.navigate('Login');
                }
                console.log(token)
                const userData = { name: "hello", email: "txngjr@gmail.com" };
                setUser(userData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <View>
            <Text>Home Screen</Text>
            {user && (
                <>
                    <Text>Name: {user.name}</Text>
                    <Text>Email: {user.email}</Text>
                </>
            )}
        </View>
    );
};

export default HomeScreen;