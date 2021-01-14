import React from 'react';
import {SafeAreaView, FlatList, Text, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import TimeLineContent from './TimeLineContent';

const DATA = [
  {
    id: '1',
    title: '(HOT)らーめん',
    userIcon: 'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
    userName: 'いけっち',
    userId: 'iketti',
    detail: '人気店のラーメンの作り方',
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
            <TimeLineContent navigation={navigation} key={index} item={item} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeLine;
