import React from 'react';
import {SafeAreaView, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TimeLine from '../components/TimeLine';
import HomeDetail from '../components/Details/HomeDetail';

const HomeStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TimeLine"
        component={TimeLine}
        options={{
          headerTitle: 'タイムライン',
        }}
      />
      <HomeStack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{
          title: '詳細ページ',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
