import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {axiosInstance} from '../../axiosRequest';
import PersonSvgIcon from '../../assets/icons/PersonSVG';
import LogoComponents from '../../components/LogoComponents';
import {AuthContext} from '../../contexts/AuthContext';
import {Button, Input, Layout, Text} from '@ui-kitten/components';

interface Props extends NativeStackScreenProps<any, any> {}

export interface ILoginForm {
  username: string;
  password: string;
}

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'กรุณากรอกอักขระ 3 ตัวขึ้นไป')
    .max(30, 'กรุณากรอกอักขระไม่เกิน 30 ตัวอักษร')
    .required('กรุณากรอกชื่อผู้ใช้'),
  password: Yup.string()
    .min(8, 'กรุณากรอกอักขระ 8 ตัวขึ้นไป')
    .required('กรุณากรอกรหัสผ่าน'),
});

const LoginScreen: React.FC<Props> = ({navigation}: any) => {
  const {saveUser} = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    } as ILoginForm,
    validationSchema: validationSchema,
    onSubmit: async (values: ILoginForm) => {
      const response = await axiosInstance.post<{token: string}>(
        '/users/login',
        values,
      );
      if (response.data) {
        saveUser(response.data.token);
      } else {
        Alert.alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    },
  });

  return (
    <Layout style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}>
      <LogoComponents />
      <View style={{alignItems: 'center', flex: 1}}>
        <PersonSvgIcon />
        <Text category="h2">เข้าสู่ระบบ</Text>
        <View style={{paddingTop: 25, width: 310}}>
          <Input
            placeholder="ชื่อผู้ใช้"
            status="primary"
            id="username"
            size="large"
            onChange={e => formik.setFieldValue('username', e.nativeEvent.text)}
            onBlur={() => formik.setFieldTouched('username')}
            value={formik.values.username}
            caption={
              <Layout>
                <Text category='p2' status="danger">
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : undefined}
                </Text>
              </Layout>
            }
          />
        </View>
        <View style={{paddingTop: 25, width: 310}}>
          <Input
            placeholder="รหัสผ่าน"
            status="primary"
            id="password"
            size="large"
            onChange={e => formik.setFieldValue('password', e.nativeEvent.text)}
            onBlur={() => formik.setFieldTouched('password')}
            value={formik.values.password}
            caption={
              <Layout>
                <Text category='p2' status="danger">
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : undefined}
                </Text>
              </Layout>
            }
            secureTextEntry={true}
          />
        </View>
        <View style={{paddingTop: 25}}>
          <Button size='large' style={{width:310}} onPress={() => formik.handleSubmit()}>
            เข้าสู่ระบบ
          </Button>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 20}}>สร้างบัญชีใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
