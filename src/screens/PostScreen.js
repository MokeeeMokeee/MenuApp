import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is PostScreen</Text>
    </SafeAreaView>
  );
};

/*export default PostScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>post Screen</Text>
      <Button
        title="navigation.push('Posts')"
        onPress={() => navigation.push('Posts')}
      />
    </View>
  );
};
*/
