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
  firstName: string;
  lastName: string;
  email: string;
  address: string;
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
  email: Yup.string().email('กรุณากรอกอีเมล').required('กรุณากรอกอีเมล'),
  address: Yup.string().required('กรุณากรอกที่อยู่'),
});

const RegisterForm2Screen: React.FC<Props> = ({route, navigation}: any) => {
  const {username, password, phoneNumber} = route.params;
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
    } as IRegisterForm,
    validationSchema: validationSchema,
    onSubmit: async (values: IRegisterForm) => {
      const response = await axiosInstance.post<IResponseApiDefault>(
        '/users/register',
        {
          imagePath: '',
          firstName: values.firstName,
          lastName: values.lastName,
          username,
          password,
          email: values.email,
          address: values.address,
          phoneNumber,
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
      <View style={{alignItems: 'center', flex: 1}}>
        <LogoSvgIcon size={300} />
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

export default RegisterForm2Screen;
