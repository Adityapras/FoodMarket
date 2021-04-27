import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { Button, Gap, Header, Number, SummaryList } from '../../components'
import { API_HOST } from '../../config';
import { getData } from '../../utils';

const OrderDetail = ( {route, navigation} ) => {
    
    const order      = route.params;
    const driver     = 50000;
    const tax        = ( order.food.price * order.quantity ) * 10 / 100;
    const totalPrice =  order.total ; 


    const onCancel = () => {

        const data = {
            status: 'CANCELLED'
        }

        getData('token').then(resToken =>{
            axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
                headers: {
                    'Authorization' : resToken.value
                }
            }).then(res => {
                navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
            }).catch(err => {
            })
        });
       
    }
    return (
        <ScrollView>
            <View style={styles.page}>
                <Header title="payment" subTitle="You deserve better meal" onBack={() => navigation.goBack()}/>
                <Gap height={24}/>
                <View style={styles.summaryContainer}>
                    <Text style={styles.title}>Item Ordered</Text>
                    <View style={styles.content}>
                        <Image style={styles.imageStyle} source={{uri: order.food.picturePath}}/>
                        <View style={styles.foodNameContainer}>
                            <Text style={styles.foodName}>{order.food.name}</Text>
                            <Number number={order.food.price} style={styles.priceHeader}/> 
                        </View>
                        <Text style={styles.priceHeader}>{order.quantity} items</Text>
                    </View>
                    <Text style={styles.title}>Details Transaction</Text>
                    <View style={styles.transactionContainer}>
                        <SummaryList items title={order.food.name} value={order.food.price * order.quantity} textColor="#020202" type="currency"/>
                        <SummaryList items title="Driver" value={driver} textColor="#020202" type="currency"/>
                        <SummaryList items title="Tax 10%" value={tax} textColor="#020202" type="currency"/>
                        <SummaryList items title="Total Price" value={totalPrice} textColor="#1ABC9C" type="currency"/>
                    </View>
                </View>
                <Gap height={24}/>
                <View style={styles.deliveryContainer}>
                    <Text style={styles.title}>Deliver to:</Text>
                    <View style={styles.transactionContainer}>
                        <SummaryList items title="Name" value={order.user.name} textColor="#020202"/>
                        <SummaryList items title="Phone No." value={order.user.phoneNumber} textColor="#020202"/>
                        <SummaryList items title="Address" value={order.user.address} textColor="#020202"/>
                        <SummaryList items title="House No." value={order.user.houseNumber} textColor="#020202"/>
                        <SummaryList items title="City" value={order.user.city} textColor="#020202"/>
                    </View>
                </View>
                <Gap height={24}/>
                <View style={styles.statusContainer}>
                    <Text style={styles.title}>Order Status:</Text>
                    <View style={styles.contentStatus}>
                        <SummaryList title="#FM209391" value={order.status} textColor={order.status === 'CANCELLED' ? '#D9435E' : "#1ABC9C"}/>
                    </View>
                </View>
                <View style={styles.btnFooterContainer}>
                    {order.status === 'PENDING' && (
                        <Button textButtonColor="#FFFFFF" onPress={onCancel} text="Cance My Order" buttonColor="#D9435E"/>
                    )}
                </View>
            </View>
        </ScrollView>
        
    )
}

export default OrderDetail;

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
    },
    statusContainer: {
        backgroundColor: 'white',
        flex: 1,
        // paddingHorizontal: 24
    },
    contentStatus:{
        paddingHorizontal: 24,
        paddingBottom: 12,
    }
    
})
