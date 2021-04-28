import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import BoardItem from './board-item';
import store from '../../redux/stores/configure-store';

describe('Given a BoardItem function', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked with a board object', () => {
    test('Then will display the board name', () => {
      const board = {
        id: 2,
        name: 'With Friends',
        numberQuestions: 20,
        difficulty: 'medium',
        category: [{ id: 25, name: 'Art' },
          { id: 17, name: 'Science & Nature' },
          { id: 21, name: 'Sports' }]
      };
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardItem board={board} />
            </MemoryRouter>
          </Provider>, container
        );
      });

      const title = container.querySelector('.accordion__title');

      expect(title.textContent).toBe('With Friends');
    });
  });
  describe('When is invoked with a board object', () => {
    describe('And click event is triggered in accordion', () => {
      test('Then will display the accordion', () => {
        const board = {
          id: 2,
          name: 'With Friends',
          numberQuestions: 20,
          difficulty: 'medium',
          category: [{ id: 25, name: 'Art' },
            { id: 17, name: 'Science & Nature' },
            { id: 21, name: 'Sports' }]
        };
        act(() => {
          render(
            <Provider store={store}>
              <MemoryRouter>
                <BoardItem board={board} />
              </MemoryRouter>
            </Provider>, container
          );
        });

        const accordion = container.querySelector('button');

        act(() => {
          fireEvent.click(accordion);
        });

        expect(accordion.getAttribute('class')).toBe('accordion active');
      });
    });
    describe('And click event is triggered twice in accordion', () => {
      test('Then will collapse the accordion', () => {
        const board = {
          id: 2,
          name: 'With Friends',
          numberQuestions: 20,
          difficulty: 'medium',
          category: [{ id: 25, name: 'Art' },
            { id: 17, name: 'Science & Nature' },
            { id: 21, name: 'Sports' }]
        };
        act(() => {
          render(
            <Provider store={store}>
              <MemoryRouter>
                <BoardItem board={board} />
              </MemoryRouter>
            </Provider>, container
          );
        });

        const accordion = container.querySelector('button');

        act(() => {
          fireEvent.click(accordion);
        });

        act(() => {
          fireEvent.click(accordion);
        });

        expect(accordion.getAttribute('class')).toBe('accordion ');
      });
    });
  });
});
