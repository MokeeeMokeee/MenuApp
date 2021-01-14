import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const PostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is PostScreen</Text>
    </SafeAreaView>
  );
};

export default PostScreen;
