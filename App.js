// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTabScreen from './src/screens/HomeTabScreen';
import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';
import SettingScreen from './src/screens/SettingScreen';
import restaurantScreen from './src/screens/restaurantScreen';

const DetailScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

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
        <Tab.Screen name="Home" component={HomeTabScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="restaurant" component={restaurantScreen} />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
