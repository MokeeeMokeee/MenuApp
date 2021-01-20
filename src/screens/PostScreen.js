import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';

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
`;

const Container = styled.SafeAreaView`
  display: flex;
  background: #fff;
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

  return (
    <Container>
      <View>
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="picture" size={20} />
        </View>
      </View>
      <Button
        onPress={() => alert('this is a button')}
        title="投稿する"
        color="#FFCC66"
      />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default PostScreen;
