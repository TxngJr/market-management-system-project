import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { loginApi } from '../services/user.service';
import { AuthContext } from '../contexts/AuthContext';
import { ILoginApiResponse, ILoginForm } from '../interfaces/user.interface';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen: React.FC<Props> = ({ navigation }: any) => {
    const { saveToken } = useContext(AuthContext)
    const [user, setUser] = useState<ILoginForm>({
        username: "",
        password: ""
    });

    const handleLogin = async () => {
        try {
            const result: ILoginApiResponse = await loginApi({ username: user!.username, password: user!.password });
            if (result.message) {
                return Alert.alert('Login Failed', result.message);
            }
            saveToken(result.token!)
        } catch (error) {
            console.log('Error logging in', error);
        }
    }

    return (
        <View>
            <Text>เข้าสู่ระบบ</Text>
            <Text>ชื่อผู้ใช้</Text>
            <TextInput
                value={user.username}
                onChangeText={(text: string) => setUser({ ...user!, username: text })}
                placeholder="ชื่อผู้ใช้"
            />
            <Text>รหัสผ่าน</Text>
            <TextInput
                value={user.password}
                onChangeText={(text: string) => setUser({ ...user!, password: text })}
                placeholder="รหัสผ่าน"
                secureTextEntry
            />
            <TouchableOpacity
                disabled={user.username.length < 4 || user.password.length < 8}
                onPress={handleLogin} >
                <Text>ยืนยัน</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text>ยังไม่มีบัญชี</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;