import React from 'react';
import {SafeAreaView, FlatList, Text, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import TimeLineContent from './TimeLineContent';
// import SettingScreen from '../SettingScreen';

const DATA = [
  {
    id: '1',
    title: 'らーめん',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'hello_world',
    detail: 'らーめん',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
  {
    id: '2',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'iketti',
    detail:
      '肉じゃがを作りました肉じゃがを作りました肉じゃがを作りました肉じゃがを作りました肉じゃがを作りました肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
  {
    id: '3',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'hello_world',
    detail: '肉じゃがを作りました\n肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
  {
    id: '4',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'hello_world',
    detail: '肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
  {
    id: '5',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'hello_world',
    detail: '肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
  {
    id: '6',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'hello_world',
    detail: '肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
  {
    id: '7',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'hello_world',
    detail: '肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
];

const TimeLine = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {DATA.map((item, index) => {
          return (
            // {
            //   id: '1',
            //   title: 'らーめん',
            //   userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
            //   userName: 'Hello World',
            //   userId: 'hello_world',
            //   detail: 'らーめん',
            //   image:
            //     'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
            // },
            // item.title -＞らーめん
            // item.userName -> Hello World
            <TimeLineContent navigation={navigation} key={index} item={item} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeLine;
