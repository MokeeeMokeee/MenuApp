import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';

const Detail: React.FC = ({navigation, route}) => {
  const {id, userIcon, userName, userId, detail, image} = route.params.item;
  console.log(detail);
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
export default Detail;
