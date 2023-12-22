import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  Area,
  IStoreCreateApiRequest,
  IStoreFormRegister,
  RentalType,
  areaSelect,
} from '../interfaces/store.interface';
import ImageSvgIcon from '../assets/icons/ImageSVG';
import PickerComponents from '../components/PickerComponents';
import {IRegisterForm} from '../interfaces/user.interface';
import {
  createStoreParty,
  getAreaStorePartyApi,
} from '../services/store.service';
import {AuthContext} from '../contexts/AuthContext';
import {ApiResponse} from '../interfaces/gobal.interface';
import {useFocusEffect} from '@react-navigation/native';

interface AddStoreProps {
  navigation: any;
}

const rentalTypeSelect = [{value: RentalType.MONTH}, {value: RentalType.YEAR}];

const AddStoreScreen: React.FC<AddStoreProps> = ({navigation}) => {
  const {token, removeToken} = useContext(AuthContext);
  const [store, setStore] = useState<IStoreFormRegister>({
    imagePath: '',
    storeName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    area: Area.A1,
    rentalType: RentalType.MONTH,
  });
  const [user, setUser] = useState<IRegisterForm>({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [listArea, setListArea] = useState<{value: Area}[]>();

  const handleCreateStore = async () => {
    const data: IStoreCreateApiRequest = {
      store: {...store},
      user: {...user},
    };
    const storeCreate: ApiResponse<any> = await createStoreParty(data, token!);
    if (!storeCreate.status) {
      return removeToken();
    }
    return navigation.navigate('CheckListStores');
  };

  const fetchAreaStoreData = async () => {
    const area: ApiResponse<Area> = await getAreaStorePartyApi(token!);
    if (!area.status) {
      return removeToken();
    }
    const areaCanSelect: {value: Area}[] = areaSelect.filter(
      obj => !area.data.includes(obj.value),
    );
    setStore({...store, area: areaCanSelect[0].value})
    return setListArea(areaCanSelect);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAreaStoreData();
    }, [navigation]),
  );

  return (
    <View>
      <View>
        <Text>เพิ่มร้านค้า</Text>
      </View>
      <View>
        <View>
          {store.imagePath ? (
            <Image
              source={{uri: store.imagePath}}
              style={{width: 200, height: 200}}
            />
          ) : (
            <ImageSvgIcon />
          )}
        </View>
        <View>
          <View>
            <Text>ชื่อร้านค้า</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text: string) =>
                setStore({...store, storeName: text})
              }
              value={store.storeName}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>ชื่อ</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text: string) =>
                setStore({...store, firstName: text})
              }
              value={store.firstName}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>นามสกุล</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text: string) =>
                setStore({...store, lastName: text})
              }
              value={store.lastName}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>เบอร์ติดต่อ</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text: string) =>
                setStore({...store, phoneNumber: text})
              }
              value={store.phoneNumber}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>ที่อยู่</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text: string) =>
                setStore({...store, address: text})
              }
              value={store.address}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>โซน</Text>
          </View>
          <View>
            <PickerComponents<Area>
              value={store.area}
              enumValues={listArea}
              onChange={(value: Area) => setStore({...store, area: value})}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>ประเภท</Text>
          </View>
          <View>
            <PickerComponents<RentalType>
              value={store.rentalType}
              enumValues={rentalTypeSelect}
              onChange={(value: RentalType) =>
                setStore({...store, rentalType: value})
              }
            />
          </View>
        </View>
        <View>
          <View>
            <Text>ชื่อผู้ใช้</Text>
          </View>
          <View>
            <TextInput
              value={user.username}
              onChangeText={(text: string) =>
                setUser({...user, username: text})
              }
              placeholder="ชื่อผู้ใช้"
            />
          </View>
        </View>
        <View>
          <View>
            <Text>รหัสผ่าน</Text>
          </View>
          <View>
            <TextInput
              value={user.password}
              onChangeText={(text: string) =>
                setUser({...user, password: text})
              }
              placeholder="รหัสผ่าน"
              secureTextEntry
            />
          </View>
        </View>
        <View>
          <View>
            <Text>ยื่นยันรหัสผ่าน</Text>
          </View>
          <View>
            <TextInput
              value={user.confirmPassword}
              onChangeText={(text: string) =>
                setUser({...user, confirmPassword: text})
              }
              placeholder="ยืนยันรหัสผ่าน"
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View></View>
      <View>
        <TouchableOpacity onPress={handleCreateStore}>
          <Text>เพิ่มร้านค้า</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddStoreScreen;

const styles = StyleSheet.create({});
