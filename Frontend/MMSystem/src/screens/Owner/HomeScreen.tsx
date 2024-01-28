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
import {Layout} from '@ui-kitten/components';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const {removeUser} = useContext(AuthContext);
  return (
    <Layout style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <LogoComponents />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <PersonSvgIcon />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, paddingVertical: 50}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CheckListStores')}
              style={{
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#D9D9D9',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <StoreSvgIcon />
              <Text style={{fontSize: 24, color: '#000000'}}>
                รายชื่อร้านค้า
              </Text>
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
              <Text style={{fontSize: 24, color: '#000000'}}>ค่าเช่า</Text>
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
              <Text style={{fontSize: 24, color: '#000000'}}>ราคา</Text>
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
              <Text style={{fontSize: 24, color: '#000000'}}>ชำระเงิน</Text>
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
              <Text style={{fontSize: 24, color: '#000000'}}>ผัง</Text>
            </TouchableOpacity>
            <View style={{flex: 1}} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={removeUser}
        style={{
          backgroundColor: '#398DA8',
          width: 180,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
        }}>
        <Text style={{fontSize: 32, color: '#000000'}}>ออกจากระบบ</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default HomeScreen;
