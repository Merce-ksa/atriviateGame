import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './header';

describe('Given a Header function', () => {
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
    test('then will display two images', () => {
      act(() => {
        render(<Header />, container);
      });

      const images = container.querySelectorAll('img');

      expect(images.length).toBe(2);
    });
  });
});
