import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { FoodDummy1 } from '../../../assets';
import Number from '../Number';
import Rating from '../Rating';

const ItemList = ({
        name,
        image,
        price,
        onPress,
        rating,
        inProgress,
        items,
        type,
        date,
        status,
        wordsColor
    }) => {

    const renderTab = () =>{
        
        switch (type) {
            case 'home-product':
                return(
                    <>
                        <View style={{flex: 1}}>
                            <Text style={styles.name}>{name}</Text>
                            <Number  number={price} style={styles.price}/>
                        </View>
                        <Rating number={rating}/>  
                    </>
                )
            case 'in-progress':
                return(
                    <>
                        <View style={{flex: 1}}>
                            <Text style={styles.name}>{name}</Text>
                            <View style={styles.row}>
                                <Text style={styles.price}> {items} items </Text>
                                <View style={styles.dot}/>
                                <Number  number={price} style={styles.price}/>
                            </View>
                        </View>
                    </>
                )
            case 'past-orders':
                const formatedDate = new Date(date).toDateString();
                return(
                    <>
                        <View style={{flex: 1}}>
                            <Text style={styles.name}>{name}</Text>
                            <Number  number={price} style={styles.price}/>
                        </View>
                        <View>
                            <Text style={styles.date}>{formatedDate}</Text>
                            <Text style={styles.status(wordsColor)}>{status}</Text>
                        </View>
                    </>
                )
            default:
                return(
                    <>
                        <View style={{flex: 1}}>
                            <Text style={styles.name}>{name}</Text>
                            <Number  number={price} style={styles.price}/>
                        </View>
                        <Rating />  
                    </>
                )
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.page}>
                <View style={styles.container}>
                    <Image style={styles.imageStyle} source={ image }/>
                    { renderTab() }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemList;

const styles = StyleSheet.create({
    page: {

    },
    container : {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center'
    },
    imageStyle : {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12
    },
    name: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202'
    },
    price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3'
    },
    items: {

    },
    date: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    status:(wordsColor) =>({
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: wordsColor

    }),
    row : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 3,
        backgroundColor: '#8D92A3',
        marginHorizontal: 4
    }
})
