import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
    return (
      <Router>
        
          <Route exact path="/">
          <Header />
          <Filter />
          </Route>
          <Countries />
          <Route path="/countries/:name" children={<Country />}></Route>
       
      </Router>
    );
  }


export default App;
