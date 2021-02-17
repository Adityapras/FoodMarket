import React,  {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EmptyOrder, ExistOrder } from '../../components'

const Order = () => {

    const[isEmpty] = useState(false);

    return (
        <View style={styles.page}>
            { isEmpty ? <EmptyOrder /> : <ExistOrder /> }
        </View>
    )
}

export default Order;

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
