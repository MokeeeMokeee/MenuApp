import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';

const CancelButton = styled.Button`
  text-align: left;
`;

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 90px;
`;

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 8px;
`;

const TextInputStyle = styled.TextInput`
  font-size: 25px;
  border: #000;
  border-radius: 7px;
  border-width: 1px;
`;

const Container = styled.SafeAreaView`
  display: flex;
  background: #fff;
`;

const ButtonStyle = styled.Button`
  color: #ffcc66;
  background: #ffcc66;
  border: #000;
`;

// const UserId = styled.Text
`;
//   color: rgb(101, 119, 134);
//   margin-left: 8px;
//   font-size: 16px;
// `;

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

  React.useEffect(() => {
    setData(Data[0]);
    setUserName(data.userName);
    setIcon(data.userIcon);
  }, []);

  const [response, setResponse] = React.useState(null);
  return (
    <Container>
      <View>
        <CancelButton title="キャンセル" onPress={() => navigation.goBack()} />
        <UserContainer>
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
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        <View>
          <Icon name="picture" size={50} />
        </View>
        <View>
          <Button
            title="Select image"
            onPress={() =>
              ImagePicker.launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                response => {
                  setResponse(response);
                },
              )
            }
          />

          <Button
            title="Select video"
            onPress={() =>
              ImagePicker.launchImageLibrary({mediaType: 'video'}, response => {
                setResponse(response);
              })
            }
          />
        </View>
      </View>
      <ButtonStyle
        onPress={() => alert('this is a button')}
        title="投稿する"
        color="#FFCC66"
      />
    </Container>
  );
};

export default PostScreen;
