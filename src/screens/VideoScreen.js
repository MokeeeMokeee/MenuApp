import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';

const Container = styled.View`
  height: 100%;
  background-color: #fff;
  position: relative;
`;

const BackgroundImage = styled.Image`
  min-height: 100%;
  width: 100%;
`;

const Content = styled.View`
  width: 100%;
  position: absolute;
  height: 100%;
`;

const InputContent = styled.View`
  height: 100%;
  /* margin: 0 0 32px 16px; */
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 8px;
`;

const TextInputStyle = styled.TextInput`
  border-width: 2px;
  border-radius: 8px;
  text-align: center;
  border-color: #9e9e9e;
  background-color: #fff;
  height: 32px;
  width: 95%;
`;

const IconContent = styled.View`
  margin-left: 8px;
`;

const CommentContainer = styled.View`
  padding: 16px 16px;
  height: 90%;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

const CommentContent = styled.View`
  margin: 4px 0;
  /* height: 100%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: flex-end; */
`;

const Comment = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  opacity: 0.5;
`;

const ButtonContainer = styled.View`
  padding: 16px 16px;
  height: 30%;
  width: 100%
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  opacity: 0.7;
`;

const EndCall = styled.View`
  background-color: #f00;
  border-radius: 50;
  padding: 8px;
`;

const VideoScreen = ({navigation}) => {
  const [videoImage, setVideoImage] = useState(
    'https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  );

  const [text, setText] = useState('');
  const CommentData = [
    {id: 1, comment: 'なるほど！そんな感じで混ぜればいいんですね！！！'},
    {id: 2, comment: '私も出来ました〜！！'},
    {id: 4, comment: 'うまく作れて草'},
    {id: 5, comment: '↑ 確か2人前'},
    {id: 6, comment: 'これって2人前でしたっけ？3人前でしたっけ？'},
  ];

  return (
    <Container>
      <BackgroundImage
        source={{
          uri: `${videoImage}`,
        }}
      />
      <ButtonContainer>
        <Icon name="volume-high" size={50} color={'#fff'} />
        <Icon name="comment-processing-outline" size={50} color={'#fff'} />
        <EndCall>
          <MIcon name="call-end" size={42} color={'#fff'} />
        </EndCall>
      </ButtonContainer>
      <CommentContainer>
        {CommentData.map((items, index) => {
          return (
            <CommentContent key={index}>
              {/* <Text>{index}</Text> */}
              <Comment>{items.comment}</Comment>
            </CommentContent>
          );
        })}
      </CommentContainer>
      <Content>
        <InputContent>
          <TextInputStyle
            underlineColorAndroid="transparent"
            placeholder={'コメントを送信する'}
            placeholderTextColor={'#9E9E9E'}
            value={text}
            onChangeText={setText}
          />
          <IconContent>
            <Icon
              name="arrow-right-drop-circle-outline"
              size={32}
              color={'#fff'}
            />
          </IconContent>
        </InputContent>
      </Content>
    </Container>
  );
};

export default VideoScreen;
