import questionActionTypes from '../actions/question-action-types';
import questionsReducer, { parseHTMLSpecialCaracters } from './questions-reducer';

describe('Given a parseHTMLSpecialCaracters function', () => {
  describe('When is invoked with string \'&quot;This is a quote\'&quot;', () => {
    test('Then should return \'"This is a quote"\'', () => {
      const inputString = '&quot;This is a quote&quot;';
      const answer = parseHTMLSpecialCaracters(inputString);
      expect(answer).toBe('"This is a quote"');
    });
  });
});

describe('Given a questionsReducer function', () => {
  describe('When is invoked with a state ', () => {
    const state = {
      questions: [],
      currentQuestion: 'Current Question',
      indexQuestion: 0,
      answerCorrect: null,
      points: 0,
      answersOK: 0
    };
    describe('And and action LOAD_QUESTIONS_API', () => {
      const action = {
        type: questionActionTypes.LOAD_QUESTIONS_API,
        questions: [{
          category: 'Entertainment: Video Games',
          type: 'multiple',
          difficulty: 'easy',
          question: 'Which of these is a type of monster found in Minecraft?',
          correct_answer: 'Skeleton',
          incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
        }, {
          category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
        }]
      };
      test('Then should return a new state with property questions with length 2', () => {
        const answer = questionsReducer(state, action);
        expect(answer.questions.length).toBe(2);
      });
    });
    describe('And an action NEXT_QUESTION', () => {
      const action = {
        type: questionActionTypes.NEXT_QUESTION
      };
      test('Then should return a new state with property currentQuestion to be null', () => {
        const answer = questionsReducer(state, action);
        expect(answer.currentQuestion).toBeNull();
      });
    });
  });
  describe('When is invoked with a state ', () => {
    const state = {
      questions: [{
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which of these is a type of monster found in Minecraft?',
        correct_answer: 'Skeleton',
        incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
      }, {
        category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
      }],
      currentQuestion: 'Current Question',
      indexQuestion: 0,
      answerCorrect: null,
      points: 0,
      answersOK: 0
    };
    describe('And an action NEXT_QUESTION', () => {
      const action = {
        type: questionActionTypes.NEXT_QUESTION
      };
      test('Then should return a new state with property indexQuestion equals to 1 ', () => {
        const answer = questionsReducer(state, action);
        expect(answer.indexQuestion).toBe(1);
      });
    });
  });
  describe('When is invoked with a state ', () => {
    const state = {
      questions: [{
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which of these is a type of monster found in Minecraft?',
        correct_answer: 'Skeleton',
        incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
      }, {
        category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
      }],
      currentQuestion: 'Current Question',
      indexQuestion: 2,
      answerCorrect: null,
      points: 0,
      answersOK: 0
    };
    describe('And an action NEXT_QUESTION', () => {
      const action = {
        type: questionActionTypes.NEXT_QUESTION
      };
      test('Then should return a new state with currentQuestion property having a property endGame to be true ', () => {
        const answer = questionsReducer(state, action);
        expect(answer.currentQuestion.endGame).toBe(true);
      });
    });
  });
  describe('When is invoked with a state with answerCorrect to be true', () => {
    const state = {
      questions: [{
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which of these is a type of monster found in Minecraft?',
        correct_answer: 'Skeleton',
        incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
      }, {
        category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
      }],
      currentQuestion: 'Current Question',
      indexQuestion: 2,
      answerCorrect: true,
      points: 0,
      answersOK: 0
    };
    describe('And an action CHECK_QUESTION with answer property \'Paris\'', () => {
      const action = {
        type: questionActionTypes.CHECK_QUESTION, answer: 'Paris'
      };
      test('Then should return a new state equal to the initial state ', () => {
        const newState = questionsReducer(state, action);
        expect(newState).toEqual(state);
      });
    });
  });
  describe('When is invoked with a state with answerCorrect null and currectQuestion.correct_answer equals to \'Paris\'', () => {
    const state = {
      questions: [{
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which of these is a type of monster found in Minecraft?',
        correct_answer: 'Skeleton',
        incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
      }, {
        category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
      }],
      currentQuestion: { question: 'Current Question', correct_answer: 'Paris' },
      indexQuestion: 2,
      answerCorrect: null,
      points: 0,
      answersOK: 0
    };
    describe('And an action CHECK_QUESTION with answer property \'Paris\'', () => {
      const action = {
        type: questionActionTypes.CHECK_QUESTION, answer: 'Paris'
      };
      test('Then should return a new state with property answersOK equals to 1 ', () => {
        const newState = questionsReducer(state, action);
        expect(newState.answersOK).toBe(1);
      });
    });
  });
  describe('When is invoked with a state with answerCorrect null', () => {
    const state = {
      questions: [{
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which of these is a type of monster found in Minecraft?',
        correct_answer: 'Skeleton',
        incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
      }, {
        category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
      }],
      currentQuestion: { question: 'Current Question', correct_answer: 'Paris' },
      indexQuestion: 2,
      answerCorrect: null,
      points: 0,
      answersOK: 0
    };
    describe('And an action CHECK_QUESTION with answer property \'Paris\'', () => {
      const action = {
        type: questionActionTypes.CHECK_QUESTION, answer: 'Paris'
      };
      test('Then should return a new state with property answersOK equals to 1 ', () => {
        const newState = questionsReducer(state, action);
        expect(newState.answersOK).toBe(1);
      });
    });
  });
  describe('When is invoked with a state with answerCorrect null and currectQuestion.correct_answer equals to \'Rome\'', () => {
    const state = {
      questions: [{
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which of these is a type of monster found in Minecraft?',
        correct_answer: 'Skeleton',
        incorrect_answers: ['Werewolf', 'Vampire', 'Minotaur']
      }, {
        category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In the game The World Ends With You, all of these characters act as a game partner with Neku for a week except:', correct_answer: 'Rhyme', incorrect_answers: ['Shiki', 'Joshua', 'Beat']
      }],
      currentQuestion: { question: 'Current Question', correct_answer: 'Rome' },
      indexQuestion: 2,
      answerCorrect: null,
      points: 0,
      answersOK: 0
    };
    describe('And an action CHECK_QUESTION with answer property \'Paris\'', () => {
      const action = {
        type: questionActionTypes.CHECK_QUESTION, answer: 'Paris'
      };
      test('Then should return a new state with property answerCorrect equals to false ', () => {
        const newState = questionsReducer(state, action);
        expect(newState.answerCorrect).toBe(false);
      });
    });
  });
});
