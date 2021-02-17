import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputReact} from 'react-native'

const TextInput = ({label, placeholder}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputReact placeholder={placeholder} style={styles.TextInputReact}/>
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    label : {
        fontSize : 14,
        fontFamily: 'Poppins-Regular',
        color : '#020202',
    },
    TextInputReact : {
     borderWidth : 1,
     borderColor : '#020202',
     borderRadius : 8,
     padding: 10,
    }
})
