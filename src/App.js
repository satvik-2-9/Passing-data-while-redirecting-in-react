import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import pp from './pp'
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          
          <Route path='/' exact component={Home} ></Route>
          <Route path='/pp' exact component={pp} ></Route>

        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
