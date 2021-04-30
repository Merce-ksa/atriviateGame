import React from 'react';
import './board-list.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardItem from '../board-item/board-item';
import ButtonRedirectText from '../button-redirect-text/button-redirect-text';

function BoardList({ boardsGame }) {
  return (
    <main className="board-list">
      <div className="boards">
        <h1>Boards</h1>
        <div className="board">
          {boardsGame.boards && boardsGame
            .boards.map((board) => (
              <BoardItem board={board} key={board.id} className="board__item" />
            ))}
        </div>
      </div>
      <ButtonRedirectText url="/edit" value="New board" className="new-board" />
    </main>
  );
}

BoardList.propTypes = {
  boardsGame: PropTypes.shape({
    boards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      numberQuestions: PropTypes.number.isRequired,
      difficulty: PropTypes.string.isRequired
    }).isRequired).isRequired,
    selectedBoard: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      numberQuestions: PropTypes.number.isRequired,
      difficulty: PropTypes.string.isRequired
    })
  }).isRequired
};

function mapStateToProps({ boardsGame }) {
  return {
    boardsGame
  };
}

export default connect(mapStateToProps)(BoardList);
