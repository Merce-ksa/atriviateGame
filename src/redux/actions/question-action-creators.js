import axios from 'axios';
import questionActionTypes from './question-action-types';

export function loadQuestionsApi({ difficulty, numberQuestions }) {
  const url = `https://opentdb.com/api.php?amount=${numberQuestions}&difficulty=${difficulty}&type=multiple`;
  return async (dispatch) => {
    const { data } = await axios.get(url);
    if (data.response_code === 0) {
      dispatch({
        type: questionActionTypes.LOAD_QUESTIONS_API,
        questions: data.results
      });
    } else {
      throw new Error('Something go wrong. We don\'t have questions');
    }
  };
}

export function nextQuestion() {
  return {
    type: questionActionTypes.NEXT_QUESTION
  };
}

export function checkQuestion(answer) {
  return {
    type: questionActionTypes.CHECK_QUESTION,
    answer
  };
}
