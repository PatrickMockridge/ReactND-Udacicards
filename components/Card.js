import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet,
  TouchableOpacity } from 'react-native';
import { color } from '../styles/constants'

export default class Card extends Component {
  render() {
    const { name, imageSource, questions, navigation } = this.props;
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('DeckView', { name, imageSource, questions })}>
        <Text style={{fontSize: 20, color: color.grey, fontWeight: '600'}}>{name}</Text>
        <Text style={{fontSize: 12, color: color.grey}}>{`${questions.length} cards`}</Text>
      </TouchableOpacity>
    );
  }
}

export const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: color.darkBlue,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 3, height: 4 },
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOpacity: 0.7,
    alignItems: 'center',
  },
});
