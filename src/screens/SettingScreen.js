import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

const SettingScreen = () => {
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then((r) => {
        this.setState({photos: r.edges});
      })
      .catch((err) => {
        //Error Loading Images
      });
  };
  return (
    <View>
      <Button title="Load Images" onPress={this._handleButtonPress} />
      <ScrollView>
        {this.state.photos.map((p, i) => {
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
        ;
      </ScrollView>
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
