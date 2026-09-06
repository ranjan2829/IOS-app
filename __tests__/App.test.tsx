import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

test('renders without crashing', () => {
  renderer.create(<App />);
});
