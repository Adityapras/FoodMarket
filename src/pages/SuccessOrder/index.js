import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SuccessLogo } from '../../assets'
import { Button, Gap } from '../../components';

const SuccessOrder = ( {navigation} ) => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <SuccessLogo style={styles.logo} />
                <Text style={styles.title}>You’ve Made Order</Text>
                <Text style={styles.subTitle}>Just stay at home while we are</Text>
                <Text style={styles.subTitle}>preparing your best foods</Text>
                <View style={styles.btnContainer}>
                    <Button textButtonColor="#020202" buttonColor="#FFC700" text="Order Other Foods"
                        onPress={() => navigation.replace('MainApp')} />
                    <Gap height={12}/>
                    <Button textButtonColor="#F9FAFF" buttonColor="#8D92A3" text="View My Order"
                    onPress={() => navigation.replace('MainApp', {screen: 'Order'})} />
                </View>
            </View>
        </View>

    )
}

export default SuccessOrder;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo : {
        marginTop: 100,
        marginBottom: 30,
        paddingEnd: 80
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    subTitle:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    btnContainer:{
        backgroundColor: 'white',
        paddingHorizontal: 80,
        width:'100%',
        paddingTop: 42,
    }
})
