import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';

class DeckList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._updateDeckList();
  }
  async _updateDeckList() {
    const res = await AsyncStorage.getItem('allDecks');
    const allDecks = await JSON.parse(res) || {};
    this.props.dispatch(receiveDecks(allDecks));
  }
  render() {
    const { allDecks } = this.props;
    return (
      <ScrollView style={{flex: 1}}>
        {Object.entries(allDecks).map(([key, value]) =>
          <DeckCard
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

function mapStateToProps(allDecks) {
  return { allDecks };
}

export default connect(mapStateToProps)(DeckList);s
