import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import { color } from '../style/constants'

export default class QuizView extends Component {
  static navigationOptions = {
    headerTintColor: color.orange,
  };
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  }
  goToNextQuestion(restQuestions, score, totalNumber) {
    if (restQuestions.length > 0) {
      this.props.navigation.navigate('QuizView', { questions: restQuestions, totalNumber, score });
    } else {
      this.props.navigation.navigate('QuizCompleteView', { score, totalNumber });
    }
  }
  render() {
    const { questions, totalNumber, score } = this.props.navigation.state.params;
    const [currentQuestion, ...restQuestions] = questions;
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    };
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 16}}>
            {totalNumber - restQuestions.length}/{totalNumber}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>
              {currentQuestion.question}
            </Text>
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
            <Text style={styles.flipTextBack}>
              {currentQuestion.answer}
            </Text>
          </Animated.View>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => this.flipCard()}>
            <Text style={{color: color.darkBlue}}>View Answer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={() => this.goToNextQuestion(restQuestions, score + 1, totalNumber)}>
            <Text style={{color: color.darkBlue}}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainBtn} onPress={() => this.goToNextQuestion(restQuestions, score, totalNumber)}>
            <Text style={{color: color.darkBlue}}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  cardContainer: {
    flex: 4,
    alignItems: 'center',
  },
  formContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    width: 155,
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 12,
    backgroundColor: color.orange,
    alignItems: 'center',
  },
  secondaryButton: {
    width: 155,
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: color.offBlue,
    alignItems: 'center',
  },
  flipCard: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.darkGrey,
    backfaceVisibility: 'hidden',
    borderRadius: 5,
    padding: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: color.darkGrey,
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  flipCardBack: {
    padding: 20,
    backgroundColor: color.grey,
    position: 'absolute',
    top: 0,
  },
  flipText: {
    fontSize: 30,
    color: color.grey,
  },
  flipTextBack: {
    fontSize: 24,
    color: color.darkGrey,
  },
});
