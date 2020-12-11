import React from 'react';
import {SafeAreaView, FlatList, Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import HotScreen from './HotScreen';
import AccessScreen from './AccessScreen';

const HomeTopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MaterialTopTabNavi = () => {
  return (
    <HomeTopTab.Navigator>
      <HomeTopTab.Screen name="特集" component={HomeScreen} />
      {/* <HomeTopTab.Screen name="setting" component={fuga} /> */}
      <HomeTopTab.Screen name="ホットワード" component={HotScreen} />
      <HomeTopTab.Screen name="アクセスランキング" component={AccessScreen} />
    </HomeTopTab.Navigator>
  );
};

const HomeTabScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MaterialTopTabNavi"
        component={MaterialTopTabNavi}
        options={{
          headerRight: () => (
            <Button
              onPress={() => props.navigation.navigate('Posts')}
              //alert('this is a button')}
              title="投稿"
              color="#000"
            />
          ),

          /*<Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Post')}
              //{() => alert('this is a button')}
              title="投稿"
              color="#000"
            />
    */
          title: 'MenuApp',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeTabScreen;
