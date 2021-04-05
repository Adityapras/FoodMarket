import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcStarOn, IcStarOff } from '../../../assets';
import Number from '../Number';

const Rating = ( { number } ) => {

    const convertNumber = parseFloat(number);
    const renderStar = () => {
        let star = [];

        for (let i = 0; i <= 5; i++) {
            if (i <= number) {
                star.push( <IcStarOn key={i}/> );
            } else {
                star.push( <IcStarOff key={i}/> );
            }
        }

        return star;
    }
    return (
        <View style={styles.ratingContainer}>
           <View style={styles.starContainer}>
               {renderStar()}
           </View>
           <Number number={convertNumber} type='decimal' style={styles.numberRating}/>
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({
    starContainer: {
        flexDirection : 'row',
        alignItems: 'center'
    },
    ratingContainer: {
        flexDirection : 'row',
        marginRight: 4
    },
    numberRating : {
        fontSize: 12,
        fontFamily: 'Poppin-Regular',
        color: '#8D92A3'
    }
})
