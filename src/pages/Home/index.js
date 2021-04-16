import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FoodCard, Gap, HomeTabSection, HomeProfile } from '../../components';
import { getFoodData } from '../../redux/action';

const Home = ( {navigation} ) => {
 
     const dispatch = useDispatch();
     const { food } = useSelector(state => state.homeReducer)

     useEffect(() => {
        dispatch(getFoodData());
     }, [])

    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeProfile />
                <View style={{paddingTop: 12, paddingBottom: 24}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodContainer}>
                            <Gap width={24}/>
                            {food.map( (itemFood) => {
                                return <FoodCard onPress={() => navigation.navigate('FoodDetail',  itemFood)} key={itemFood.id} name={itemFood.name} image={{uri: itemFood.picturePath}} rating={itemFood.rate}/>
                            })}
                        </View>
                    </ScrollView>
                </View>
                <HomeTabSection />
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    foodContainer: {
        flexDirection: 'row',
        marginVertical: 12
    },
})
