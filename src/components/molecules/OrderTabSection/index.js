import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemList from '../ItemList';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import { useNavigation } from '@react-navigation/native';


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

const InProgress = () => {
  const navigation = useNavigation();

    return(
        <View>
          <ItemList inProgress type='in-progress' name='Soto Makasar' image={FoodDummy1} price="45.000" onPress={() => navigation.navigate('FoodDetail')}/>
          <ItemList inProgress type='in-progress' name='Soto Makasar' image={FoodDummy2} price="45.000" onPress={() => navigation.navigate('FoodDetail')}/>
          <ItemList inProgress type='in-progress' name='Soto Makasar' image={FoodDummy3} price="45.000" onPress={() => navigation.navigate('FoodDetail')}/>
          <ItemList inProgress type='in-progress' name='Soto Makasar' image={FoodDummy4} price="45.000" onPress={() => navigation.navigate('FoodDetail')}/>
        </View>
    )
};
   
const PastOrder = () => {
  const navigation = useNavigation();

  return(
      <View>
        <ItemList date='Jun 12, 14:00' status='' inProgress type='past-orders' name='Soto Makasar' image={FoodDummy3} price="45.000" onPress={() => navigation.navigate('FoodDetail')}/>
        <ItemList date='Apr 12, 14:00' status='canceled' inProgress type='past-orders' name='Soto Makasar' image={FoodDummy4} price="45.000" onPress={() => navigation.navigate('FoodDetail')}/>
             </View>
  )
};

const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
      { key: '1', title: 'In Progress' },
      { key: '2', title: 'Popular' },
    ]);
   
    const renderScene = SceneMap({
      1: InProgress,
      2: PastOrder,
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

export default OrderTabSection;

const styles = StyleSheet.create({
    textTabBar: (focused) =>({ 
        fontFamily: 'Poppins-Medium',
        color : focused ? '#020202' : '#8D92A3' 
    }) ,
    tabBarIndication : { 
        backgroundColor: '#020202',
        height: 3, 
        width: '15%', 
        marginLeft: '3%' ,
        marginLeft: 24 

    }
})
