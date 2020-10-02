import React from 'react';
import {SafeAreaView, FlatList, Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TimeLine from '../components/TimeLine';
import Detail from '../components/Detail';
import HomeScreen from './HomeScreen';

const HomeTopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const hot = () => {
  return (
    <View>
      <Text>hot</Text>
    </View>
  );
};

const access = () => {
  return (
    <View>
      <Text>access</Text>
    </View>
  );
};

const MaterialTopTabNavi: React.FC = () => {
  return (
    <HomeTopTab.Navigator>
      <HomeTopTab.Screen name="特集" component={HomeScreen} />
      {/* <HomeTopTab.Screen name="setting" component={fuga} /> */}
      <HomeTopTab.Screen name="ホットワード" component={hot} />
      <HomeTopTab.Screen name="アクセスランキング" component={access} />
    </HomeTopTab.Navigator>
  );
};

const HomeTabScreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MaterialTopTabNavi"
        component={MaterialTopTabNavi}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('this is a button')}
              title="投稿"
              color="#000"
            />
          ),
          title: 'Tab Stack',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeTabScreen;
