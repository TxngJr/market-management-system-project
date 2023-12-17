import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Area, IStore, IStoreUpdateFormAndApiRequest } from '../interfaces/store.interface';
import ImageSvgIcon from '../assets/icons/ImageSVG';
import PickerComponents from '../components/PickerComponents';
import { updateStoreParty } from '../services/store.service';
import { ApiResponse } from '../interfaces/gobal.interface';
import { AuthContext } from '../contexts/AuthContext';

interface EditStoreProps {
    navigation: any;
    route: {
        params: {
            storeProps: IStore
        }
    }
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

const EditStore: React.FC<EditStoreProps | any> = ({ navigation, route }) => {
    const {token, removeToken} = useContext(AuthContext);
    const { storeProps } = route.params;
    const [store, setStore] = useState<IStoreUpdateFormAndApiRequest>(storeProps)

    const handleUpdateStore = async () => {
        const storeUpdate: ApiResponse<any> = await updateStoreParty(store,token!);
        if (!storeUpdate.status) {
            return removeToken();
        }
        return navigation.navigate('CheckListStores');
    };

    return (
        <View>
            <View>
                <Text>แก้ไข</Text>
            </View>
            <View>
                <View>
                    {store?.imagePath ?
                        <Image source={{ uri: store?.imagePath }}
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
                            onChangeText={(text: string) => setStore({ ...store!, storeName: text })}
                            value={store?.storeName}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>ชื่อ</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text: string) => setStore({ ...store!, firstName: text })}
                            value={store?.firstName}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>นามสกุล</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text: string) => setStore({ ...store!, lastName: text })}
                            value={store?.lastName}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>เบอร์ติดต่อ</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text: string) => setStore({ ...store!, phoneNumber: text })}
                            value={store?.phoneNumber}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>ที่อยู่</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text: string) => setStore({ ...store!, address: text })}
                            value={store?.address}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text>โซน</Text>
                    </View>
                    <View>
                        <PickerComponents<Area> value={store?.area!} enumValues={areaSelect} onChange={(value: Area) => setStore({ ...store!, area: value })} />
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
            </View>
            <View>
                <TouchableOpacity onPress={handleUpdateStore}><Text>แก้ไข</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default EditStore

const styles = StyleSheet.create({})