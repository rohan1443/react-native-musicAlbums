import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//<Image source={} style={}>

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  //destructuring the object
  const {
    cardSectionContainer,
    cardDetailConrtainer,
    imageContainer,
    cardAuthorContainer,
    textTitle,
    cardImageContainer
  } = styles;

  return (
    <Card>
      <CardSection style={cardSectionContainer}>
        <View style={cardDetailConrtainer}>
          <Image style={imageContainer} source={{ uri: thumbnail_image }} />
          <View style={cardAuthorContainer}>
            <Text style={textTitle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
      </CardSection>

      <CardSection>
        <Image style={cardImageContainer} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button buttonName={'Buy Now'} onPress={() => Linking.openURL(url)} />
      </CardSection>
    </Card>
  );
}

const styles = {
  cardSectionContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  cardDetailConrtainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cardAuthorContainer: {
    marginLeft: 5
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15
  },
  imageContainer: {
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  cardImageContainer: {
    flex: 1,
    width: null,
    height: 300,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 5
  }
}

export default AlbumDetail;