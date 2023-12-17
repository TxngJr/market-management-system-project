import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Area, IStoreCreateApiRequest, IStoreFormRegister } from '../interfaces/store.interface';
import ImageSvgIcon from '../assets/icons/ImageSVG';
import PickerComponents from '../components/PickerComponents';
import { IRegisterForm } from '../interfaces/user.interface';
import { createStoreParty } from '../services/store.service';
import { AuthContext } from '../contexts/AuthContext';
import { ApiResponse } from '../interfaces/gobal.interface';

interface AddStoreProps {
    navigation: any;
}

const areaSelect = [
    { value: Area.A1 }, { value: Area.A2 }, { value: Area.A3 }, { value: Area.A4 }, { value: Area.A5 },
    { value: Area.B1 }, { value: Area.B2 }, { value: Area.B3 }, { value: Area.B4 }, { value: Area.B5 },
    { value: Area.B6 }, { value: Area.B7 }, { value: Area.B8 }, { value: Area.C1 }, { value: Area.C2 },
    { value: Area.C3 }, { value: Area.C4 }, { value: Area.C5 }, { value: Area.C6 }, { value: Area.C7 },
    { value: Area.C8 }, { value: Area.D1 }, { value: Area.D2 }, { value: Area.D3 }, { value: Area.D4 },
    { value: Area.D5 }, { value: Area.D6 }, { value: Area.D7 }, { value: Area.D8 }, { value: Area.E1 },
    { value: Area.E2 }, { value: Area.E3 }, { value: Area.E4 }, { value: Area.E5 }, { value: Area.E6 },
    { value: Area.E7 }, { value: Area.E8 }, { value: Area.F1 }, { value: Area.F2 }, { value: Area.F3 },
    { value: Area.F4 }, { value: Area.F5 },
]

const AddStoreScreen: React.FC<AddStoreProps> = ({ navigation }) => {
    const { token, removeToken } = useContext(AuthContext);
    const [store, setStore] = useState<IStoreFormRegister>({
        imagePath: "",
        storeName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        area: Area.A1,
    })
    const [user, setUser] = useState<IRegisterForm>({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleCreateStore = async () => {
        const data: IStoreCreateApiRequest = {
            store: { ...store },
            user: { ...user }
        }
        const storeCreate: ApiResponse<any> = await createStoreParty(data, token!)
        if (!storeCreate.status) {
            return removeToken();
        }
        return navigation.navigate('CheckListStores');
    }

    return (
        <View>
            <View>
                <Text>เพิ่มร้านค้า</Text>
            </View>
            <View>
                <View>
                    {store.imagePath ?
                        <Image source={{ uri: store.imagePath }}
                            style={{ width: 200, height: 200 }}
                        />
                        : <ImageSvgIcon />
                    }
                </View>
                <View>
                    <View>
                        <Text>ชื่อร้านค้า</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text: string) => setStore({ ...store, storeName: text })}
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
                            onChangeText={(text: string) => setStore({ ...store, firstName: text })}
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
                            onChangeText={(text: string) => setStore({ ...store, lastName: text })}
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
                            onChangeText={(text: string) => setStore({ ...store, phoneNumber: text })}
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
                            onChangeText={(text: string) => setStore({ ...store, address: text })}
                            value={store.address}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>โซน</Text>
                    </View>
                    <View>
                        <PickerComponents<Area> value={store.area} enumValues={areaSelect} onChange={(value: Area) => setStore({ ...store, area: value })} />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>ประเภท</Text>
                    </View>
                    <View>
                        <Text>เดือน</Text>
                        {/* Mark */}
                    </View>
                </View>
                <View>
                    <View>
                        <Text>ชื่อผู้ใช้</Text>
                    </View>
                    <View>
                        <TextInput
                            value={user.username}
                            onChangeText={(text: string) => setUser({ ...user, username: text })}
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
                            onChangeText={(text: string) => setUser({ ...user, password: text })}
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
                            onChangeText={(text: string) => setUser({ ...user, confirmPassword: text })}
                            placeholder="ยืนยันรหัสผ่าน"
                            secureTextEntry
                        />
                    </View>
                </View>
            </View>
            <View>
            </View>
            <View>
                <TouchableOpacity onPress={handleCreateStore}><Text>เพิ่มร้านค้า</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default AddStoreScreen

const styles = StyleSheet.create({})