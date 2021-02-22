import React from 'react';
import {SafeAreaView, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TimeLine from '../components/TimeLine/Home';
import HomeDetail from '../components/Details/HomeDetail';
import UserDetail from '../screens/Profile3/index';
import PostScreen from './PostScreen';

const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TimeLine"
        component={TimeLine}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Post')}
              // props.navigation.navigate('Posts')}

              title="投稿"
              color="#000"
            />
          ),
          headerTitle: 'タイムライン',
        }}
      />
      <HomeStack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Post')}
              // props.navigation.navigate('Posts')}

              title="投稿"
              color="#000"
            />
          ),
          headerTitle: '詳細ページ',
        }}
      />
      <HomeStack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Post')}
              // props.navigation.navigate('Posts')}

              title="投稿"
              color="#000"
            />
          ),
          headerTitle: 'ユーザーページ',
        }}
      />
      <HomeStack.Screen name="Post" component={PostScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
