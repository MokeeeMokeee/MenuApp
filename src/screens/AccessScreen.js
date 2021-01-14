import React from 'react';
import {SafeAreaView, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AccessTimeLine from '../components/AccessTimeLine';
import AccessDetail from '../components/Details/AccessDetail';

const AccessStack = createStackNavigator();

const AccsessScreen = () => {
  return (
    <AccessStack.Navigator>
      <AccessStack.Screen
        name="AccessTimeLine"
        component={AccessTimeLine}
        options={{
          headerTitle: 'タイムライン',
        }}
      />
      <AccessStack.Screen
        name="AccessDetail"
        component={AccessDetail}
        options={{
          title: '詳細ページ',
        }}
      />
    </AccessStack.Navigator>
  );
};

export default AccsessScreen;
