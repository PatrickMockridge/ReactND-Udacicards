import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from '../style/constants'

class Card extends Component {
  render() {
    const { name, imageSource, questions, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate('DeckView', { name, imageSource, questions })}>
        <Text style={{fontSize: 22, color: color.grey, fontWeight: '700'}}>{name}</Text>
        <Text style={{fontSize: 14, color: color.grey}}>{`${questions.length} cards`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: color.offBlue,
    borderRadius: 4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOpacity: 0.7,
    alignItems: 'center',
  },
});
