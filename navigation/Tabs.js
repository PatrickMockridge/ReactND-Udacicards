import { TabNavigator } from 'react-navigation'
import { Foundation } from '@expo/vector-icons';
import { color } from '../style/constants'
import DeckList from '../components/DeckList';
import AddNewDeck from '../components/AddNewDeck';

export const Tabs = TabNavigator({
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
    inactiveBackgroundColor: 'color.darkGrey',
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
