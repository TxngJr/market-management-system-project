import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { IStore, IStoreGetPartyApiResponse } from '../interfaces/store.interface';
import EditSvgIcon from '../assets/icons/EditSVG';
import DeleteSvgIcon from '../assets/icons/DeleteSVG';
import { deleteStorePartyApi, getStorePartyApi } from '../services/store.service';
import { AuthContext } from '../contexts/AuthContext';
import { ApiResponse } from '../interfaces/gobal.interface';
import { useFocusEffect } from '@react-navigation/native';

interface CheckListStoresProps {
  navigation: any;
}

const CheckListStores: React.FC<CheckListStoresProps> = ({ navigation }) => {
  const { token, removeToken } = useContext(AuthContext);
  const [listStore, setListStore] = useState<IStore[]>();

  // useEffect(() => {
  //   const fetchStoreData = async () => {
  //     const stores: ApiResponse<IStoreGetPartyApiResponse> =
  //       await getStorePartyApi(token!);
  //     if (!stores.status) {
  //       return removeToken();
  //     }
  //     console.log("new")
  //     return setListStore(stores.data);
  //   };
  //   fetchStoreData();
  // }, []);

  const fetchStoreData = async () => {
    const stores: ApiResponse<IStoreGetPartyApiResponse> =
      await getStorePartyApi(token!);
    if (!stores.status) {
      return removeToken();
    }
    return setListStore(stores.data);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchStoreData();
    }, [navigation])
  );

  const handleDeleteStore = async (id: number) => {
    const storeDelete: ApiResponse<any> =
      await deleteStorePartyApi(id, token!);
    if (!storeDelete.status) {
      return removeToken();
    }
    return fetchStoreData();
  };

  return (
    <View>
      <View>
        <Text>รายชื่อร้านค้า</Text>
      </View>
      <View style={{ height: 600 }}>
        {listStore && (
          <ScrollView>
            {listStore?.map((store: IStore, index) => (
              <View key={index}>
                <View>
                  <Text>{store.storeName}</Text>
                  <Text>{store.phoneNumber}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditStore', { storeProps: store })
                  }>
                  <EditSvgIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteStore(store.id)}>
                  <DeleteSvgIcon />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('AddStore')}>
          <Text>เพิ่มร้านค้า</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckListStores;

const styles = StyleSheet.create({});
