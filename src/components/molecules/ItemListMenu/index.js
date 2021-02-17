import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcNext } from '../../../assets';

const ItemListMenu = ( {title} ) => {
    return (
        <View style={styles.content}>
           <Text style={styles.title}>{ title }</Text>
           <IcNext />
        </View>
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
