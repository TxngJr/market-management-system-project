import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { ApiResponse } from '../interfaces/gobal.interface';
import { IRegisterApiResponse, IRegisterForm } from '../interfaces/user.interface';
import { registerApi } from '../services/user.service';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen: React.FC<Props> = ({ navigation }: any) => {

    const [user, setUser] = useState<IRegisterForm>({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleRegister = async () => {
        const isRegister: ApiResponse<IRegisterApiResponse> =
            await registerApi(user);
        if (!isRegister.status) {
            return Alert.alert("สมัครไม่สำเร็จ", "เกิดข้อผิดพลาด");
        }
        return navigation.navigate('Login');
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
                onPress={handleRegister} >
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