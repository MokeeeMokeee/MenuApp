import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image, Button} from 'react-native';

const AccessDetail = ({navigation, route}) => {
  const {id, userIcon, userName, userId, detail, image} = route.params.item;
  console.log(detail);
  return (
    <View>
      <Text>ちわっス</Text>
      <Button title="Back to Access" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default AccessDetail;
