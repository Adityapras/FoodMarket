/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SignIn, SplashScreen } from './pages';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';

const App =  () =>  {
  return (
    <NavigationContainer>
       <Provider store={store}>
         <Router />
       </Provider>
    </NavigationContainer>
  );
};

export default App;
