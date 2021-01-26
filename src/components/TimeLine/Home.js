import React from 'react';
import {SafeAreaView, FlatList, Text, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import HomeScreen from '../TimelineContent/Home';
// import SettingScreen from '../SettingScreen';

const DATA = [
  {
    id: '1',
    title: 'ハムとベーコンの簡単朝食',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-U4WQ59NN6-0623c9638747-512',
    userName: 'Hello World',
    userId: 'mimine',
    detail:
      '【簡単朝食】\n忙しい朝、ちょっといつもと違うものを食べたいときにおすすめ！',
    image:
      'https://images.unsplash.com/photo-1594629490425-b85f054b39ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGN1aXNpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: '2',
    title: 'バタークッキーの作り方♪',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'バタークッキー',
    userId: 'cookie_gati',
    detail:
      'シンプルな材料でサックサクに焼き上げる究極のバタークッキー\nあまりの口溶けの良さについつい食べすぎてしまうのでご注意を！',
    image:
      'https://images.unsplash.com/photo-1588112436183-ffad449f1442?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGN1aXNpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: '3',
    title: '肉じゃが',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'Hello World',
    userId: 'kuririn_0201',
    detail: '肉じゃがを作りました\n肉じゃがを作りました',
    image:
      'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
  },
];

const HomeTimeLine = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {DATA.map((item, index) => {
          return <HomeScreen navigation={navigation} key={index} item={item} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeTimeLine;
