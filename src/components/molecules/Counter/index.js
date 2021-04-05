import React, {useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View  } from 'react-native';
import { IcBtnMin, IcBtnPlus } from '../../../assets';

const Counter = ( {onValueChange} ) => {

    const [value, setValue] = useState(1);
    const onCount = (type) => {
        let result = value;
        
        if (type === 'plus') {
            result = value + 1;
        }

        if (type === 'minus') {
            if (value > 1) {
                result = value - 1;
            }
        }
        setValue(result);
        onValueChange(result);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onCount('minus') }>
                <IcBtnMin />
            </TouchableOpacity>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity onPress={() => onCount('plus') }>
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
