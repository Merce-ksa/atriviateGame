import boardsActionTypes from './boards-action-types';

export function loadBoard(boardId) {
  return {
    type: boardsActionTypes.LOAD_BOARD,
    boardId
  };
}

export function saveBoard(board) {
  return {
    type: board.id ? boardsActionTypes.UPDATE_BOARD : boardsActionTypes.ADD_BOARD,
    board
  };
}

export function deleteBoard(boardId) {
  return {
    type: boardsActionTypes.DELETE_BOARD,
    boardId
  };
}
