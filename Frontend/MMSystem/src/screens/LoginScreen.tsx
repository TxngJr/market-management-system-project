import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { loginApi } from '../services/user.service';
import { AuthContext } from '../contexts/AuthContext';
import { ILoginApiResponse, ILoginForm } from '../interfaces/user.interface';
import { ApiResponse } from '../interfaces/gobal.interface';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen: React.FC<Props> = ({ navigation }: any) => {
    const { saveToken } = useContext(AuthContext)
    const [user, setUser] = useState<ILoginForm>({
        username: "",
        password: ""
    });

    const handleLogin = async () => {
        const isLogin: ApiResponse<ILoginApiResponse> =
            await loginApi(user);
        if (!isLogin.status) {
            return Alert.alert("เข้าสู่ระบบไม่สำเร็จ", "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
        return saveToken(isLogin.data.token);
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