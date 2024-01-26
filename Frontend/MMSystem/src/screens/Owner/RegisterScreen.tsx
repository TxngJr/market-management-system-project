import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {ApiResponse} from '../../interfaces/gobal.interface';
import {
  IRegisterApiResponse,
  IRegisterForm,
} from '../../interfaces/user.interface';
import {axiosInstance} from '../../axiosRequest';
import PersonSvgIcon from '../../assets/icons/PersonSVG';
import LogoComponents from '../../components/LogoComponents';

interface Props extends NativeStackScreenProps<any, any> {}

const LoginScreen: React.FC<Props> = ({navigation}: any) => {
  const [user, setUser] = useState<IRegisterForm>({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleRegister = async () => {
    const response = await axiosInstance.post<IRegisterApiResponse>(
      '/users/register',
      {
        imagePath: '',
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
      },
    );
    if (response.data) {
      Alert.alert('สมัครสมาชิกสำเร็จ');
      navigation.navigate('Login');
    } else {
      Alert.alert('มีบางอย่างผิดพลาด');
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
        <Text style={{fontSize: 32, color: '#000000'}}>สร้างบัญชีใหม่</Text>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.firstName}
            onChangeText={(text: string) => setUser({...user!, firstName: text})}
            placeholder="ชื่อ"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.lastName}
            onChangeText={(text: string) => setUser({...user!, lastName: text})}
            placeholder="นามสกุล"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.username}
            onChangeText={(text: string) => setUser({...user!, username: text})}
            placeholder="ชื่อผู้ใช้"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.password}
            onChangeText={(text: string) => setUser({...user!, password: text})}
            placeholder="รหัสผ่าน"
            secureTextEntry
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.confirmPassword}
            onChangeText={(text: string) =>
              setUser({...user!, confirmPassword: text})
            }
            placeholder="ยืนยันรหัสผ่าน"
            secureTextEntry
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.email}
            onChangeText={(text: string) =>
              setUser({...user!, email: text})
            }
            placeholder="อีเมล"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.address}
            onChangeText={(text: string) =>
              setUser({...user!, address: text})
            }
            placeholder="ที่อยู่"
          />
        </View>
        <View style={{paddingTop: 10}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 200,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={user?.phoneNumber}
            onChangeText={(text: string) =>
              setUser({...user!, phoneNumber: text})
            }
            placeholder="เบอร์โทรศัพท์"
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
            onPress={handleRegister}>
            <Text style={{fontSize: 32, color: '#000000'}}>ยืนยัน</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 20}}>มีบัญชีแล้ว</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
