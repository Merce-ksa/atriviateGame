import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ButtonAction from './button-action';

describe('Given a ButtonAction function', () => {
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

  describe('When is invoked with 3 parameters', () => {
    test('Then will display a button', () => {
      act(() => {
        render(
          <ButtonAction action={() => {}} fileName="delete-icon.png" altDescription="Play icon" />, container
        );
      });

      const buttons = container.querySelectorAll('button');

      expect(buttons.length).toBe(1);
    });
  });
  describe('When is invoked with 2 parameters or less', () => {
    test('Then will display nothing', () => {
      act(() => {
        render(
          <ButtonAction url="/game/1" fileName="play-icon.png" />,
          container
        );
      });

      const content = container.textContent;

      expect(content).toBe('');
    });
  });
});
