import React, { Component } from 'react'
import {StatusBar, View} from 'react-native'
import {Constants} from 'expo'
import {color} from '../style/constants'

class AppStatusBar extends Component {
  render () {
    return (
      <View
        style={{
          backgroundColor: color.darkBlue,
          height: Constants.statusBarHeight
        }}
      >
        <StatusBar barStyle='light-content' />
      </View>
    )
  }
}

export default AppStatusBar
