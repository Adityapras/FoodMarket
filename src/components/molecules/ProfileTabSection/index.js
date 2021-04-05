import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemList from '../ItemList';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, IcNext} from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

const Account = () => {
  const navigation = useNavigation();

    const signOut =  () => {
      AsyncStorage.multiRemove(['userProfile', 'token']).then((res) =>{
        navigation.reset({index: 0, routes: [{name : 'SignIn'}]});
      });
    }
    return(
      <View style = {styles.pageListMenu}>
        <ItemListMenu title='Edit Profile'/>
        <ItemListMenu title='Home Address'/>
        <ItemListMenu title='Security'/>
        <ItemListMenu title='Payments'/>
        <ItemListMenu onPress={signOut} title='SignOut'/>
      </View>
    )
};
   
const Apps = () => {
  const navigation = useNavigation();

  return(
    <View style = {styles.pageListMenu}>
      <ItemListMenu title='Rate App'/>
      <ItemListMenu title='Help Center'/>
      <ItemListMenu title='Privacy & Policy'/>
      <ItemListMenu title='Terms & Conditions'/>
    </View>
  )
};

const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
      { key: '1', title: 'Account' },
      { key: '2', title: 'Apps' },
    ]);
   
    const renderScene = SceneMap({
      1: Account,
      2: Apps,
    });

    return (
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
    )
}

export default ProfileTabSection;

const styles = StyleSheet.create({
    textTabBar: (focused) =>({ 
        fontFamily: 'Poppins-Medium',
        color : focused ? '#020202' : '#8D92A3' ,
    }) ,
    tabBarIndication : { 
        backgroundColor: '#020202',
        height: 3, 
        width: '15%', 
        marginLeft: 24 
    },
    pageListMenu: {
      paddingHorizontal: 24,
      paddingVertical: 17,
      backgroundColor: 'white'
    }
})
