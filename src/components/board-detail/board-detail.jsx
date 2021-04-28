import React, { useEffect, useState } from 'react';
import './board-detail.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonActionText from '../button-action-text/button-action-text';
import ButtonRedirectText from '../button-redirect-text/button-redirect-text';
import { loadBoard, saveBoard } from '../../redux/actions/boards-action-creator';

function BoardDetail({ match: { params: { id } }, boardsGame, actions }) {
  const [data, setData] = useState({
    name: '',
    numberQuestions: '1',
    difficulty: 'easy'
  });

  if (id) {
    useEffect(() => {
      actions.loadBoard(id);
    }, []);

    useEffect(() => {
      setData({ ...boardsGame.selectedBoard });
    }, [boardsGame.selectedBoard]);
  }

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  return (
    <main className="detail-container">
      <h1>Board Name</h1>
      <section className="form">
        <label htmlFor="name">
          Board name:
          <input type="text" id="name" value={data.name} name="name" onChange={handleInputChange} required />
        </label>
        <br />
        <br />
        <label htmlFor="numQuestions">
          Number of questions:
          <input type="number" id="numberQuestions" value={data.numberQuestions} name="numberQuestions" min="1" max="50" onChange={handleInputChange} required />
        </label>
        <br />
        <br />
        <label htmlFor="difficulty">
          Dificulty:
          <select name="difficulty" id="difficulty" value={data.difficulty} onChange={handleInputChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </section>

      <div className="detail-buttons">
        <ButtonActionText
          action={() => actions.saveBoard({ ...data, numberQuestions: +data.numberQuestions })}
          value="Save"
        />
        <ButtonRedirectText url="/boardlist" value="Back" />
      </div>
    </main>
  );
}

BoardDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }).isRequired
  }).isRequired,
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
  }).isRequired,
  actions: PropTypes.shape({
    loadBoard: PropTypes.func.isRequired,
    saveBoard: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ boardsGame }) {
  return {
    boardsGame
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadBoard, saveBoard }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetail);
