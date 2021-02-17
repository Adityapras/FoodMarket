import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SummaryList = ({title, subTitle, textColor, items}) => {
    return (
        <View style={styles.transactionDetail}>
            <Text style={styles.titleFoodName}>{title}</Text>
            <Text style={styles.priceSubTotal(textColor)}> {items ? <Text>IDR</Text>  : ''} {subTitle}</Text>
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
