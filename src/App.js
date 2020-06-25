import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <Provider>
      <div className="App">
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
