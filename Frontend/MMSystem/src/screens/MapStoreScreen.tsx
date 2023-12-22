import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import {
    Area,
    areaA,
    areaB,
    areaC,
    areaD,
    areaE,
    areaF,
} from '../interfaces/store.interface';
import { ApiResponse } from '../interfaces/gobal.interface';
import { getAreaStorePartyApi } from '../services/store.service';
import { useFocusEffect } from '@react-navigation/native';

const MapStoreScreen: React.FC<any> = ({ navigation }) => {
    const { token, removeToken } = useContext(AuthContext);
    const [listArea, setListArea] = useState<{ value: Area }[]>();

    const fetchAreaStoreData = async () => {
        const area: ApiResponse<Area> = await getAreaStorePartyApi(token!);
        if (!area.status) {
            return removeToken();
        }
        return setListArea(area.data);
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchAreaStoreData();
        }, [navigation]),
    );

    const isValueInData = (value: any) => listArea?.includes(value);

    return (
        <View style={styles.container}>
            <View style={styles.containerHeaderText}>
                <Text style={{ fontSize: 36, textAlign: 'center', color: '#000000' }}>
                    ผังตลาด
                </Text>
            </View>
            <View
                style={[styles.containerWrapGroup]}>
                <View style={[styles.containerAF]}>
                    {areaA.map((area, index) => (
                        <View
                            key={index}
                            style={[
                                { backgroundColor: '#50F028' },
                                isValueInData(area.value) && { backgroundColor: '#0F9900' },
                                styles.blockStore,
                            ]}>
                            <Text>{area.value}</Text>
                        </View>
                    ))}
                </View>
                <View style={[styles.containerBCDE]}>
                    {areaB.map((area, index) => (
                        <View
                            key={index}
                            style={[
                                { backgroundColor: '#05A08D' },
                                isValueInData(area.value) && { backgroundColor: '#0ACAD1' },
                                styles.blockStore,
                            ]}>
                            <Text>{area.value}</Text>
                        </View>
                    ))}
                </View>
                <View style={[{ marginBottom: 15 }, styles.containerBCDE]}>
                    {areaC.map((area, index) => (
                        <View
                            key={index}
                            style={[
                                { backgroundColor: '#F24444' },
                                isValueInData(area.value) && { backgroundColor: '#C70A0A' },
                                styles.blockStore,
                            ]}>
                            <Text>{area.value}</Text>
                        </View>
                    ))}
                </View>
                <View style={[styles.containerBCDE]}>
                    {areaD.map((area, index) => (
                        <View
                            key={index}
                            style={[
                                { backgroundColor: '#EAE334' },
                                isValueInData(area.value) && { backgroundColor: '#ADB307' },
                                styles.blockStore,
                            ]}>
                            <Text>{area.value}</Text>
                        </View>
                    ))}
                </View>
                <View style={[{ marginBottom: 15 }, styles.containerBCDE]}>
                    {areaE.map((area, index) => (
                        <View
                            key={index}
                            style={[
                                { backgroundColor: '#BE8EC6' },
                                isValueInData(area.value) && { backgroundColor: '#C145D1' },
                                styles.blockStore,
                            ]}>
                            <Text>{area.value}</Text>
                        </View>
                    ))}
                </View>
                <View
                    style={[styles.containerAF]}>
                    {areaF.map((area, index) => (
                        <View
                            key={index}
                            style={[
                                { backgroundColor: '#4E139A' },
                                isValueInData(area.value) && { backgroundColor: '#8E1FCF' },
                                styles.blockStore,
                            ]}>
                            <Text>{area.value}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    containerHeaderText: {
        padding: 5,
        width: 238,
        height: 61,
        borderRadius: 45,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },
    containerWrapGroup: {
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        marginHorizontal: 20,
        paddingTop: 8,
        paddingHorizontal: 15,
        width: 370,
        height: 700,
    },
    containerBCDE: {
        height: 275,
        flexWrap: 'wrap',
    },
    containerAF: {
        flexWrap: 'wrap', 
        flexDirection: 'row'
    },
    blockStore: {
        width: 60,
        height: 60,
        margin: 4,
    },
});

export default MapStoreScreen;
