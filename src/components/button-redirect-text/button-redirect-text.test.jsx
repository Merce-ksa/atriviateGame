import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import ButtonRedirectText from './button-redirect-text';

describe('Given a ButtonRedirectText function', () => {
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

  describe('When is invoked with 2 string parameters', () => {
    test('Then will display a button', () => {
      act(() => {
        render(<MemoryRouter>
          <ButtonRedirectText url="/game/1" value="New board" />
               </MemoryRouter>, container);
      });

      const link = container.querySelectorAll('.button-redirect-text');

      expect(link.length).toBe(1);
    });
  });
  describe('When is invoked with value', () => {
    test('Then text content is equal a New board', () => {
      act(() => {
        render(<MemoryRouter>
          <ButtonRedirectText url="/game/1" value="New board" />
               </MemoryRouter>, container);
      });

      const link = container.querySelector('.button-redirect-text');

      expect(link.textContent).toBe('New board');
    });
  });
  describe('When is invoked with 2 parameters or less', () => {
    test('Then will display nothing', () => {
      act(() => {
        render(
          <ButtonRedirectText value="New board" />,
          container
        );
      });

      const content = container.textContent;

      expect(content).toBe('');
    });
  });
});
