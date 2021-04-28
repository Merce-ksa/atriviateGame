import boardsActionTypes from '../actions/boards-action-types';
import boardsReducer, { generateId } from './boards-reducer';

describe('Given a generateId function', () => {
  describe('When is invoked with an empty array', () => {
    test('Then should return 1', () => {
      const inputArray = [];
      const answer = generateId(inputArray);
      expect(answer).toBe(1);
    });
  });
  describe('When is invoked with an array = [{id: 13}, {id: 7}]', () => {
    describe('Then should return 14', () => {
      const inputArray = [{ id: 13 }, { id: 7 }];
      const answer = generateId(inputArray);
      expect(answer).toBe(14);
    });
  });
});

describe('Given a boardsReducer function', () => {
  describe('When is invoked with an state = ', () => {
    const state = {
      boards: [{
        id: 1,
        name: 'Short Travel',
        numberQuestions: 10,
        difficulty: 'easy'
      },
      {
        id: 2,
        name: 'With Friends',
        numberQuestions: 20,
        difficulty: 'medium'
      }]
    };
    describe('And an action type boardsActionTypes.ADD_BOARD', () => {
      const board = { name: 'New Board', numberQuestions: 15, difficulty: 'hard' };
      const action = { type: boardsActionTypes.ADD_BOARD, board };
      test('Then should return an object with property boards has a length 3', () => {
        const answer = boardsReducer(state, action);
        expect(answer.boards.length).toBe(3);
      });
    });
    describe('And an action type boardsActionTypes.ADD_BOARD and a board with name already in the state', () => {
      const board = { name: 'Short Travel', numberQuestions: 15, difficulty: 'hard' };
      const action = { type: boardsActionTypes.ADD_BOARD, board };
      test('Then should return an object with property boards has a length 2', () => {
        const answer = boardsReducer(state, action);
        expect(answer.boards.length).toBe(2);
      });
    });
    describe('And an action type boardsActionTypes.UPDATE_BOARD and a board object with id: 1', () => {
      const board = {
        id: 1, name: 'Long Travel', numberQuestions: 15, difficulty: 'hard'
      };
      const action = { type: boardsActionTypes.UPDATE_BOARD, board };
      test('Then should return an object with property selectedBoard with a name with value Long Travel', () => {
        const answer = boardsReducer(state, action);
        expect(answer.selectedBoard.name).toBe('Long Travel');
      });
    });
    describe('And an action type boardsActionTypes.DELETE_BOARD and a boardId string "1"', () => {
      const boardId = '1';
      const action = { type: boardsActionTypes.DELETE_BOARD, boardId };
      test('Then should return an object with property boards with length = 1', () => {
        const answer = boardsReducer(state, action);
        expect(answer.boards.length).toBe(1);
      });
    });
    describe('And an action type boardsActionTypes.LOAD_BOARD and a boardId string "2"', () => {
      const boardId = '2';
      const action = { type: boardsActionTypes.LOAD_BOARD, boardId };
      test('Then should return an object with property selectedBoard with name property equal "With Friends"', () => {
        const answer = boardsReducer(state, action);
        expect(answer.selectedBoard.name).toBe('With Friends');
      });
    });
  });
});
