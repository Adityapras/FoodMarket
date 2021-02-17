import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ( {buttonColor = 'black', textButtonColor = 'black', text, onPress} ) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
            <View style={styles.container(buttonColor)}>
                <Text style={styles.text(textButtonColor)}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container : (buttonColor) => ({
        backgroundColor : buttonColor,
        padding : 12,
        borderRadius : 8
    }),
    text : (textButtonColor) => ({
        fontSize : 14,
        fontFamily : 'Poppins-Regular',
        color : textButtonColor,
        textAlign : 'center',
        fontWeight : 'bold'
    }), 
})
