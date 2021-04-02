import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './components/Header';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
    return (
      <Router>
        <Header />
        <Route exact path="/">
          <Filter />
          <Countries />
        </Route>
        <Switch>
          <Route exact path="/countries/:name" component={Country}></Route>
        </Switch>
      </Router>
    );
  }


export default App;
