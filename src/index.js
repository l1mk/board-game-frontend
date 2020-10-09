import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import './index.css'; 


//setup the chrome xtension tool 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//store setup
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//console.log('created store', store.getState())
//redering the and passing router and store
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );


