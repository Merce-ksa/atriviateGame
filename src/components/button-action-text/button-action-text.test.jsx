import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ButtonActionText from './button-action-text';

describe('Given a ButtonActionText function', () => {
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

  describe('When is invoked with 2 parameters', () => {
    test('Then will display a button', () => {
      act(() => {
        render(
          <ButtonActionText action={() => {}} value="Save" />, container
        );
      });

      const buttons = container.querySelectorAll('button');

      expect(buttons.length).toBe(1);
    });
  });
  describe('When is invoked with 1 parameters or less', () => {
    test('Then will display nothing', () => {
      act(() => {
        render(
          <ButtonActionText url="/game/1" value="Save" />,
          container
        );
      });

      const content = container.textContent;

      expect(content).toBe('');
    });
  });
});
