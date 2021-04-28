import { fireEvent } from '@testing-library/react';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import BoardDetail from './board-detail';
import store from '../../redux/stores/configure-store';

describe('Given a Form function', () => {
  let mainContainer = null;
  beforeEach(() => {
    mainContainer = document.createElement('div');
    document.body.appendChild(mainContainer);
  });

  afterEach(() => {
    unmountComponentAtNode(mainContainer);
    mainContainer.remove();
    mainContainer = null;
  });

  describe('When is invoked ', () => {
    test('Then will display three label tags', () => {
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardDetail match={{ params: { id: null } }} />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const labels = document.querySelectorAll('label');
      expect(labels.length).toBe(3);
    });
  });

  describe('When input with id name changes', () => {
    test('Then input value will changes', () => {
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardDetail match={{ params: { id: null } }} />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const inputName = document.getElementById('name');
      const newEvent = { target: { value: 'board' } };
      fireEvent.change(inputName, newEvent);
      expect(inputName.value).toBe('board');
    });
  });

  describe('When input with id numQuestions changes', () => {
    test('Then input value will changes', () => {
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardDetail match={{ params: { id: null } }} />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const inputQuestion = document.getElementById('numberQuestions');
      const newEvent = { target: { value: '10' } };
      fireEvent.change(inputQuestion, newEvent);
      expect(inputQuestion.value).toBe('10');
    });
  });

  describe('When input with id dificulty changes', () => {
    test('Then input value will changes', () => {
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardDetail match={{ params: { id: null } }} />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const inputDificulty = document.getElementById('difficulty');
      const newEvent = { target: { value: 'medium' } };
      fireEvent.change(inputDificulty, newEvent);
      expect(inputDificulty.value).toBe('medium');
    });
  });
});
