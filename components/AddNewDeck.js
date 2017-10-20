import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { NavigationActions } from 'react-navigation';
import { color } from '../styles/constants'

class AddNewDeck extends Component {
  state = {
    text: '',
  }
  async _addNewDeck() {
    // Update Redux
    this.props.dispatch(addNewDeck({
      [this.state.text]: [],
    }));
    // Save to AsyncStorage
    const res = await AsyncStorage.getItem('decks');
    const decks = await JSON.parse(res);
    const updatedDecks = {
      ...decks,
      [this.state.text]: [],
    };
    await AsyncStorage.setItem('decks', JSON.stringify(updatedDecks));
    this.setState({text: ''});
    // Navigate to Home
    this.props.navigation.navigate('DeckList');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter a title for your new deck</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity
            style={[styles.primaryButton, { marginTop: 20 }]}
            onPress={() => this._addNewDeck()}>
            <Text style={{color: color.grey}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
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
    color: color.darkGrey,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 280,
    borderColor: color.darkGrey,
    borderWidth: 1,
    borderRadius: 4,
  },
  primaryButton: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: color.darkGrey,
  },
});


export default connect()(AddNewDeck);
