import React, { Component } from 'react';
import { View,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  StyleSheet } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import { takeDecks } from '../actions';

class DeckList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._updateList();
  }
  async _updateList() {
    const res = await AsyncStorage.getItem('decks');
    const decks = await JSON.parse(res) || {};
    this.props.dispatch(takeDecks(decks));
  }
  render() {
    const { decks } = this.props;
    return (
      <ScrollView style={{flex: 1}}>
        {Object.entries(decks).map(([key, value]) =>
          <Card
            key={key}
            name={key}
            questions={value}
            navigation={this.props.navigation}
          />
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);
