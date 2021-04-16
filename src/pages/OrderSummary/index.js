import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import { FoodDummy3 } from '../../assets';
import { Button, Gap, Header, Loading, Number, SummaryList } from '../../components';
import { API_HOST } from '../../config';
import { getData } from '../../utils';
import { WebView } from 'react-native-webview';

const OrderSummary = ( {navigation, route} ) => {
    const {item, transaction, userProfile} = route.params;
    const [token, setToken] = useState('');
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [paymentURL, setpaymentURL] = useState('https://www.google.com');


    useEffect(() => {
        getData('token').then(res =>{
            setToken(res.value);
        });
    }, [])

    console.log(`${API_HOST.url}/checkout`);
    const onCheckout = () =>{

        const data = {
            food_id : item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.total,
            status: 'PENDING'
        }

        Axios.post(`${API_HOST.url}/checkout`, data, {
            headers: {
                'Authorization' : token
            }
        }).then(res => {
            console.log('checkout succes : ', res.data);
            setIsPaymentOpen(true);
            setpaymentURL(res.data.data.payment_url);
        }).catch(err => {
            console.log('checkout error : ', err);
        });
    }

    const onNavChange = (state) => {
        const titleWeb = 'Testing';
        console.log(state)
        if(state.title === titleWeb)
        {   
            navigation.replace('SuccessOrder');
        }
    }
    if (isPaymentOpen) {
         return (
            <>
            <Header title="payment" subTitle="You deserve better meal" onBack={() => setIsPaymentOpen(false)}/>
                <WebView 
                    source={{ uri: paymentURL }} 
                    onNavigationStateChange={onNavChange}
                    startInLoadingState={true}
                    renderLoading={() => <Loading />}
                />
            </>
        
        );
    }else{

        return (
            <ScrollView>
                <View style={styles.page}>
                    <Header title="payment" subTitle="You deserve better meal" onBack={() => navigation.goBack()}/>
                    <Gap height={24}/>
                    <View style={styles.summaryContainer}>
                        <Text style={styles.title}>Item Ordered</Text>
                        <View style={styles.content}>
                            <Image style={styles.imageStyle} source={{uri: item.picturePath}}/>
                            <View style={styles.foodNameContainer}>
                                <Text style={styles.foodName}>{item.name}</Text>
                                <Text style={styles.priceHeader}><Number number={item.price} /> </Text>
                            </View>
                            <Text style={styles.priceHeader}>{transaction.totalItem} items</Text>
                        </View>
                        <Text style={styles.title}>Details Transaction</Text>
                        <View style={styles.transactionContainer}>
                            <SummaryList title={item.name}  type="currency" value={transaction.totalPrice} textColor="#020202"/>
                            <SummaryList title="Driver"  type="currency" value={transaction.driver} textColor="#020202"/>
                            <SummaryList title="Tax 10%"  type="currency" value={transaction.tax} textColor="#020202"/>
                            <SummaryList title="Total Price"  type="currency" value={transaction.total} textColor="#1ABC9C"/>
                        </View>
                    </View>
                    <Gap height={24}/>
                    <View style={styles.deliveryContainer}>
                        <Text style={styles.title}>Deliver to:</Text>
                        <View style={styles.transactionContainer}>
                            <SummaryList title="Name" value={userProfile.name} textColor="#020202"/>
                            <SummaryList title="Phone No." value={userProfile.phoneNumber} textColor="#020202"/>
                            <SummaryList title="Address" value={userProfile.address} textColor="#020202"/>
                            <SummaryList title="House No." value={userProfile.houseNumber} textColor="#020202"/>
                            <SummaryList title="City" value={userProfile.city} textColor="#020202"/>
                        </View>
                    </View>
                    <View style={styles.btnFooterContainer}>
                        <Button onPress={onCheckout} text="Checkout Now" buttonColor="#FFC700"/>
                    </View>
                </View>
            </ScrollView>
        )
    }
   
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
