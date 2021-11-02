import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

import App from '../src/app/App';

describe('Component: App', () => {
  it('<App /> renders', () => {
    const {baseElement} = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
