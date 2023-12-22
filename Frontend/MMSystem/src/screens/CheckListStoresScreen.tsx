import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {IStore, IStoreGetPartyApiResponse} from '../interfaces/store.interface';
import {getAreaStorePartyApi, getStorePartyApi} from '../services/store.service';
import {AuthContext} from '../contexts/AuthContext';
import {ApiResponse} from '../interfaces/gobal.interface';
import {useFocusEffect} from '@react-navigation/native';

interface CheckListStoresProps {
  navigation: any;
}

const CheckListStores: React.FC<CheckListStoresProps> = ({navigation}) => {
  const {token, removeToken} = useContext(AuthContext);
  const [listStore, setListStore] = useState<IStore[]>();

  const fetchStoreData = async () => {
    const stores: ApiResponse<IStoreGetPartyApiResponse> =
    await getStorePartyApi(token!);
    if (!stores.status) {
      return removeToken();
    }
    if (!Array.isArray(stores.data)) {
      return setListStore([stores.data]);
    }
    return setListStore(stores.data);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchStoreData();
    }, [navigation]),
  );

  return (
    <View>
      <View>
        <Text>รายชื่อร้านค้า</Text>
      </View>
      <View style={{height: 600}}>
        {listStore && (
          <ScrollView>
            {listStore?.map((store: IStore, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('EditStore', {storeProps: store})
                }>
                <View>
                  <Text>{store.storeName}</Text>
                  <Text>โซน {store.area}</Text>
                </View>
              </TouchableOpacity>
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
