// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import {
//   Area,
//   IStore,
//   IStoreUpdateFormAndApiRequest,
//   RentalType,
//   areaSelect,
// } from '../interfaces/store.interface';
// import ImageSvgIcon from '../assets/icons/ImageSVG';
// import PickerComponents from '../components/PickerComponents';
// import {deleteStorePartyApi, getAreaStorePartyApi, updateStoreParty} from '../services/store.service';
// import {ApiResponse} from '../interfaces/gobal.interface';
// import {AuthContext} from '../contexts/AuthContext';
// import { useFocusEffect } from '@react-navigation/native';

// interface EditStoreProps {
//   navigation: any;
//   route: {
//     params: {
//       storeProps: IStore;
//     };
//   };
// }

// const rentalTypeSelect = [{value: RentalType.MONTH}, {value: RentalType.YEAR}];

// const EditStore: React.FC<EditStoreProps | any> = ({navigation, route}) => {
//   const {token, removeToken} = useContext(AuthContext);
//   const {storeProps} = route.params;
//   const [store, setStore] = useState<IStoreUpdateFormAndApiRequest>(storeProps);
//   const [listArea, setListArea] = useState<{value: Area}[]>();
  
//   const handleUpdateStore = async () => {
//     const storeUpdate: ApiResponse<any> = await updateStoreParty(store, token!);
//     if (!storeUpdate.status) {
//       return removeToken();
//     }
//     return navigation.navigate('CheckListStores');
//   };

//   const handleDeleteStore = async () => {
//     const storeDelete: ApiResponse<any> = await deleteStorePartyApi(
//       store.id,
//       token!,
//     );
//     if (!storeDelete.status) {
//       return removeToken();
//     }
//     return navigation.navigate('CheckListStores');
//   };

//   const fetchAreaStoreData = async () => {
//     const area: ApiResponse<Area> = await getAreaStorePartyApi(token!);
//     if (!area.status) {
//       return removeToken();
//     }
//     const areaCanSelect: {value: Area}[] = areaSelect.filter(
//       obj => !area.data.includes(obj.value),
//     );
//     areaCanSelect.unshift({ value: store.area });
//     areaCanSelect.sort((a, b) => a.value.localeCompare(b.value));
//     return setListArea(areaCanSelect);
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchAreaStoreData();
//     }, [navigation]),
//   );

//   return (
//     <View>
//       <View>
//         <Text>แก้ไข</Text>
//         <TouchableOpacity onPress={handleDeleteStore}>
//           <Text>ลบ</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <View>
//           {store?.imagePath ? (
//             <Image
//               source={{uri: store?.imagePath}}
//               style={{width: 200, height: 200}}
//             />
//           ) : (
//             <ImageSvgIcon />
//           )}
//         </View>
//         <View>
//           <View>
//             <Text>ชื่อร้านค้า</Text>
//           </View>
//           <View>
//             <TextInput
//               onChangeText={(text: string) =>
//                 setStore({...store!, storeName: text})
//               }
//               value={store?.storeName}
//             />
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>ชื่อ</Text>
//           </View>
//           <View>
//             <TextInput
//               onChangeText={(text: string) =>
//                 setStore({...store!, firstName: text})
//               }
//               value={store?.firstName}
//             />
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>นามสกุล</Text>
//           </View>
//           <View>
//             <TextInput
//               onChangeText={(text: string) =>
//                 setStore({...store!, lastName: text})
//               }
//               value={store?.lastName}
//             />
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>เบอร์ติดต่อ</Text>
//           </View>
//           <View>
//             <TextInput
//               onChangeText={(text: string) =>
//                 setStore({...store!, phoneNumber: text})
//               }
//               value={store?.phoneNumber}
//             />
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>ที่อยู่</Text>
//           </View>
//           <View>
//             <TextInput
//               onChangeText={(text: string) =>
//                 setStore({...store!, address: text})
//               }
//               value={store?.address}
//             />
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>โซน</Text>
//           </View>
//           <View>
//             <PickerComponents<Area>
//               value={store?.area!}
//               enumValues={listArea}
//               onChange={(value: Area) => setStore({...store!, area: value})}
//             />
//           </View>
//         </View>
//         <View>
//           <View>
//             <Text>ประเภท</Text>
//           </View>
//           <View>
//             <Text>เดือน</Text>
//           </View>
//           <View>
//             <PickerComponents<RentalType>
//               value={store.rentalType}
//               enumValues={rentalTypeSelect}
//               onChange={(value: RentalType) =>
//                 setStore({...store, rentalType: value})
//               }
//             />
//           </View>
//         </View>
//       </View>
//       <View>
//         <TouchableOpacity onPress={handleUpdateStore}>
//           <Text>แก้ไข</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default EditStore;

// const styles = StyleSheet.create({});
