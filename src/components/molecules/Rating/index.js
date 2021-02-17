import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcStarOn } from '../../../assets';

const Rating = () => {
    return (
        <View style={styles.ratingContainer}>
           <View style={styles.starContainer}>
               <IcStarOn />
               <IcStarOn />
               <IcStarOn />
               <IcStarOn />
           </View>
           <Text >4.5</Text>
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({
    starContainer: {
        flexDirection : 'row'
    },
    ratingContainer: {
        flexDirection : 'row'
    },
})
