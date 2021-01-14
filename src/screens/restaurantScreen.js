import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
// import HomeTabScreen from '../HomeTabScreen';
// import TimeLine from '../TimeLine';
// import styled from 'styled-components/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const UserImage = styled.Image`
//   width: 60px;
//   height: 60px;
//   border-radius: 90px;
// `;
// const Name = styled.Text`
//   font-weight: bold;
//   font-size: 16px;
// `;
// const UserId = styled.Text`
//   color: rgb(101, 119, 134);
//   margin-left: 8px;
//   font-size: 16px;
// `;

const restaurantScreen = ({navigation, route}) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <Text>献立作成画面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },

  user: {},

  textinput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },

  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default restaurantScreen;
