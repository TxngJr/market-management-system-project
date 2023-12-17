import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { registerApi } from '../services/user.service';
import { IRegisterForm } from '../interfaces/user.interface';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen: React.FC<Props> = ({ navigation }: any) => {

    const [user, setUser] = useState<IRegisterForm>({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleLogin = async () => {
        try {
            await registerApi({ username: user!.username, password: user!.password });
            navigation.navigate('Login');
        } catch (error) {
            console.log('Error logging in', error);
        }
    }

    return (
        <View>
            <Text>สมัครสมาชิก</Text>
            <Text>ชื่อผู้ใช้</Text>
            <TextInput
                value={user?.username}
                onChangeText={(text: string) => setUser({ ...user!, username: text })}
                placeholder="ชื่อผู้ใช้"
            />
            <Text>รหัสผ่าน</Text>
            <TextInput
                value={user?.password}
                onChangeText={(text: string) => setUser({ ...user!, password: text })}
                placeholder="รหัสผ่าน"
                secureTextEntry
            />
            <Text>ยื่นยันรหัสผ่าน</Text>
            <TextInput
                value={user?.confirmPassword}
                onChangeText={(text: string) => setUser({ ...user!, confirmPassword: text })}
                placeholder="ยืนยันรหัสผ่าน"
                secureTextEntry
            />
            <TouchableOpacity
                disabled={user.username.length < 4 || user.password.length < 8 || user.password != user.confirmPassword}
                onPress={handleLogin} >
                <Text>สมัครสมาชิก</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text>
                    มีบัญชีแล้ว
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;