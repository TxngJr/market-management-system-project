import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import { loginApi } from '../services/user.service';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen: React.FC<Props> = ({ navigation }: any) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            const result = await loginApi(username, password);
            if(!result.token){
                throw new Error("have Not Token")
            }
            await AsyncStorage.setItem('token', result.token);
            navigation.navigate('Home');
        } catch (error) {
            console.log('Error logging in', error);
        }
    }

    return (
        <View>
            <Text>เข้าสู่ระบบ</Text>
            <Text>ชื่อผู้ใช้</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="ชื่อผู้ใช้"
            />
            <Text>รหัสผ่าน</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="รหัสผ่าน"
                secureTextEntry
            />
            <Button title="ยืนยัน"
                disabled={username.length < 4 || password.length < 8}
                onPress={handleLogin} />
            <Button
                title="ยังไม่มีบัญชี"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
};

export default LoginScreen;