/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { Provider } from 'redux';
import FlatListBasics from './flat_list_basics';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu\n' + 'Hello, world!',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  render() {
    const width = Dimensions.get('window').width;

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.35}}>
          <Image
            style={{width, height: 250}}
            source={{uri: "https://res.cloudinary.com/shuttr/image/upload/v1506724038/Shuttr/kx1prywj2uvsiygj5gzk.jpg"}}/>
        </View>
        <View style={{flex: 0.65, backgroundColor: "grey"}}>
          <FlatListBasics />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});
