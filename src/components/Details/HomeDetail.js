import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image, Button} from 'react-native';

const HomeDetail = ({navigation, route}) => {
  const {id, userIcon, userName, userId, detail, image} = route.params.item;
  console.log(detail);
  return (
    <View>
      <Text>hello</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default HomeDetail;
