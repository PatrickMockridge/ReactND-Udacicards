export const TAKE_DECKS = 'TAKE_DECKS';
export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export const takeDecks = (decks) => {
  return {
    type: TAKE_DECKS,
    data: {
      allDecks,
    },
  };
}

export const addNewDeck = (deck) => {
  return {
    type: ADD_NEW_DECK,
    data: {
      deck,
    },
  };
}

export const addNewQuestion = (deckName, question, answer) => {
  return {
    type: ADD_NEW_QUESTION,
    data: {
      deckName,
      question,
      answer,
    },
  };
}