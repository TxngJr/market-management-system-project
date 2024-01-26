import {Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/AuthContext';

type Props = {
  navigation:any
};

const ProfileScreen = (props: Props) => {
  const {user} = useContext(AuthContext);
  const [formUser, setFormUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
  });

  useEffect(() => {
    const fetchData = () => {
      setFormUser({
        username: user?.username!,
        firstName: user?.firstName!,
        lastName: user?.lastName!,
        phoneNumber: user?.phoneNumber!,
        address: user?.address!,
      });
    };
    fetchData();
  }, []);
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#ffffff',
        flex: 1,
      }}>
      <Text style={{fontSize: 40, color: '#000000'}}>ข้อมูลผู้ใช้</Text>
      <View style={{flex: 1, paddingVertical: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, color: '#000000', marginRight: 50}}>
            ชื่อผู้ใช้
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
              width: 210,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={formUser?.username}
            onChangeText={(text: string) =>
              setFormUser({...formUser!, username: text})
            }
            placeholder="ชื่อผู้ใช้"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: '#000000', marginRight: 50}}>
            ชื่อ
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
              width: 210,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={formUser?.firstName}
            onChangeText={(text: string) =>
              setFormUser({...formUser!, firstName: text})
            }
            placeholder="ชื่อ"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: '#000000', marginRight: 50}}>
            นามสกุล
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
              width: 210,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={formUser?.lastName}
            onChangeText={(text: string) =>
              setFormUser({...formUser!, lastName: text})
            }
            placeholder="นามสกุล"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: '#000000', marginRight: 50}}>
            เบอร์ติดต่อ
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
              width: 210,
              textAlign: 'center',
              fontSize: 24,
            }}
            value={formUser?.phoneNumber}
            onChangeText={(text: string) =>
              setFormUser({...formUser!, phoneNumber: text})
            }
            placeholder="เบอร์ติดต่อ"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: '#000000', marginRight: 50}}>
            ที่อยู่
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: '#D9D9D9',
              width: 210,
              textAlign: 'center',
              fontSize: 24,
            }}
            multiline
            value={formUser?.address}
            onChangeText={(text: string) =>
              setFormUser({...formUser!, address: text})
            }
            placeholder="ที่อยู่"
          />
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <TouchableOpacity
        onPress={() => props.navigation.goBack()}
            style={{
              backgroundColor: '#EAE334',
              width: 300,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text style={{fontSize: 32, color: '#000000'}}>ย้อนกลับ</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
