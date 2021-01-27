import React from 'react';
import styled from 'styled-components/native';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

const Container = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.ScrollView`
  background: rgba(255, 255, 255, 0.7);
  margin: 16px 0;
  padding: 16px;
  height: 90%;
  width: 90%;
  color: #000;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
`;

const HowToMake = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
`;

const DetailScroll = styled.ScrollView`
  height: 20%;
`;

const Detail = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
`;

const MakeContainer = styled.View`
  height: 80%;
`;

const MakeContent = styled.FlatList`
  height: 100%;
`;

const MakeText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const MakeImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const Make = styled.View`
  margin-bottom: 24px;
`;

const MaterialTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
`;

const MaterialContainer = styled.View`
  margin-bottom: 16px;
`;

const MaterialContent = styled.FlatList``;

const MaterialText = styled.Text`
  font-weight: bold;
`;

const HomeDetail = ({navigation, route}) => {
  const {
    id,
    title,
    detail,
    userIcon,
    userName,
    userId,
    image,
    make,
    material,
  } = route.params.item;
  return (
    <Container>
      <ImageContainer
        source={{
          uri: `${image}`,
        }}
        resizeMode="cover">
        <Content>
          <Title>{title}</Title>

          <Detail>{detail}</Detail>
          <MaterialTitle>【材料】</MaterialTitle>
          <MaterialContainer>
            <MaterialContent
              scrollEnabled={false}
              data={material}
              renderItem={({item, index}) => (
                <MaterialText>・{item.text}</MaterialText>
              )}
            />
          </MaterialContainer>
          <HowToMake>~作り方~</HowToMake>
          <MakeContainer>
            <MakeContent
              scrollEnabled={false}
              data={make}
              renderItem={({item, index}) => (
                <Make>
                  <MakeText>
                    {index + 1}. {item.text}
                  </MakeText>
                  {item.image !== null ? (
                    <MakeImage
                      source={
                        item.image
                          ? {
                              uri: `${item.image}`,
                            }
                          : null
                      }
                      resizeMode="cover"
                    />
                  ) : null}
                </Make>
              )}
            />
          </MakeContainer>
        </Content>
      </ImageContainer>
    </Container>
  );
};
export default HomeDetail;
