import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { addNewQuestion } from '../actions';
import { NavigationActions } from 'react-navigation';
import { color } from '../style/constants'

class AddNewCard extends Component {
  static navigationOptions = {
    headerTintColor: color.white,
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
    // Update Redux
    this.props.dispatch(addNewQuestion(deckName, question, answer));
    // Save to DB
    const res = await AsyncStorage.getItem('allDecks');
    const allDecks = await JSON.parse(res);
    const updatedDecks = {
      ...allDecks,
      [deckName]: [...allDecks[deckName], { question, answer }],
    };
    await AsyncStorage.setItem('allDecks', JSON.stringify(updatedDecks));
    this.setState({ question: '', answer: '' });
    // Navigate to Home
    this.props.navigation.navigate('DeckList');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.labelText}>
          Question
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text style={[styles.labelText, { marginTop: 10 }]}>
          Answer
        </Text>
        <TextInput
          style={[styles.textInput]}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TouchableOpacity
          style={[styles.mainButton, { marginTop: 100 }]}
          onPress={() => {this._addNewQuestion()}}>
          <Text style={{color: color.grey}}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainButton: {
    borderRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: color.darkGrey,
  },
  textInput: {
    height: 30,
    width: 300,
    borderColor: color.darkBlue,
    borderWidth: 2,
    borderRadius: 2,
  },
  labelText: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default connect()(AddNewCard);
