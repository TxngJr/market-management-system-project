import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const {removeToken} = useContext(AuthContext);
  return (
    <View>
      <View>
        <Text>MMS</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CheckListStores')}
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>ตรวจสอบรายชื่อร้านค้า</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>ตรวจสอบค่าเช่าล็อคสินค้า</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>คำนวณค่าเช่าล็อค</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>เก็บข้อมูลลูกค้าที่เช่าค้าขาย</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>ออกใบแจ้งหนี้ค่าเช่า ค่าน้ำค่าไฟ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>รายละเอียดราคา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MapStore')}
          style={{
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
          }}>
          <Text>แผนที่</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={removeToken}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
