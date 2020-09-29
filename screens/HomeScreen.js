import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TimeLine from '../components/TimeLine';
import Detail from '../components/Detail';

const HomeStack = createStackNavigator();

const HomeScreen: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TimeLine"
        component={TimeLine}
        options={{
          title: 'タイムライン',
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: '詳細ページ',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
