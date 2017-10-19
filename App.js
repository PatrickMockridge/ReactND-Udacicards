import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import MainNavigator from './navigation/MainNavigator'

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{height: Constants.statusBarHeight, backgroundColor: 'transparent'}} />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
