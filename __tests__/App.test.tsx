import React from 'react';
import renderer, { act } from 'react-test-renderer';

import App from '../App';

test('renders without crashing', () => {
  act(() => {
    renderer.create(<App />);
  });
});
