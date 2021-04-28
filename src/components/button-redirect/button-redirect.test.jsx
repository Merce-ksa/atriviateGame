import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import ButtonRedirect from './button-redirect';

describe('Given a ButtonRedirect function', () => {
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

  describe('When is invoked with 3 string parameters', () => {
    test('Then will display a image', () => {
      act(() => {
        render(
          <MemoryRouter>
            <ButtonRedirect url="/game/1" fileName="play-icon.png" altDescription="Play icon" />
          </MemoryRouter>, container
        );
      });

      const image = container.querySelectorAll('img');

      expect(image.length).toBe(1);
    });
  });
  describe('When is invoked with 2 parameters or less', () => {
    test('Then will display nothing', () => {
      act(() => {
        render(
          <ButtonRedirect url="/game/1" fileName="play-icon.png" />,
          container
        );
      });

      const content = container.textContent;

      expect(content).toBe('');
    });
  });
});
