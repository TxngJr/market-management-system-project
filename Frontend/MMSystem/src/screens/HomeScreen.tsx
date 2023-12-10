import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native';

// import { getUserData } from '../services/api';  

const HomeScreen: React.FC<any> = ({ navigation }) => {

    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // const userData = await getUserData();
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    navigation.navigate('Login');
                }
                console.log(token)
                const userData = { name: "hello", email: "txngjr@gmail.com" };
                setUser(userData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <View>
            <View>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }}>
                    <Text>ตรวจสอบรายชื่อร้านค้า</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }}>
                    <Text>ตรวจสอบค่าเช่าล็อคสินค้า</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }}>
                    <Text>คำนวณค่าเช่าล็อค</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }}>
                    <Text>เก็บข้อมูลลูกค้าที่เช่าค้าขาย</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }}>
                    <Text>ออกใบแจ้งหนี้ค่าเช่า ค่าน้ำค่าไฟ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }}>
                    <Text>รายละเอียดราคา</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;