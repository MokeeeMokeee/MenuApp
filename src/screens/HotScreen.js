import React from 'react';
import {SafeAreaView, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HotTimeLine from '../components/HotTimeLine';
import HotDetail from '../components/Details/HotDetail';

const HotStack = createStackNavigator();

const HotScreen = () => {
  return (
    <HotStack.Navigator>
      <HotStack.Screen
        name="HotTimeLine"
        component={HotTimeLine}
        options={{
          headerTitle: 'タイムライン',
        }}
      />
      <HotStack.Screen
        name="HotDetail"
        component={HotDetail}
        options={{
          title: '詳細ページ',
        }}
      />
    </HotStack.Navigator>
  );
};

export default HotScreen;
