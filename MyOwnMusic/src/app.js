/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView';
import ArtistDetailView from './ArtistDetailView';

class MyOwnMusic extends Component {

  render() {
      const isAndroid = Platform.os === 'android';

    return <Router>
        <Scene key="home" component={HomeView} hideNavBar={true}/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid} />
    </Router>
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
