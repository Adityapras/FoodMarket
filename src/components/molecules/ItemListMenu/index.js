import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IcNext } from '../../../assets';

const ItemListMenu = ( {title,  onPress} ) => {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View  style={styles.content}>
               <Text style={styles.title}>{ title }</Text>
               <IcNext />
            </View>
        </TouchableOpacity>
    )
}

export default ItemListMenu;

const styles = StyleSheet.create({
    content: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 13
    }
})
