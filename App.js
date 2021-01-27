// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';
import SettingScreen from './src/screens/SettingScreen';
// import HogeScreen from './src/screens/Profile3/index';
import VideoScreen from './src/screens/VideoScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // オンライン授業のためのscreen
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="video"
    //       component={VideoScreen}
    //       options={{
    //         headerTitle: '第3回 料理教室',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            } //new icon!
            else if (route.name === 'restaurant') {
              iconName = focused ? 'clipboard-file' : 'clipboard-file-outline';
            }

            // アイコン追加　※なぜか"?"が表示される。
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
