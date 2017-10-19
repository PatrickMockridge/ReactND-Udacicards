import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo';
import { Foundation } from '@expo/vector-icons';
import { color } from '../style/constants'
import DeckList from '../components/DeckList';
import AddNewDeck from '../components/AddNewDeck';
import DeckView from '../components/DeckView';
import QuizView from '../components/QuizView';
import AddNewCard from '../components/AddNewCard';
import QuizCompleteView from '../components/QuizCompleteView';


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Foundation name="folder" size={25} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddNewDeck,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Foundation name="folder-add" size={25} color={tintColor} />
    },
  },
}, {
  tabBarOptions: {
    activeBackgroundColor: color.darkBlue,
    activeTintColor: color.grey,
    inactiveBackgroundColor: color.darkGrey,
    inactiveTintColor: color.offBlue,
    style: {
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
    labelStyle: {
      fontSize: 13,
    },
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckView: {
    screen: DeckView,
  },
  AddCard: {
    screen: AddNewCard,
  },
  QuizView: {
    screen: QuizView,
  },
  QuizCompleteView: {
    screen: QuizCompleteView,
    navigationOptions: {
      header: null,
    },
  },
});

export default MainNavigator
