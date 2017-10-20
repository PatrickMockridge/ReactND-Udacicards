import React, { Component } from 'react';
import { View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet } from 'react-native';
import { color } from '../styles/constants'


export default class DeckView extends Component {
  static navigationOptions = {
    headerTintColor: color.dark,
  };
  render() {
    const navigation = this.props.navigation;
    const { name, imgSource, questions } = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image source={imgSource} style={{width: 130, height: 130}} />
          <Text style={[styles.title, { marginTop: 10 }]}>{name}</Text>
          <Text style={{fontSize: 20, color: color.darkGrey}}>{`${questions.length} cards`}</Text>
        </View>
        <View style={styles.buttons}>
          {questions.length !== 0 &&
            <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('QuizView', { questions, totalNumber: questions.length, score: 0 })}>
              <Text style={{color: color.grey}}>Start Quiz</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.secondaryButton, { marginTop: 10 }]} onPress={() => navigation.navigate('AddCard', { deckName: name })}>
            <Text style={{color: color.darkGrey}}>Add Card</Text>
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
  buttons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '600',
    color: color.darkGrey,
  },
  primaryButton: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: color.darkGrey,
  },
  secondaryButton: {
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 39,
    borderWidth: 1,
    borderColor: color.darkGrey,
  },
});
