import questionActionTypes from '../actions/question-action-types';

const pointsCorrectAnswer = 10;

export function parseHTMLSpecialCaracters(inputString) {
  const div = document.createElement('div');
  div.innerHTML = inputString;
  return div.textContent;
}

export default function questionsReducer(state = {}, action) {
  let newCurrentQuestion;
  let newIndexQuestion;
  let newPoints;
  let newAnswerOK;

  switch (action.type) {
    case questionActionTypes.LOAD_QUESTIONS_API:
      return {
        questions: action.questions,
        currentQuestion: null,
        indexQuestion: 0,
        answerCorrect: null,
        points: 0,
        answersOK: 0
      };

    case questionActionTypes.NEXT_QUESTION:
      if (state.questions.length === 0) {
        return {
          ...state,
          currentQuestion: null,
          indexQuestion: 0,
          answerCorrect: null,
          points: 0,
          answersOK: 0
        };
      } if (state.indexQuestion < state.questions.length) {
        newCurrentQuestion = { ...state.questions[state.indexQuestion] };
        newCurrentQuestion.totalNumberQuestions = state.questions.length;
        newCurrentQuestion.numberQuestion = state.indexQuestion + 1;
        newCurrentQuestion
          .question = parseHTMLSpecialCaracters(state.questions[state.indexQuestion].question);
        newCurrentQuestion.correct_answer = parseHTMLSpecialCaracters(state
          .questions[state.indexQuestion].correct_answer);
        newCurrentQuestion.answers = [newCurrentQuestion.correct_answer];
        state.questions[state.indexQuestion].incorrect_answers.map((wrong) => {
          if (Math.random() > 0.5) {
            newCurrentQuestion.answers.push(parseHTMLSpecialCaracters(wrong));
          } else {
            newCurrentQuestion.answers.unshift(parseHTMLSpecialCaracters(wrong));
          }
          return true;
        });
        newIndexQuestion = state.indexQuestion + 1;
        return {
          ...state,
          currentQuestion: newCurrentQuestion,
          indexQuestion: newIndexQuestion,
          answerCorrect: null
        };
      }
      newCurrentQuestion = {
        ...state, endGame: true, points: state.points, answersOK: state.answersOK
      };
      return {
        ...state,
        currentQuestion: newCurrentQuestion,
        indexQuestion: 0,
        answerCorrect: null,
        points: 0,
        answersOK: 0
      };

    case questionActionTypes.CHECK_QUESTION:
      if (state.answerCorrect === null) {
        if (state.currentQuestion.correct_answer === action.answer) {
          newPoints = state.points + pointsCorrectAnswer;
          newAnswerOK = state.answersOK + 1;
          return {
            ...state, answerCorrect: true, points: newPoints, answersOK: newAnswerOK
          };
        }
        return { ...state, answerCorrect: false };
      }
      return state;

    default:
      return state;
  }
}
