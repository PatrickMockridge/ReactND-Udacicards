import { TAKE_DECKS, ADD_NEW_DECK, ADD_NEW_QUESTION } from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case TAKE_DECKS:
      return {
        ...state,
        ...action.payload.decks,
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.payload.deck,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.payload.deckName]: [...state[action.payload.deckName], {
          question: action.payload.question,
          answer: action.payload.answer,
        }],
      };
    default:
      return state;
  }
}
