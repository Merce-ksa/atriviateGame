import boardsActionTypes from '../actions/boards-action-types';

export function generateId(arrayInput) {
  if (arrayInput.length === 0) {
    return 1;
  }
  return arrayInput
    .map((element) => element.id).reduce((max, cur) => Math.max(max, cur), -Infinity) + 1;
}

export default function boardsReducer(state = {}, action) {
  let newBoards;
  switch (action.type) {
    case boardsActionTypes.ADD_BOARD:
      if (!state.boards
        .find((board) => board.name.toLowerCase() === action.board.name.toLowerCase())) {
        const newId = generateId(state.boards);
        const newBoard = { id: newId, ...action.board };
        return { boards: [...state.boards, newBoard], selectedBoard: newBoard };
      }
      return state;

    case boardsActionTypes.UPDATE_BOARD:
      newBoards = state.boards.map((board) => {
        if (board.id === +action.board.id) {
          return action.board;
        }
        return board;
      });

      return { boards: newBoards, selectedBoard: action.board };

    case boardsActionTypes.DELETE_BOARD:
      return { ...state, boards: state.boards.filter((board) => board.id !== +action.boardId) };

    case boardsActionTypes.LOAD_BOARD:
      return {
        ...state,
        selectedBoard: state.boards.find((board) => board.id === +action.boardId)
      };

    default:
      return state;
  }
}
