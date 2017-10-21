import React, { Component } from 'react';
import { View,
  Text,
  TouchableOpacity,
  StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';
import { color } from '../styles/constants'

export default class QuizCompleteView extends Component {
  componentDidMount() {
    // Clear local notification
    clearLocalNotification().then(setLocalNotification);
  }
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }));
  }

  render() {
    const { score, totalNumber, questions, name, imageSource } = this.props.navigation.state.params;
    const navigation = this.props.navigation;
    console.log(this.props.navigation)
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={[styles.headerContainer, styles.container]}>
          <SimpleLineIcons
            name="trophy"
            size={42}
            color={color.darkBlue}
          />
          <Text style={{fontSize: 26, fontWeight: '600', color: color.orange}}>
            Hooray!
          </Text>
        </View>
        <View style={[styles.scoreContainer, styles.container]}>
          <Text style={{fontSize: 14, color: color.darkGrey}}>
            Final Score
          </Text>
          <View style={{backgroundColor: color.darkGrey, borderRadius: 2, marginTop: 7}}>
            <Text style={{color:
              color.white,
              paddingVertical: 7,
              paddingHorizontal: 50,
              fontWeight: '600', fontSize: 20}}>
              {score} / {totalNumber}
            </Text>
          </View>
        </View>
        <View style={[styles.buttonContainer, styles.container]}>
          <TouchableOpacity
            style={[styles.secondaryButton, { marginTop: 10 }]}
            onPress={() => navigation.navigate('DeckView', { name, imageSource, questions })}>
            <Text style={{color: color.white}}>Back to Deck View</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, styles.container]}>
          <TouchableOpacity
            style={[styles.secondaryButton, { marginTop: 10 }]}
            onPress={() => navigation.navigate('QuizView', { questions, totalNumber: questions.length, score: 0 })}>
            <Text style={{color: color.orange}}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 3,
  },
  scoreContainer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 2,
  },
  secondaryButton: {
    width: 200,
    borderRadius: 4,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: color.offBlue,
    alignItems: 'center',
  },
});
