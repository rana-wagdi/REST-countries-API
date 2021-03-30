import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Countries />
      </div>
    );
  }


export default App;
