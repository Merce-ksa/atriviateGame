import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import BoardList from './board-list';
import store from '../../redux/stores/configure-store';

describe('Given a BoardList function', () => {
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

  describe('When is invoked', () => {
    test('Then create a title with text content is equal a Boards', () => {
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardList />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const title = mainContainer.querySelector('h1');

      expect(title.textContent).toBe('Boards');
    });

    test('Then create a link with text content is equal a New board', () => {
      act(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <BoardList />
            </MemoryRouter>
          </Provider>, mainContainer
        );
      });

      const linkNewBoard = mainContainer.querySelector('.button-redirect-text');

      expect(linkNewBoard.textContent).toBe('New board');
    });
  });
});
