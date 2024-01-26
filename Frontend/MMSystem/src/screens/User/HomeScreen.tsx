import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import LogoComponents from '../../components/LogoComponents';
import StoreSvgIcon from '../../assets/icons/StoreSVG';
import CalSvgIcon from '../../assets/icons/CalSVG';
import PersonSvgIcon from '../../assets/icons/PersonSVG';
import NoteSvgIcon from '../../assets/icons/NoteSVG';
import CardMoneySvgIcon from '../../assets/icons/CardMoneySVG';
import MapSvgIcon from '../../assets/icons/MapSVG';

const HomeScreen: React.FC<any> = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <LogoComponents />
        <PersonSvgIcon />
      </View>
      <View style={{flex: 1, paddingVertical: 50}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('CheckListStores')}
              style={{
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#D9D9D9',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <StoreSvgIcon />
              <Text style={{fontSize: 24,color:"#000000"}}>รายชื่อร้านค้า</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('CheckListStores')}
              style={{
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#398DA8',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <CalSvgIcon />
              <Text style={{fontSize: 24,color:"#000000"}}>ค่าเช่า</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('CheckListStores')}
              style={{
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#398DA8',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <NoteSvgIcon />
              <Text style={{fontSize: 24,color:"#000000"}}>ราคา</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('CheckListStores')}
              style={{
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#D9D9D9',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <CardMoneySvgIcon />
              <Text style={{fontSize: 24,color:"#000000"}}>ชำระเงิน</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('CheckListStores')}
              style={{
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#D9D9D9',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <MapSvgIcon />
              <Text style={{fontSize: 24,color:"#000000"}}>ผัง</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
