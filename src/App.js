import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Pp from './Next'
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          
          <Route exact path='/'   component={Home} ></Route>
          <Route exact path='/next' component={Pp}/>
        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
