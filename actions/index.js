export const TAKE_DECKS = 'TAKE_DECKS';
export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export function takeDecks(decks) {
  return {
    type: TAKE_DECKS,
    payload: {
      decks,
    },
  };
}

export function addNewDeck(deck) {
  return {
    type: ADD_NEW_DECK,
    payload: {
      deck,
    },
  };
}

export function addNewQuestion(deckName, question, answer) {
  return {
    type: ADD_NEW_QUESTION,
    payload: {
      deckName,
      question,
      answer,
    },
  };
}
