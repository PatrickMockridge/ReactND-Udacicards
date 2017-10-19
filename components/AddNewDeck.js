import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { NavigationActions } from 'react-navigation';
import { color } from '../style/constants'

class AddNewDeck extends Component {
  state = {
    deckName: '',
  }
  async _addNewDeck() {
    // Update Redux
    this.props.dispatch(addNewDeck({
      [this.state.deckName]: [],
    }));
    // Save to DB
    const res = await AsyncStorage.getItem('allDecks');
    const allDecks = await JSON.parse(res);
    const updatedAllDecks = {
      ...allDecks,
      [this.state.deckName]: [],
    };
    await AsyncStorage.setItem('allDecks', JSON.stringify(updatedAllDecks));
    this.setState({deckName: ''});
    // Navigate to Home
    this.props.navigation.navigate('DeckList');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter Deck Title</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(deckName) => this.setState({deckName})}
            value={this.state.deckName}
          />
          <TouchableOpacity
            style={[styles.okButton, { marginTop: 20 }]}
            onPress={() => this._addNewDeck()}>
            <Text style={{color: color.darkBlue}}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: color.offBlue,
    fontWeight: '400',
    textAlign: 'center',
  },
  input: {
    height: 30,
    width: 300,
    borderColor: color.darkBlue,
    borderWidth: 1,
    borderRadius: 3,
  },
  okButton: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: color.orange,
  },
});

export default connect()(AddNewDeck);
