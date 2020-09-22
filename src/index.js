import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import playersReducer from './reducers/playersReducer.js';
import { BrowserRouter as Router} from 'react-router-dom'
//import rootReducer from './reducers';
 
 //store setup
const store = createStore(playersReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );


