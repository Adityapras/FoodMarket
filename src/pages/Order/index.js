import React,  {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EmptyOrder, ExistOrder } from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import { getOrders } from '../../redux/action';

const Order = () => {

    const[isEmpty] = useState(false);
    const dispatch = useDispatch();
    const {orders} = useSelector(state => state.orderReducer);
    
    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <View style={styles.page}>
            { orders.length < 1 ? <EmptyOrder /> : <ExistOrder /> }
        </View>
    )
}

export default Order;

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
