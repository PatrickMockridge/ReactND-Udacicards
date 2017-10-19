import { TAKE_DECKS, ADD_NEW_DECK, ADD_NEW_QUESTION } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case TAKE_DECKS:
      return {
        ...state,
        ...action.data.allDecks,
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

export default reducer
