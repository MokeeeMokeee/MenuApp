import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image, Button} from 'react-native';

const HotDetail = ({navigation, route}) => {
  const {id, userIcon, userName, userId, detail, image} = route.params.item;
  console.log(detail);
  return (
    <View>
      <Text>こんにちは</Text>
      <Button title="Back to Hot" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default HotDetail;
