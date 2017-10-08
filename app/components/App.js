import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import DogContainer from './dogs/dog_container';

export default class App extends Component {

  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <DogContainer />
      </Provider>
    );
  }
}
