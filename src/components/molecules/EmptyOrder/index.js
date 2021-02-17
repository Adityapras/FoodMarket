import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { OrderEmpty } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { useNavigation } from '@react-navigation/native';

const EmptyOrder = ( ) => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <OrderEmpty style={styles.logo} />
                <Text style={styles.title}>Ouch! Hungry</Text>
                <Text style={styles.subTitle}>Seems like you have not</Text>
                <Text style={styles.subTitle}>ordered any food yet</Text>
                <View style={styles.btnContainer}>
                    <Button textButtonColor="#020202" buttonColor="#FFC700" text="Find Foods"
                        onPress={() => navigation.replace('MainApp')} />
                    <Gap height={12}/>
                </View>
            </View>
        </View>

    )
}

export default EmptyOrder;

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
