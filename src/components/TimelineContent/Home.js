import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.4);
  padding: 16px;
`;
const LeftContent = styled.View`
  flex: 0 1 60px;
  width: 300px;
`;
const RightContent = styled.View`
  flex: 0 1 auto;
  margin-left: 12px;
  width: 100%;
`;

const ImageContent = styled.View`
  width: 60px;
  height: 60px;
`;

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 90px;
`;
const ImageContainer = styled.View``;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
  align-items: flex-end;
`;
const Name = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;
const UserId = styled.Text`
  color: rgb(101, 119, 134);
  margin-left: 8px;
  font-size: 16px;
  width: 100%;
  text-align: right;
`;
const Detail = styled.Text`
  font-size: 16px;
  line-height: 18px;
  min-width: 0px;
  margin-bottom: 4px;
`;

const ContentImage = styled.Image`
  min-height: 200px;
  width: 100%;
  border-radius: 16px;
  margin: 8px 0;
`;

const ContentImageContainer = styled.View`
  position: relative;
`;

const HomeContent = ({item, navigation}) => {
  const [favorited, isFavorited] = useState(false);

  const favo = () => {
    isFavorited(!favorited);
  };

  console.log(item.image);

  return (
    <Container>
      <LeftContent>
        <ImageContainer>
          <TouchableOpacity onPress={() => navigation.navigate('UserDetail')}>
            <UserImage
              source={{
                uri: `${item.userIcon}`,
              }}
            />
          </TouchableOpacity>
        </ImageContainer>
      </LeftContent>
      <RightContent>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeDetail', {item})}>
          <InfoContainer>
            <Name>{item.title}</Name>
          </InfoContainer>
          <Detail>{item.detail}</Detail>
          <ContentImageContainer>
            <ContentImage
              source={{
                uri: `${item.image}`,
              }}
            />
            <Icon
              style={{position: 'absolute', bottom: 5, right: 5}}
              name={favorited ? 'favorite' : 'favorite-outline'}
              color={favorited ? '#f00' : '#fff'}
              size={40}
              onPress={() => favo()}
            />
          </ContentImageContainer>
          <UserId>by @{item.userId}</UserId>
        </TouchableOpacity>
      </RightContent>
    </Container>
  );
};

export default HomeContent;
