import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemList from '../ItemList';
import { useNavigation } from '@react-navigation/native';
import { getInProgress, getPastOrders } from '../../../redux/action';
import { useDispatch,useSelector } from 'react-redux';


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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

    return(
      <ScrollView>
        <View>
          {inProgress.map(order =>
            <ItemList 
            key={order.id}
            inProgress 
            type='in-progress' 
            name={order.food.name} 
            image={{uri: order.food.picturePath}} 
            price={order.total} 
            items={order.quantity}
            wordsColor='#8D92A3'
            onPress={() => navigation.navigate('OrderDetail', order)}/>
          )}
        </View>
      </ScrollView>
    )
};
   
const PastOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return(
      <ScrollView>
      <View>
        {pastOrders.map(order =>
          <ItemList 
            key={order.id}
            date={order.created_at} 
            status={order.status} 
            inProgress 
            type='past-orders' 
            name={order.food.name} 
            image={{uri: order.food.picturePath}} 
            price={order.total} 
            items={order.quantity}
            wordsColor={order.status === 'CANCELLED' ? 'red' : 'green' }
            onPress={() => navigation.navigate('OrderDetail', order)}/>
        )}
      </View>
    </ScrollView>
  )
};

const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
      { key: '1', title: 'In Progress' },
      { key: '2', title: 'Past Order' },
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
