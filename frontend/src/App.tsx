import React from 'react';
import './App.css';
import Router from './components/Router';
import { GlobalStyles } from './components/styles';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
