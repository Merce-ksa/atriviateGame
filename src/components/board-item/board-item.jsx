import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './board-item.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonAction from '../button-action/button-action';
import ButtonRedirect from '../button-redirect/button-redirect';
import { deleteBoard } from '../../redux/actions/boards-action-creator';

function BoardItem({
  board, actions
}) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion} type="button">
        <p className="accordion__title">{board.name}</p>

      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
        >
          <p>
            Number of Questions:
            {' '}
            {board.numberQuestions}
          </p>
          <p>
            Difficulty:
            {' '}
            {board.difficulty}
          </p>
          <div className="action-link-container">
            <ButtonRedirect url={`/game/${board.id}`} fileName="play-icon.png" altDescription="play button" />
            <ButtonRedirect url={`/edit/${board.id}`} fileName="edit-icon.png" altDescription="edit button" />
            <ButtonAction action={() => actions.deleteBoard(board.id)} fileName="delete-icon.png" altDescription="delete button" />
          </div>

        </div>

      </div>
    </div>
  );
}

BoardItem.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    numberQuestions: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    deleteBoard: PropTypes.func.isRequired
  }).isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteBoard }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(BoardItem);
