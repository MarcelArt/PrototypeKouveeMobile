import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Root} from 'native-base';

import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, StackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import OwnerScreen from './src/screens/OwnerScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Owner: {
    screen: OwnerScreen,
  },
});

export default createAppContainer(AppNavigator);

// const AppNavigator = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     }
//   }
// )

// export default () => (
//   <Root>
//     <AppNavigator />
//   </Root>
// );
