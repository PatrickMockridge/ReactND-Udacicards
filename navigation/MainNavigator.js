import { StackNavigator } from 'react-navigation'
import DeckView from '../components/DeckView';
import QuizView from '../components/QuizView';
import AddNewCard from '../components/AddNewCard';
import QuizCompleteView from '../components/QuizCompleteView';
import Tabs from './Tabs'

export const MainNavigator = StackNavigator({
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
