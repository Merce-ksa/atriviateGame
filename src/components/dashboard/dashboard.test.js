import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Dashboard from './dashboard';

describe('Given a Dashboard function', () => {
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

  describe('when is invoked', () => {
    test('then will display one image', () => {
      act(() => {
        render(<Dashboard />, container);
      });

      const images = container.querySelectorAll('img');

      expect(images.length).toBe(1);
    });
  });

  describe('when is invoked', () => {
    test('then will display a button', () => {
      act(() => {
        render(<Dashboard />, container);
      });

      const cont = container.querySelectorAll('button');

      expect(cont.length).toBe(1);
    });
  });
});
