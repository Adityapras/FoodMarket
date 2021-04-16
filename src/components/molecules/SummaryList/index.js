import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Number from '../Number';

const SummaryList = ({title, value, textColor, type}) => {
    return (
        <View style={styles.transactionDetail}>
            <Text style={styles.titleFoodName}>{title}</Text>
            
            {type === 'currency' ? <Number number={value} style={styles.priceSubTotal(textColor)} /> : <Text style={styles.priceSubTotal(textColor)}> {value}</Text> }
        </View>
    )
}

export default SummaryList;

const styles = StyleSheet.create({
    transactionDetail: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    titleFoodName: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    priceSubTotal: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: color
    }),
})
