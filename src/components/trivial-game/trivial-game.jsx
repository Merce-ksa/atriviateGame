import React, { useEffect } from 'react';
import './trivial-game.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import ButtonActionText from '../button-action-text/button-action-text';
import { loadBoard } from '../../redux/actions/boards-action-creator';
import { loadQuestionsApi, checkQuestion, nextQuestion } from '../../redux/actions/question-action-creators';
import ButtonRedirectText from '../button-redirect-text/button-redirect-text';

function TrivialGame({ boardsGame, questionsGame, actions }) {
  const { id: boardId } = useParams();

  if (boardId) {
    useEffect(() => {
      actions.loadBoard(+boardId);
    }, []);

    useEffect(() => {
      if (boardsGame.selectedBoard) {
        actions.loadQuestionsApi(boardsGame.selectedBoard);
      }
    }, [boardsGame.selectedBoard]);

    useEffect(() => {
      if (questionsGame.questions.length > 0) {
        actions.nextQuestion();
      }
    }, [questionsGame.questions]);
  }

  if (!questionsGame.currentQuestion) {
    return (
      <>
      </>
    );
  }

  if (questionsGame.currentQuestion?.endGame) {
    return (
      <main className="trivial-game-content">
        <section className="title-container">
          <h1>aTríviate Score</h1>
          <div className="score-container">
            <p>
              You scored
              {' '}
              <b>{questionsGame.currentQuestion.points}</b>
            </p>
            <p>
              Right Answers:
              {' '}
              <b>{questionsGame.currentQuestion.answersOK}</b>
            </p>
            <p>
              Wrong Answers:
              {' '}
              <b>{questionsGame.questions.length - questionsGame.currentQuestion.answersOK}</b>
            </p>
          </div>
          <ButtonRedirectText url="/boardlist" value="Back" />
        </section>
      </main>
    );
  }

  return (
    <main className="trivial-game-content">
      <section className="title-container">
        <h1>aTríviate Questions</h1>
        <p className="numeration">
          {`${questionsGame.currentQuestion.numberQuestion} / ${questionsGame.currentQuestion.totalNumberQuestions}`}
        </p>
      </section>
      <section className="question-container">
        <p className="question">{questionsGame.currentQuestion.question}</p>
        <div className="answers">
          {questionsGame.currentQuestion.answers.map((answer) => (
            <ButtonActionText
              action={() => actions.checkQuestion(answer)}
              value={answer}
              key={answer}
            />
          ))}
          {(questionsGame.answerCorrect !== null)
            ? (
              <>
                <p className={(questionsGame.answerCorrect) ? 'check-answer hit' : 'check-answer fail'}>
                  {(questionsGame.answerCorrect) ? '✓' : '✗'}
                </p>
                <button type="button" className="next-question" onClick={() => actions.nextQuestion()}>
                  <img src={`${process.env.PUBLIC_URL}/img/next.png`} alt="next question icon" />
                </button>
              </>
            ) : ''}

        </div>
      </section>
    </main>
  );
}

TrivialGame.propTypes = {
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
  questionsGame: PropTypes.shape({
    questions: PropTypes.arrayOf(PropTypes.shape({})),
    currentQuestion: PropTypes.shape({
      endGame: PropTypes.bool,
      points: PropTypes.number,
      answersOK: PropTypes.number,
      question: PropTypes.string,
      answers: PropTypes.arrayOf(PropTypes.string),
      totalNumberQuestions: PropTypes.number,
      numberQuestion: PropTypes.number
    }),
    indexQuestion: PropTypes.number,
    answerCorrect: PropTypes.bool,
    points: PropTypes.number,
    answersOK: PropTypes.number,
    correctAnswer: PropTypes.bool
  }).isRequired,
  actions: PropTypes.shape({
    loadBoard: PropTypes.func.isRequired,
    loadQuestionsApi: PropTypes.func.isRequired,
    checkQuestion: PropTypes.func.isRequired,
    nextQuestion: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ boardsGame, questionsGame }) {
  return {
    boardsGame, questionsGame
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadBoard,
      loadQuestionsApi,
      checkQuestion,
      nextQuestion
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrivialGame);
