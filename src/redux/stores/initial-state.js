const initialState = {
  boardsGame: {
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
    }],
    selectedBoard: null
  },
  questionsGame: {
    questions: [],
    currentQuestion: null,
    indexQuestion: 0,
    answerCorrect: null,
    points: 0,
    answersOK: 0
  }
};

export default initialState;
