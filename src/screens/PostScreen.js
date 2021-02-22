import React, { useState } from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Textarea from 'react-native-textarea';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


import
  {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Input} from 'react-native-elements';


const Container = styled.ScrollView`
  display: flex;
  height: 100%;
  background: #fff;
`;

const Content = styled.View`
  margin: 16px 0;
`

const DetailContainer = styled.View`
  display: flex;
  padding: 16px;
  border: solid 2px #000;
  margin: 8px;
`;

const TextAreaStyle = styled(Textarea)`
    max-height: 170px;
    font-size: 14px;
    color: #333;
`;

const Title = styled.Text`
  margin-left: 8px;
  font-weight: bold;
  font-size: 20px;
`;

const ImagePickerButton = styled.TouchableOpacity`
  border-radius: 24px;
  padding: 8px 32px;
  margin-top: 16px;
  background: #f56500;
  width: 200px;
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoContent = styled.View`
  display: flex;
  flex-direction: row;
  margin: 16px 8px;
  height: 100px;
  position: relative;
`
const AddView = styled.View`
  display: flex;
  align-items: center;
`

const Label = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const Photo = styled.Image`
  width: 20%;
  height: 100%;
  border-radius: 8px;
  /* flex: 1 1 100px; */
`;

const PhotoTextArea = styled(Textarea)`
  height: 100px;
  font-size: 14px;
  color: #333;
  padding: 6px;
  width: 80%;
`;

const ButtonView = styled.View`
  background-color: #ccc;
  width: 28px;
  height: 28px;
  border-radius: 0px;
  position: absolute;
  z-index: 2;
  top: -10px;
  left: -4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDelete = styled.Button`
`;

const PostScreen = ({navigation}) => {
  const Data = [
    {
      id: '1',
      title: 'らーめん',
      userIcon:
        'https://ca.slack-edge.com/T4XA8F39U-UH03RPMGV-ee74453b6ba5-512',
      userName: 'Hello World',
      userId: 'hello_world',
      detail: 'らーめん',
      image:
        'https://asset.oceans-nadia.com/upload/save_image/79/79042f28d204.jpg?impolicy=cropwm&w=800&h=450',
    },
  ];

  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [data, setData] = React.useState({});
  const [name, setUserName] = React.useState('');
  const [icon, setIcon] = React.useState('');
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [images, setImages] = useState([]);

  const options = {
    title: 'Load Photo',
    customButtons: [
      {name: 'button_id_1', title: 'CustomButton 1'},
      {name: 'button_id_2', title: 'CustomButton 2'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  //  const showCamera = () => {
  //    launchCamera(options, (response) => {
  //      if (response.error) {
  //        console.log('LaunchCamera Error: ', response.error);
  //      } else {
  //        setImages(response.uri);
  //      }
  //    });
  //  };

   const showCameraRoll = () => {
     launchImageLibrary(options, (response) => {
       if (response.error) {
         console.log('LaunchImageLibrary Error: ', response.error);
       } else {
         setImages([
           ...images,
           { image: response.uri, text: ''}
         ])
       }
     });
   };
  
  const textFunc = (text, index) =>
  {
    const hoge = images.slice()
    hoge[index].text = text;
    setImages([...hoge])
  }

  const handleDelete = (index) =>
  {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <Container>
      <Content>
        <Input label="タイトル" onChangeText={(value) => setTitle(value)} />
        <Title>概要説明</Title>
        <DetailContainer>
          <TextAreaStyle
            onChangeText={(detail) => setDetail(detail)}
            maxLength={120}
            placeholder={'ここに簡単に説明文を書きましょう...!'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
        </DetailContainer>
        <View>
          <Title>作り方説明</Title>
          {images.map((items, index) => {
            let image = items.image;
            let text = items.text;
            return (
              <PhotoContent key={index}>
                <ButtonView>
                  <ButtonDelete
                    onPress={() => handleDelete(index)}
                    title="X"
                    color="#fff"
                  />
                </ButtonView>
                <Photo source={{uri: image}} />
                <PhotoTextArea
                  onChangeText={(text) => textFunc(text, index)}
                  maxLength={100}
                  placeholder={'説明文'}
                  placeholderTextColor={'#c7c7c7'}
                  underlineColorAndroid={'transparent'}
                />
              </PhotoContent>
            );
          })}
          {/* {images && <Photo source={{uri: images}} />} */}
          {/* <ImagePickerButton onPress={showCamera}>
            <Label>Take Photo</Label>
          </ImagePickerButton> */}
          <AddView>
            <ImagePickerButton onPress={showCameraRoll}>
              <Label>作り方を追加する</Label>
            </ImagePickerButton>
          </AddView>
        </View>
      </Content>

      {/* <UserContainer>
          <UserImage
            source={{
              uri: `${icon}`,
            }}
          />
          <Name>{name}</Name>
        </UserContainer>
        <View>
          <TextInputStyle
            multiline={true}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="picture" size={20} />
        </View>
      </View>
      <Button
        onPress={() => alert('this is a button')}
        title="投稿する"
        color="#FFCC66"
      />
      <Button title="Back to Home" onPress={() => navigation.goBack()} /> */}
      <Button
        onPress={() => alert("送信!")}
        title="メニューを投稿する"
        color="#000"
      />
    </Container>
  );
};

export default PostScreen;
