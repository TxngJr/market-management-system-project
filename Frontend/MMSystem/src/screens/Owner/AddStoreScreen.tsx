// import {
//   Alert,
//   StyleSheet,

//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useFocusEffect} from '@react-navigation/native';
// import {Button, Input, Text} from '@rneui/themed';
// import LogoComponents from '../../components/LogoComponents';
// import PersonSvgIcon from '../../assets/icons/PersonSVG';
// import {Area, areaSelect} from '../../interfaces/store.interface';
// import {useFormik} from 'formik';
// import * as Yup from 'yup';
// import {axiosInstance} from '../../axiosRequest';
// import {IResponseApiDefault} from '../../interfaces/responseApi.interface';

// interface AddStoreProps {
//   navigation: any;
// }

// interface IStoreForm {
//   //user
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
//   email: string;
//   address: string;
//   phoneNumber: string;
//   //store
//   imagePath?: string;
//   name: string;
//   area: Area.A1;
//   details?: string;
// }

// const validationSchema = Yup.object({
//   //user
//   firstName: Yup.string()
//     .min(2, 'กรุณากรอกอักขระ 2 ตัวขึ้นไป')
//     .max(50, 'กรุณากรอกอักขระไม่เกิน 50 ตัวอักษร')
//     .required('กรุณากรอกชื่อจริง'),
//   lastName: Yup.string()
//     .min(2, 'กรุณากรอกอักขระ 2 ตัวขึ้นไป')
//     .max(50, 'กรุณากรอกอักขระไม่เกิน 50 ตัวอักษร')
//     .required('กรุณากรอกนามสกุล'),
//   username: Yup.string()
//     .min(3, 'กรุณากรอกอักขระ 3 ตัวขึ้นไป')
//     .max(30, 'กรุณากรอกอักขระไม่เกิน 30 ตัวอักษร')
//     .required('กรุณากรอกชื่อผู้ใช้'),
//   password: Yup.string()
//     .min(8, 'กรุณากรอกอักขระ 8 ตัวขึ้นไป')
//     .required('กรุณากรอกรหัสผ่าน'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null!], 'รหัสผ่านไม่ตรงกัน')
//     .required('กรุณากรอกรหัสผ่านอีกครั้ง'),
//   email: Yup.string().email('กรุณากรอกอีเมล').required('กรุณากรอกอีเมล'),
//   address: Yup.string().required('กรุณากรอกที่อยู่'),
//   phoneNumber: Yup.string()
//     .matches(/^\d{10}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')
//     .required('กรุณากรอกเบอร์โทรศัพท์'),
//   //store
//   imagePath: Yup.string(),
//   name: Yup.string()
//     .min(3, 'กรุณากรอกอักขระ 3 ตัวขึ้นไป')
//     .max(30, 'กรุณากรอกอักขระไม่เกิน 30 ตัวอักษร')
//     .required('กรุณากรอกชื่อร้านค้า'),
//   area: Yup.string().required('กรุณาเลือกโซน'),
//   details: Yup.string(),
// });

// const AddStoreScreen: React.FC<AddStoreProps> = ({navigation}) => {
//   const [listArea, setListArea] = useState<{value: Area}[]>();
//   const formik = useFormik({
//     initialValues: {
//       //user
//       firstName: '',
//       lastName: '',
//       username: '',
//       password: '',
//       email: '',
//       address: '',
//       phoneNumber: '',
//       //store
//       imagePath: '',
//       name: '',
//       area: Area.A1,
//       details: '',
//     } as IStoreForm,
//     validationSchema: validationSchema,
//     onSubmit: async (values: IStoreForm) => {
//       const response = await axiosInstance.post<IResponseApiDefault>(
//         '/stores/create-store',
//         {
//           //user
//           firstName: values.firstName,
//           lastName: values.lastName,
//           username: values.username,
//           password: values.password,
//           email: values.email,
//           address: values.address,
//           phoneNumber: values.phoneNumber,
//           //store
//           imagePath: '',
//           name: values.name,
//           area: values.area,
//           details: values.details,
//         },
//       );
//       if (response.data) {
//         Alert.alert('สมัครสมาชิกสำเร็จ');
//         navigation.navigate('CheckListStores');
//       } else {
//         Alert.alert('มีบางอย่างผิดพลาด');
//       }
//     },
//   });

//   const fetchAreaStoreData = async () => {
//     const response = await axiosInstance.get<{area: Area}[]>(
//       '/stores/store-area-has',
//     );
//     if (response.data) {
//       const filteredAreas = areaSelect.filter(areaObj => {
//         return !response.data?.some(item => item.area === areaObj.value);
//       });
//       setListArea(filteredAreas);
//     } else {
//       Alert.alert('มีบางอย่างผิดพลาด');
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchAreaStoreData();
//     }, [navigation]),
//   );

//   return (
//     <View
//       style={{
//         paddingHorizontal: 20,
//         paddingVertical: 5,
//         backgroundColor: '#ffffff',
//         flex: 1,
//       }}>
//       <LogoComponents />
//       <View style={{alignItems: 'center', flex: 1}}>
//         <PersonSvgIcon />
//         <Text h4 style={{fontSize: 28, color: '#000000'}}>
//           สร้างบัญชีใหม่
//         </Text>
//         <View style={{paddingTop: 10, width: 310}}>
//           <Input
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
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="รหัสผ่าน"
//             id="password"
//             onChange={e => formik.setFieldValue('password', e.nativeEvent.text)}
//             onBlur={() => formik.setFieldTouched('password')}
//             value={formik.values.password}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.password && formik.errors.password
//                 ? formik.errors.password
//                 : undefined
//             }
//             secureTextEntry={true}
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="ยืนยันรหัสผ่าน"
//             id="confirmPassword"
//             onChange={e =>
//               formik.setFieldValue('confirmPassword', e.nativeEvent.text)
//             }
//             onBlur={() => formik.setFieldTouched('confirmPassword')}
//             value={formik.values.confirmPassword}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.confirmPassword && formik.errors.confirmPassword
//                 ? formik.errors.confirmPassword
//                 : undefined
//             }
//             secureTextEntry={true}
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
//             style={{fontSize: 20, paddingLeft: 10, padding: 0}}
//             placeholder="อีเมล"
//             id="email"
//             onChange={e => formik.setFieldValue('email', e.nativeEvent.text)}
//             onBlur={() => formik.setFieldTouched('email')}
//             value={formik.values.email}
//             errorStyle={{color: 'red'}}
//             errorMessage={
//               formik.touched.email && formik.errors.email
//                 ? formik.errors.email
//                 : undefined
//             }
//           />
//         </View>
//         <View style={{width: 310}}>
//           <Input
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
//         <View style={{width: 310}}>
//           <Input
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
//         <View style={{paddingTop: 5}}>
//           <Button
//             buttonStyle={{
//               width: 200,
//               borderRadius: 10,
//             }}
//             titleStyle={{fontWeight: 'bold', fontSize: 23}}
//             size="md"
//             onPress={e => formik.handleSubmit()}>
//             สมัครสมาชิก
//           </Button>
//         </View>
//         <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={{fontSize: 20}}>มีบัญชีแล้ว</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//     // <View>
//     //   <View>
//     //     <Text>เพิ่มร้านค้า</Text>
//     //   </View>
//     //   <View>
//     //     <View>
//     //       {store.imagePath ? (
//     //         <Image
//     //           source={{uri: store.imagePath}}
//     //           style={{width: 200, height: 200}}
//     //         />
//     //       ) : (
//     //         <ImageSvgIcon />
//     //       )}
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>ชื่อร้านค้า</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           onChangeText={(text: string) =>
//     //             setStore({...store, storeName: text})
//     //           }
//     //           value={store.storeName}
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>ชื่อ</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           onChangeText={(text: string) =>
//     //             setStore({...store, firstName: text})
//     //           }
//     //           value={store.firstName}
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>นามสกุล</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           onChangeText={(text: string) =>
//     //             setStore({...store, lastName: text})
//     //           }
//     //           value={store.lastName}
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>เบอร์ติดต่อ</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           onChangeText={(text: string) =>
//     //             setStore({...store, phoneNumber: text})
//     //           }
//     //           value={store.phoneNumber}
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>ที่อยู่</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           onChangeText={(text: string) =>
//     //             setStore({...store, address: text})
//     //           }
//     //           value={store.address}
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>โซน</Text>
//     //       </View>
//     //       <View>
//     //         <PickerComponents<Area>
//     //           value={store.area}
//     //           enumValues={listArea}
//     //           onChange={(value: Area) => setStore({...store, area: value})}
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>ประเภท</Text>
//     //       </View>
//     //       <View>
//     //         <PickerComponents<RentalType>
//     //           value={store.rentalType}
//     //           enumValues={rentalTypeSelect}
//     //           onChange={(value: RentalType) =>
//     //             setStore({...store, rentalType: value})
//     //           }
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>ชื่อผู้ใช้</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           value={user.username}
//     //           onChangeText={(text: string) =>
//     //             setUser({...user, username: text})
//     //           }
//     //           placeholder="ชื่อผู้ใช้"
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>รหัสผ่าน</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           value={user.password}
//     //           onChangeText={(text: string) =>
//     //             setUser({...user, password: text})
//     //           }
//     //           placeholder="รหัสผ่าน"
//     //           secureTextEntry
//     //         />
//     //       </View>
//     //     </View>
//     //     <View>
//     //       <View>
//     //         <Text>ยื่นยันรหัสผ่าน</Text>
//     //       </View>
//     //       <View>
//     //         <TextInput
//     //           value={user.confirmPassword}
//     //           onChangeText={(text: string) =>
//     //             setUser({...user, confirmPassword: text})
//     //           }
//     //           placeholder="ยืนยันรหัสผ่าน"
//     //           secureTextEntry
//     //         />
//     //       </View>
//     //     </View>
//     //   </View>
//     //   <View></View>
//     //   <View>
//     //     <TouchableOpacity onPress={handleCreateStore}>
//     //       <Text>เพิ่มร้านค้า</Text>
//     //     </TouchableOpacity>
//     //   </View>
//     // </View>
//   );
// };

// export default AddStoreScreen;

// const styles = StyleSheet.create({});
