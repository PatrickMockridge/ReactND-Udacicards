import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case TAKE_DECKS:
      return {
        ...state,
        ...action.data.decks,
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.data.deck,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.data.deckName]: [...state[action.payload.deckName], {
          question: action.data.question,
          answer: action.data.answer,
        }],
      };
    default:
      return state;
  }
}
