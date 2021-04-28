import boardsActionTypes from './boards-action-types';
import { loadBoard, deleteBoard, saveBoard } from './boards-action-creator';

describe('Given a loadBoard function', () => {
  describe('When is invoked with a parameter 11', () => {
    test('Then should return an action with type boardsActionTypes.LOAD_BOARD', () => {
      expect(loadBoard(11).type).toBe(boardsActionTypes.LOAD_BOARD);
    });
    test('Then should return an action with boardId equals to 11', () => {
      expect(loadBoard(11).boardId).toBe(11);
    });
  });
});

describe('Given a saveBoard function', () => {
  describe('When is invoked with a parameter a board object with id', () => {
    const board = { id: 11, name: 'A board name' };
    test('Then should return an action with type boardsActionTypes.UPDATE_BOARD', () => {
      expect(saveBoard(board).type).toBe(boardsActionTypes.UPDATE_BOARD);
    });
    test('Then should return an action with board property equals to board object', () => {
      expect(saveBoard(board).board).toEqual({ id: 11, name: 'A board name' });
    });
  });
  describe('When is invoked with a parameter a board object without id', () => {
    const board = { name: 'A board name' };
    test('Then should return an action with type boardsActionTypes.ADD_BOARD', () => {
      expect(saveBoard(board).type).toBe(boardsActionTypes.ADD_BOARD);
    });
    test('Then should return an action with board property equals to board object', () => {
      expect(saveBoard(board).board).toEqual({ name: 'A board name' });
    });
  });
});

describe('Given a deleteBoard function', () => {
  describe('When is invoked with a parameter 11', () => {
    test('Then should return an action with type boardsActionTypes.DELETE_BOARD', () => {
      expect(deleteBoard(11).type).toBe(boardsActionTypes.DELETE_BOARD);
    });
    test('Then should return an action with boardId equals to 11', () => {
      expect(deleteBoard(11).boardId).toBe(11);
    });
  });
});
