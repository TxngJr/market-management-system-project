import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {IStore} from '../../interfaces/store.interface';
import {Text, Divider, Button} from '@rneui/themed';
import {axiosInstance} from '../../axiosRequest';
import ArrowLeftSvgIcon from '../../assets/icons/ArrowLeftSVG';

interface CheckListStoresProps {
  navigation: any;
}

const CheckListStores: React.FC<CheckListStoresProps> = ({navigation}) => {
  const [listStores, setListStores] = useState<IStore[]>();

  const fetchStoreData = async () => {
    const response = await axiosInstance.get('/stores/get-stores');
    setListStores(response.data);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchStoreData();
    }, [navigation]),
  );

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#ffffff',
        flex: 1,
      }}>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <ArrowLeftSvgIcon />
        </TouchableOpacity>
        <Text h3>รายชื่อร้านค้า</Text>
      </View>
      <View style={{flex: 9,paddingHorizontal:30}}>
        {listStores && (
          <ScrollView>
            {listStores?.map((store: IStore, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('EditStore', {storeProps: store})
                }>
                <View>
                  <Text h4>{store.name}</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    โซน {store.area.toUpperCase()}
                  </Text>
                </View>
                <Divider />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button
          buttonStyle={{
            width: 200,
            borderRadius: 10,
          }}
          titleStyle={{fontWeight: 'bold', fontSize: 23}}
          size="md"
          onPress={e => navigation.navigate('AddStore')}>
          เพิ่มร้านค้า
        </Button>
      </View>
    </View>
  );
};

export default CheckListStores;

const styles = StyleSheet.create({});
