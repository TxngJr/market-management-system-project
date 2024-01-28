// import {Alert, View} from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import {AuthContext} from '../../contexts/AuthContext';
// import {useFormik} from 'formik';
// import * as Yup from 'yup';
// import {axiosInstance} from '../../axiosRequest';
// import LogoComponents from '../../components/LogoComponents';
// import PersonSvgIcon from '../../assets/icons/PersonSVG';
// import { IResponseApiDefault } from '../../interfaces/responseApi.interface';
// import { Button } from '@ui-kitten/components';

// type Props = {
//   navigation: any;
// };

// interface IUserForm {
//   username: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   address: string;
// }

// const validationSchema = Yup.object({
//   username: Yup.string()
//     .min(3, 'กรุณากรอกอักขระ 3 ตัวขึ้นไป')
//     .max(30, 'กรุณากรอกอักขระไม่เกิน 30 ตัวอักษร')
//     .required('กรุณากรอกชื่อผู้ใช้'),
//   firstName: Yup.string()
//     .min(2, 'กรุณากรอกอักขระ 2 ตัวขึ้นไป')
//     .max(50, 'กรุณากรอกอักขระไม่เกิน 50 ตัวอักษร')
//     .required('กรุณากรอกชื่อจริง'),
//   lastName: Yup.string()
//     .min(2, 'กรุณากรอกอักขระ 2 ตัวขึ้นไป')
//     .max(50, 'กรุณากรอกอักขระไม่เกิน 50 ตัวอักษร')
//     .required('กรุณากรอกนามสกุล'),
//   phoneNumber: Yup.string()
//     .matches(/^\d{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')
//     .required('กรุณากรอกเบอร์โทรศัพท์'),
//   address: Yup.string().required('กรุณากรอกที่อยู่'),
// });

// const ProfileScreen = (props: Props) => {
//   const {user} = useContext(AuthContext);
//   const [isEdit, setIsEdit] = useState<boolean>(false);
//   useEffect(() => {
//     const fetchData = () => {
//       formik.setFieldValue('username', user?.username!);
//       formik.setFieldValue('firstName', user?.firstName!);
//       formik.setFieldValue('lastName', user?.lastName!);
//       formik.setFieldValue('phoneNumber', user?.phoneNumber!);
//       formik.setFieldValue('address', user?.address!);
//     };
//     fetchData();
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       address: '',
//     } as IUserForm,
//     validationSchema: validationSchema,
//     onSubmit: async (values: IUserForm) => {
//       const response = await axiosInstance.put<IResponseApiDefault>('/users/self', {
//         imagePath: '',
//         username: values.username,
//         firstName: values.firstName,
//         lastName: values.lastName,
//         phoneNumber: values.phoneNumber,
//         address: values.address,
//       });
//       if (response.data) {
//         Alert.alert('แก้ไขข้อมูลสำเร็จ');
//         setIsEdit(false);
//       } else {
//         Alert.alert('แก้ไขข้อมูลไม่สำเร็จ');
//       }
//     },
//   });

//   return (
//     <View
//       style={{
//         paddingHorizontal: 20,
//         paddingVertical: 30,
//         backgroundColor: '#ffffff',
//         flex: 1,
//       }}>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <LogoComponents />
//         <Button
//           color={isEdit ? 'error' : 'warning'}
//           buttonStyle={{
//             width: 90,
//             borderRadius: 10,
//           }}
//           titleStyle={{fontWeight: 'bold', fontSize: 23}}
//           size="sm"
//           onPress={e => setIsEdit(!isEdit)}>
//           {isEdit ? 'ยกเลิก' : 'แก้ไข'}
//         </Button>
//       </View>
//       <View style={{alignItems: 'center', flex: 1}}>
//         <PersonSvgIcon />
//         <Text h4 style={{fontSize: 28, color: '#000000'}}>
//           แก้ไขข้อมูลส่วนตัว
//         </Text>
//         <View style={{paddingTop: 10, width: 310}}>
//           <Input
//             disabled={true}
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="ชื่อผู้ใช้"
//             id="username"
//             onChange={e => formik.setFieldValue('username', e.nativeEvent.text)}
//             onBlur={() => formik.setFieldTouched('username')}
//             value={formik.values.username}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.username && formik.errors.username
//                 ? formik.errors.username
//                 : undefined
//             }
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
//             disabled={!isEdit}
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="ชื่อจริง"
//             id="firstName"
//             onChange={e =>
//               formik.setFieldValue('firstName', e.nativeEvent.text)
//             }
//             onBlur={() => formik.setFieldTouched('firstName')}
//             value={formik.values.firstName}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.firstName && formik.errors.firstName
//                 ? formik.errors.firstName
//                 : undefined
//             }
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
//             disabled={!isEdit}
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="นามสกุล"
//             id="lastName"
//             onChange={e => formik.setFieldValue('lastName', e.nativeEvent.text)}
//             onBlur={() => formik.setFieldTouched('lastName')}
//             value={formik.values.lastName}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.lastName && formik.errors.lastName
//                 ? formik.errors.lastName
//                 : undefined
//             }
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
//             disabled={!isEdit}
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="เบอร์โทรศัพท์"
//             id="phoneNumber"
//             onChange={e =>
//               formik.setFieldValue('phoneNumber', e.nativeEvent.text)
//             }
//             onBlur={() => formik.setFieldTouched('phoneNumber')}
//             value={formik.values.phoneNumber}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.phoneNumber && formik.errors.phoneNumber
//                 ? formik.errors.phoneNumber
//                 : undefined
//             }
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
//             disabled={!isEdit}
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="ที่อยู่"
//             id="address"
//             onChange={e => formik.setFieldValue('address', e.nativeEvent.text)}
//             onBlur={() => formik.setFieldTouched('address')}
//             value={formik.values.address}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.address && formik.errors.address
//                 ? formik.errors.address
//                 : undefined
//             }
//           />
//         </View>
//         <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 30}}>
//           <Button
//             color={isEdit ? 'success' : 'warning'}
//             buttonStyle={{
//               width: 300,
//               borderRadius: 10,
//             }}
//             titleStyle={{fontWeight: 'bold', fontSize: 23}}
//             size="md"
//             onPress={e =>
//               isEdit ? formik.handleSubmit() : props.navigation.goBack()
//             }>
//             {isEdit ? ' บันทึก' : 'ย้อนกลับ'}
//           </Button>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ProfileScreen;
