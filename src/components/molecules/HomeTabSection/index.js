import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemList from '../ItemList';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { getFoodDataByTypes } from '../../../redux/action';


const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndication}
      style = {
        {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpcatiy: 0,
          borderBottomColor: '#F2F2F2',
          borderBottomWidth: 1
        }
      }
      tabStyle = {
        {
          borderColor: 'black',
          width: 'auto',
          paddingLeft: 24
        }
      }
      renderLabel={({ route, focused, color }) => (
        <Text style={styles.textTabBar(focused)}>
          {route.title}
        </Text>
      )}
    />
  );

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
    return(
        <View>
           {newTaste.map(item => {
           return <ItemList 
              key={item.id}
              type='home-product' 
              rating={item.rate}
              items={false} 
              inProgress={false} 
              name={item.name}
              image={{uri:item.picturePath}} 
              price={item.price} 
              onPress={() => navigation.navigate('FoodDetail', item)}/>
           })}
        </View>
    )
};
   
const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
    return(
        <View>
           {popular.map(item => {
           return <ItemList 
              key={item.id}
              type='home-product' 
              rating={item.rate}
              items={false} 
              inProgress={false} 
              name={item.name}
              image={{uri:item.picturePath}} 
              price={item.price} 
              onPress={() => navigation.navigate('FoodDetail', item)}/>
           })}
        </View>
    )
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
    return(
        <View>
           {recommended.map(item => {
           return <ItemList 
              key={item.id}
              type='home-product' 
              rating={item.rate}
              items={false} 
              inProgress={false} 
              name={item.name}
              image={{uri:item.picturePath}} 
              price={item.price} 
              onPress={() => navigation.navigate('FoodDetail', item)}/>
           })}
        </View>
    )
};
const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
      { key: '1', title: 'New Taste' },
      { key: '2', title: 'Popular' },
      { key: '3', title: 'Recommended' },
    ]);
   
    const renderScene = SceneMap({
      1: NewTaste,
      2: Popular,
      3: Recommended
    });

    return (
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{backgroundColor: 'white'}}
        />
    )
}

export default HomeTabSection;

const styles = StyleSheet.create({
    textTabBar: (focused) =>({ 
        fontFamily: 'Poppins-Medium',
        color : focused ? '#020202' : '#8D92A3' 
    }) ,
    tabBarIndication : { 
        backgroundColor: '#020202',
        height: 3, 
        width: '15%', 
        marginLeft: '3%',
        marginLeft: 24 
    }
})
