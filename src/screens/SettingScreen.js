import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const SettingScreen = ({navigation, route}) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <Text>(ユーザーアイコン)ユーザーネーム</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
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

export default SettingScreen;
