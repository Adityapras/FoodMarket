import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { FoodDummy1, IcBackWhite } from '../../assets';
import { Button, Counter, Rating } from '../../components';

const FoodDetail = ( {navigation} ) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ FoodDummy1 } style={styles.cover}>
                <TouchableOpacity style={styles.back}>
                    <IcBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>Cherry Healthy</Text>
                            <Rating />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.description}>
                    Makanan khas Bandung yang cukup sering
                    dipesan oleh anak muda dengan pola makan
                    yang cukup tinggi dengan mengutamakan
                    diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredient :</Text>
                    <Text style={styles.description}>Seledri, telur, blueberry, madu.</Text>
                </View>
                <View style={styles.footerContent}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labelTotal}>Total Price:</Text>
                        <Text style={styles.priceTotal}>IDR 12.289.000</Text>
                    </View>
                    <View style={styles.buttonOrder}>
                        <Button onPress={() => navigation.navigate('OrderSummary') } text="Order Now" buttonColor="#FFC700" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page :{
        flex: 1
    },  
    cover: {
            height: 330,
            paddingTop: 26,
            paddingLeft: 22
        },
    back: {
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
    content : {
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -20,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1
    },
    mainContent:{
        flex: 1
    },
    footerContent:{
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    productContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    description:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16
    },
    label:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4
    },
    buttonOrder:{
        width: 163
    },
    priceContainer:{
        flex: 1
    },
    labelTotal:{
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    priceTotal:{
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
})
