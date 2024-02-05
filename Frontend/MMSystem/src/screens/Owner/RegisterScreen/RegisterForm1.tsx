import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import {axiosInstance} from '../../../axiosRequest';
import {IResponseApiDefault} from '../../../interfaces/responseApi.interface';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import LogoSvgIcon from '../../../assets/icons/LogoSVG';

interface Props extends NativeStackScreenProps<any, any> {}

interface IRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'กรุณากรอกอักขระ 3 ตัวขึ้นไป')
    .max(30, 'กรุณากรอกอักขระไม่เกิน 30 ตัวอักษร')
    .required('กรุณากรอกชื่อผู้ใช้'),
  password: Yup.string()
    .min(8, 'กรุณากรอกอักขระ 8 ตัวขึ้นไป')
    .required('กรุณากรอกรหัสผ่าน'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null!], 'รหัสผ่านไม่ตรงกัน')
    .required('กรุณากรอกรหัสผ่านอีกครั้ง'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')
    .required('กรุณากรอกเบอร์โทรศัพท์'),
});

const RegisterForm1Screen: React.FC<Props> = ({navigation}: any) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    } as IRegisterForm,
    validationSchema: validationSchema,
    onSubmit: async (values: IRegisterForm) => {
      navigation.navigate('RegisterNext', {
        ...values,
      });
    },
  });

  return (
    <Layout style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}>
      <View style={{alignItems: 'center', flex: 1}}>
        <LogoSvgIcon size={300} />
        <Text category="h2">สร้างบัญชีใหม่</Text>

        <View style={{paddingTop: 10, width: 310}}>
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
                <Text category="p2" status="danger">
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : undefined}
                </Text>
              </Layout>
            }
          />
        </View>
        <View style={{width: 310}}>
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
                <Text category="p2" status="danger">
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : undefined}
                </Text>
              </Layout>
            }
            secureTextEntry={true}
          />
        </View>
        <View style={{width: 310}}>
          <Input
            placeholder="ยืนยันรหัสผ่าน"
            status="primary"
            id="confirmPassword"
            size="large"
            onChange={e =>
              formik.setFieldValue('confirmPassword', e.nativeEvent.text)
            }
            onBlur={() => formik.setFieldTouched('confirmPassword')}
            value={formik.values.confirmPassword}
            caption={
              <Layout>
                <Text category="p2" status="danger">
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : undefined}
                </Text>
              </Layout>
            }
            secureTextEntry={true}
          />
        </View>
        <View style={{width: 310}}>
          <Input
            placeholder="เบอร์โทรศัพท์"
            status="primary"
            id="phoneNumber"
            size="large"
            onChange={e =>
              formik.setFieldValue('phoneNumber', e.nativeEvent.text)
            }
            onBlur={() => formik.setFieldTouched('phoneNumber')}
            value={formik.values.phoneNumber}
            caption={
              <Layout>
                <Text category="p2" status="danger">
                  {formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? formik.errors.phoneNumber
                    : undefined}
                </Text>
              </Layout>
            }
          />
        </View>
        <View style={{paddingTop: 5}}>
          <Button
            size="large"
            style={{width: 310}}
            onPress={() => formik.handleSubmit()}>
            ยืนยัน
          </Button>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 20}}>มีบัญชีแล้ว</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default RegisterForm1Screen;
