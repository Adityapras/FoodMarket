import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ArrowBack } from '../../../assets';

const Header = ( {title, subTitle, onBack} ) => {
    return (
        <View style={styles.container}>
            {
                onBack && 
                (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={styles.back}>
                            <ArrowBack />
                        </View>
                    </TouchableOpacity>
                )
            }
            
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container : {backgroundColor: 'white',paddingHorizontal:24,paddingTop:30, paddingBottom: 24, flexDirection: 'row', alignItems:'center'},
    title : {color:'#020202', fontFamily: 'Poppins-Medium', fontSize: 22},
    subTitle : {color: '#8D92A3', fontFamily: 'Poppins-Regular', fontSize: 14},
    back:{
        padding : 16,
        marginRight : 16,
        marginLeft : -10
    }
})
