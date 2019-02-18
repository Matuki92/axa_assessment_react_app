// react
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import store from './store/store';
// components
import HomePage from './components/homepage';
// css
import './index.css';

const App = () => {
  return(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

// render the app
ReactDOM.render(<App />, document.getElementById('root'));