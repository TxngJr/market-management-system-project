import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthContext} from '../../contexts/AuthContext';
import {ILoginForm} from '../../interfaces/user.interface';
import {axiosInstance} from '../../axiosRequest';
import LogoComponents from '../../components/LogoComponents';
import PersonSvgIcon from '../../assets/icons/PersonSVG';

interface Props extends NativeStackScreenProps<any, any> {}

const LoginScreen: React.FC<Props> = ({navigation}: any) => {
  const {saveUser} = useContext(AuthContext);
  const [user, setUser] = useState<ILoginForm>({
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    const response = await axiosInstance.post<{token: string}>(
      '/users/login',
      user,
    );
    if (response.data) {
      saveUser(response.data.token);
    } else {
      Alert.alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
        flex: 1,
      }}>
      <LogoComponents />
      <View style={{alignItems: 'center', flex: 1}}>
        <PersonSvgIcon />
        <Text style={{fontSize: 32, color: '#000000'}}>เข้าสู่ระบบ</Text>
        <View style={{paddingTop: 20}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user.username}
            onChangeText={(text: string) => setUser({...user!, username: text})}
            placeholder="ชื่อผู้ใช้"
          />
        </View>
        <View style={{paddingTop: 20}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user.password}
            onChangeText={(text: string) => setUser({...user!, password: text})}
            placeholder="รหัสผ่าน"
            secureTextEntry
          />
        </View>
        <View style={{paddingTop: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#398DA8',
              width: 180,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}
            disabled={user.username.length < 4 || user.password.length < 8}
            onPress={handleLogin}>
            <Text style={{fontSize: 32, color: '#000000'}}>ยืนยัน</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end',padding:20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 20}}>สร้างบัญชีใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
