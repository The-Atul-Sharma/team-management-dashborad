import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import './assets/css/base.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

// Set initial state
let initialState = { 
  members: {
    membersList: [],
  }, 
};

// Get initial state from localStorage if it is not empty
if (JSON.parse(localStorage.getItem('membersList'))) {
  initialState = { 
    members: {
      membersList: JSON.parse(localStorage.getItem('membersList')),
      isAllChecked: JSON.parse(localStorage.getItem('isAllChecked')),
    }, 
  };
}

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
