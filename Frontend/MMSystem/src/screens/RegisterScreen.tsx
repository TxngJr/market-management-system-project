import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { registerApi } from '../services/user.service';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen: React.FC<Props> = ({ navigation }: any) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            await registerApi({username, password});
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
            <Text>ยื่นยันรหัสผ่าน</Text>
            <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="ยืนยันรหัสผ่าน"
                secureTextEntry
            />
            <Button title="สมัครสมาชิก"
                disabled={password.length < 8 || password != confirmPassword}
                onPress={handleLogin} />
            <Button
                title="มีบัญชีแล้ว"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default LoginScreen;