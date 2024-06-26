import React from 'react';
import ReactDOM from 'react-dom';
import MobileDetector from './components/MobileDetector.jsx';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducer.jsx';
import { createRoot } from 'react-dom/client';

const store = createStore(rootReducer);

const root = document.getElementById('root');

const rootElement = createRoot(root);
rootElement.render(
  <Provider store={store}>
    <MobileDetector />
    <App />
  </Provider>
);
