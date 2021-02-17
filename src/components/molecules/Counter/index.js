import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View  } from 'react-native';
import { IcBtnMin, IcBtnPlus } from '../../../assets';

const Counter = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IcBtnMin />
            </TouchableOpacity>
            <Text style={styles.value}>1</Text>
            <TouchableOpacity>
                <IcBtnPlus />
            </TouchableOpacity>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        marginHorizontal: 10,
        fontFamily: 'Poppind-Regular',
        color: '#020202'
    }
})
