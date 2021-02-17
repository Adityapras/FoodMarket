import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../assets';
import { FoodCard, Gap, HomeTabSection, HomeProfile } from '../../components';

const Home = () => {

    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeProfile />
                <View style={{paddingTop: 12, paddingBottom: 24}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodContainer}>
                            <Gap width={24}/>
                            <FoodCard image={ FoodDummy1 }/>
                            <FoodCard image={ FoodDummy2 } />
                            <FoodCard image={ FoodDummy3 } />
                            <FoodCard image={ FoodDummy4 } />
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
