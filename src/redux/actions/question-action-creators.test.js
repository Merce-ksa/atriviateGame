import questionActionTypes from './question-action-types';
import { loadQuestionsApi, nextQuestion, checkQuestion } from './question-action-creators';

describe('Given a nexQuestion function', () => {
  describe('When is invoked', () => {
    test('Then will return an object with type questionActionTypes.NEXT_QUESTION', () => {
      expect(nextQuestion()).toEqual({ type: questionActionTypes.NEXT_QUESTION });
    });
  });
});

describe('Given a checkQuestion function', () => {
  describe('When is invoked with a string Paris', () => {
    const myAnswer = 'Paris';
    test('Then will return an objecte with type ', () => {
      expect(checkQuestion(myAnswer).type).toBe(questionActionTypes.CHECK_QUESTION);
    });
    test('Then will return an object with answer property Paris', () => {
      expect(checkQuestion(myAnswer).answer).toBe('Paris');
    });
  });
});
