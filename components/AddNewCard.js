import React, { Component } from 'react';
import { View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addNewQuestion } from '../actions';
import { NavigationActions } from 'react-navigation';
import { color } from '../styles/constants'

class AddNewCard extends Component {
  static navigationOptions = {
    headerTintColor: color.darkGrey,
    headerStyle: {

    },
  };
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
  }
  async _addNewQuestion() {
    const { deckName } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    // Update Redux Store
    this.props.dispatch(addNewQuestion(deckName, question, answer));
    // Save to AsyncStorage
    const res = await AsyncStorage.getItem('decks');
    const decks = await JSON.parse(res);
    const updatedDecks = {
      ...decks,
      [deckName]: [...decks[deckName], { question, answer }],
    };
    await AsyncStorage.setItem('decks', JSON.stringify(updatedDecks));
    this.setState({ question: '', answer: '' });
    // Navigate to Home
    this.props.navigation.navigate('DeckList');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.label}>
          Enter question below
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text style={[styles.label, { marginTop: 10 }]}>
          Enter answer below
        </Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TouchableOpacity style={[styles.primaryButton, { marginTop: 100 }]}
          onPress={() => {this._addNewQuestion()}}>
          <Text style={{color: color.grey}}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: color.darkGrey,
  },
  input: {
    height: 40,
    width: 280,
    borderColor: color.darkGrey,
    borderWidth: 1,
    borderRadius: 3,
  },
  label: {
    fontSize: 26,
    fontWeight: '700',
  },
});

export default connect()(AddNewCard);
