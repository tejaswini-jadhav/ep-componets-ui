import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux';
import {
  AuthorizationHandler,
  PlantsHandler,
  UserProfileHandler,
} from './dataHandlers';
import PopupManager from './providers/PopupManager/PopupManager';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(',')
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Provider store={store}>
          <AuthorizationHandler>
            <PopupManager>
              <Router>
                <PlantsHandler>
                  <UserProfileHandler>
                    <App />
                  </UserProfileHandler>
                </PlantsHandler>
              </Router>
            </PopupManager>
          </AuthorizationHandler>
        </Provider>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
