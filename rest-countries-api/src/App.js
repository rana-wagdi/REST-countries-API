import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country'

function App() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Countries />
       <Route path="/countries/:name" children={<Country />}></Route>
      </div>
    );
  }


export default App;
