import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

/*
*/

const SettingScreen = () => {
  const _handleButtonPress = () => {

    const options = {
      groupTypes: "Album",
      assetType: "All",
    }
    CameraRoll.getPhotos(options)
      .then((r) => {
        setState({photos: r.edges});
      })
      .catch((err) => {
        console.log(err);
      });
      return (
        <View style={styles.container}>
          <Button titile="showImages" onPress={_handleButtonPress} />
          <ScrollView>
          {photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 300,
                height: 100,
              }}
              source={{uri: p.node.image.uri}}
            />
          );
        })}
          </ScrollView>
        </View>
      );
}

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
