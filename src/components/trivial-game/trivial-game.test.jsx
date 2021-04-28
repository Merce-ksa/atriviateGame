import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import TrivialGame from './trivial-game';
import rootReducer from '../../redux/reducers';

describe('Given a TrivialGame function', () => {
  let mainContainer = null;

  beforeEach(() => {
    mainContainer = document.createElement('main');
    document.body.appendChild(mainContainer);
  });

  afterEach(() => {
    unmountComponentAtNode(mainContainer);
    mainContainer.remove();
    mainContainer = null;
  });

  describe('When is invoked with an state that have a currentQuestion property', () => {
    test('Then create a 2 section selector', () => {
      const currentQuestion = {
        totalNumberQuestions: 10,
        numberQuestion: 1,
        question: 'The Principality of Sealand is an unrecognized micronation off the coast of what country?',
        answers: ['Japan', 'Australia', 'The United Kingdom', 'Argentina']
      };
      const initialState = {
        boardsGame: {},
        questionsGame: { currentQuestion: { ...currentQuestion } }
      };
      const store = createStore(rootReducer, initialState);
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <TrivialGame />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const sections = mainContainer.querySelectorAll('section');

      expect(sections.length).toBe(2);
    });

    test('Then create a title with text content is equal a aTríviate Questions', () => {
      const currentQuestion = {
        totalNumberQuestions: 10,
        numberQuestion: 1,
        question: 'The Principality of Sealand is an unrecognized micronation off the coast of what country?',
        answers: ['Japan', 'Australia', 'The United Kingdom', 'Argentina']
      };
      const initialState = {
        boardsGame: {},
        questionsGame: { currentQuestion: { ...currentQuestion } }
      };
      const store = createStore(rootReducer, initialState);
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <TrivialGame />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const title = mainContainer.querySelector('h1');

      expect(title.textContent).toBe('aTríviate Questions');
    });
  });
  describe('When is invoked with an state that has currentQuestion.endGame true', () => {
    test('Should print a h1 title with text aTríviate Score', () => {
      const currentQuestion = { endGame: true };
      const initialState = {
        boardsGame: {},
        questionsGame: { questions: [], currentQuestion: { ...currentQuestion } }
      };
      const store = createStore(rootReducer, initialState);
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <TrivialGame />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const title = mainContainer.querySelector('h1');

      expect(title.textContent).toBe('aTríviate Score');
    });
  });
  describe('When is invoked with an state that has currentQuestion equal to null', () => {
    test('Should not print anything', () => {
      const initialState = {
        boardsGame: {},
        questionsGame: { questions: [], currentQuestion: null }
      };
      const store = createStore(rootReducer, initialState);
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <TrivialGame />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const content = mainContainer.innerHTML;

      expect(content).toBe('');
    });
  });
  describe('When is invoked with a route /game/1', () => {
    test('Then should have selectedBoard state equals to board 1', () => {
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
          questions: []
        }
      };
      const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={['game/1']}>
              <Route path="game/:id">
                <TrivialGame />
              </Route>
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });
      expect(store.getState().boardsGame.selectedBoard).toEqual({
        id: 1,
        name: 'Short Travel',
        numberQuestions: 10,
        difficulty: 'easy'
      });
    });
  });
});
