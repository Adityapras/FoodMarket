import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Select = ( {label, value, onSelectChange} ) => {
    return (
        <View>
            <Text style={styles.label}>{ label }</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) => {
                        onSelectChange(itemValue)
                    }}
                >
                    <Picker.Item label="Jakarta" value="Jakarta" />
                    <Picker.Item label="Bandung" value="Bandung" />
                    <Picker.Item label="Surabaya" value="Surabaya" />
                </Picker>
            </View>
        </View>
    )
}

export default Select;

const styles = StyleSheet.create({
    label : {
        fontSize : 14,
        fontFamily: 'Poppins-Regular',
        color : '#020202',
    },
    input : {
     borderWidth : 1,
     borderColor : '#020202',
     borderRadius : 8,
     paddingHorizontal:2,
     paddingVertical:0
    }
})
