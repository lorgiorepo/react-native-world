/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

export default class MyOwnMusic extends Component {
  render() {
    const artist = {
        image: 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
        name: 'David Bowie',
        likes: 200,
        comments: 140,
    }

    return (
      <View style={ styles.container }>
        <ArtistBox artist={ artist }/>
        <ArtistBox artist={ artist }/>
        <ArtistBox artist={ artist }/>
        <ArtistBox artist={ artist }/>
        <ArtistBox artist={ artist }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }
});

AppRegistry.registerComponent('MyOwnMusic', () => MyOwnMusic);
