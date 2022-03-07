import React from 'react';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './redux/configureStore';

describe('Should render App component', () => {
  const component = renderer.create(
    <Provider store={configureStore()}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );

  it('should render App with auth store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
