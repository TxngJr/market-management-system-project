import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import {axiosInstance} from '../../axiosRequest';
import PersonSvgIcon from '../../assets/icons/PersonSVG';
import LogoComponents from '../../components/LogoComponents';
import {IResponseApiDefault} from '../../interfaces/responseApi.interface';
import {Button, Input, Layout, Text} from '@ui-kitten/components';

interface Props extends NativeStackScreenProps<any, any> {}

interface IRegisterForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'กรุณากรอกอักขระ 2 ตัวขึ้นไป')
    .max(50, 'กรุณากรอกอักขระไม่เกิน 50 ตัวอักษร')
    .required('กรุณากรอกชื่อจริง'),
  lastName: Yup.string()
    .min(2, 'กรุณากรอกอักขระ 2 ตัวขึ้นไป')
    .max(50, 'กรุณากรอกอักขระไม่เกิน 50 ตัวอักษร')
    .required('กรุณากรอกนามสกุล'),
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
  email: Yup.string().email('กรุณากรอกอีเมล').required('กรุณากรอกอีเมล'),
  address: Yup.string().required('กรุณากรอกที่อยู่'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')
    .required('กรุณากรอกเบอร์โทรศัพท์'),
});

const RegisterScreen: React.FC<Props> = ({navigation}: any) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      address: '',
      phoneNumber: '',
    } as IRegisterForm,
    validationSchema: validationSchema,
    onSubmit: async (values: IRegisterForm) => {
      const response = await axiosInstance.post<IResponseApiDefault>(
        '/users/register',
        {
          imagePath: '',
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          password: values.password,
          email: values.email,
          address: values.address,
          phoneNumber: values.phoneNumber,
        },
      );
      if (response.data) {
        Alert.alert('สมัครสมาชิกสำเร็จ');
        navigation.navigate('Login');
      } else {
        Alert.alert('มีบางอย่างผิดพลาด');
      }
    },
  });

  return (
    <Layout style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}>
      <LogoComponents />
      <View style={{alignItems: 'center', flex: 1}}>
        <PersonSvgIcon />
        <Text category="h2">สร้างบัญชีใหม่</Text>
        <View style={{paddingTop: 10, width: 310}}>
          <Input
            placeholder="ชื่อจริง"
            status="primary"
            id="firstName"
            size="large"
            onChange={e =>
              formik.setFieldValue('firstName', e.nativeEvent.text)
            }
            onBlur={() => formik.setFieldTouched('firstName')}
            value={formik.values.firstName}
            caption={
              <Layout>
                <Text category="p2" status="danger">
                  {formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : undefined}
                </Text>
              </Layout>
            }
          />
        </View>
        <View style={{width: 310}}>
          <Input
            placeholder="นามสกุล"
            status="primary"
            id="lastName"
            size="large"
            onChange={e => formik.setFieldValue('lastName', e.nativeEvent.text)}
            onBlur={() => formik.setFieldTouched('lastName')}
            value={formik.values.lastName}
            caption={
              <Layout>
                <Text category="p2" status="danger">
                  {formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : undefined}
                </Text>
              </Layout>
            }
          />
        </View>
        <View style={{width: 310}}>
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
            placeholder="อีเมล"
            status="primary"
            id="email"
            size="large"
            onChange={e => formik.setFieldValue('email', e.nativeEvent.text)}
            onBlur={() => formik.setFieldTouched('email')}
            value={formik.values.email}
            caption={
              <Layout>
                <Text category="p2" status="danger">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : undefined}
                </Text>
              </Layout>
            }
          />
        </View>
        <View style={{width: 310}}>
          <Input
            placeholder="ที่อยู่"
            status="primary"
            id="address"
            size="large"
            onChange={e => formik.setFieldValue('address', e.nativeEvent.text)}
            onBlur={() => formik.setFieldTouched('address')}
            value={formik.values.address}
            caption={
              <Layout>
                <Text category="p2" status="danger">
                  {formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : undefined}
                </Text>
              </Layout>
            }
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
            สมัครสมาชิก
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

export default RegisterScreen;
