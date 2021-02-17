import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { FoodDummy3 } from '../../assets'
import { Button, Gap, Header, SummaryList } from '../../components'

const OrderSummary = ( {navigation} ) => {
    return (
        <View style={styles.page}>
            <Header title="payment" subTitle="You deserve better meal" onBack={() => {}}/>
            <Gap height={24}/>
            <View style={styles.summaryContainer}>
                <Text style={styles.title}>Item Ordered</Text>
                <View style={styles.content}>
                    <Image style={styles.imageStyle} source={ FoodDummy3 }/>
                    <View style={styles.foodNameContainer}>
                        <Text style={styles.foodName}>Cherry Healthy</Text>
                        <Text style={styles.priceHeader}>IDR 289.000</Text>
                    </View>
                    <Text style={styles.priceHeader}>14 items</Text>
                </View>
                <Text style={styles.title}>Details Transaction</Text>
                <View style={styles.transactionContainer}>
                    <SummaryList title="Cherry Healthy" subTitle="18.390.000" textColor="#020202"/>
                    <SummaryList title="Drive" subTitle="50.000" textColor="#020202"/>
                    <SummaryList title="Tax 10%" subTitle="1.800.390" textColor="#020202"/>
                    <SummaryList title="Total Price" subTitle="390.803.000" textColor="#1ABC9C"/>
                </View>
            </View>
            <Gap height={24}/>
            <View style={styles.deliveryContainer}>
                <Text style={styles.title}>Deliver to:</Text>
                <View style={styles.transactionContainer}>
                    <SummaryList title="Name" subTitle="Aditya Prasetyo" textColor="#020202"/>
                    <SummaryList title="Phone No." subTitle="0822 0819 9688" textColor="#020202"/>
                    <SummaryList title="Address" subTitle="Setra Duta Palima" textColor="#020202"/>
                    <SummaryList title="House No." subTitle="A5 Hook" textColor="#020202"/>
                    <SummaryList title="City" subTitle="Tangerang Selatan" textColor="#020202"/>
                </View>
            </View>
            <View style={styles.btnFooterContainer}>
                <Button onPress={() => navigation.navigate('OrderDetail')} text="Checkout Now" buttonColor="#FFC700"/>
            </View>
        </View>
    )
}

export default OrderSummary;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        // backgroundColor: 'white'
    },
    summaryContainer:{
        backgroundColor: 'white',
        paddingBottom: 16 
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    imageStyle:{
        height: 60,
        width: 60,
        borderRadius: 8,
        padding: 12
    },
    foodName:{
        fontSize: 16,
        fontFamily : 'Poppins-Regular',
        color: '#020202'
    },
    priceHeader:{
        fontSize: 13,
        fontFamily : 'Poppins-Regular',
        color: '#8D92A3',
    },
    foodNameContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    title:{
        fontSize: 14,
        fontFamily : 'Poppins-Regular',
        color: '#020202',
        marginLeft: 24,
        marginBottom: 8,
        marginTop: 8
    },
    transactionContainer: {
        paddingHorizontal: 24,
    },
    deliveryContainer:{
        backgroundColor: 'white',
        paddingBottom: 16
    },
    btnFooterContainer:{
        flex: 1,
        paddingBottom: 26,
        paddingHorizontal: 24,
        paddingTop: 24,
        justifyContent: 'center'
    }
    
})
