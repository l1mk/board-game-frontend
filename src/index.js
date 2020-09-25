import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom'
import rootReducer from './reducers/rootReducer';
 
 //store setup
const store = createStore(rootReducer, applyMiddleware(thunk))
//redering the and passing router and store
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );


