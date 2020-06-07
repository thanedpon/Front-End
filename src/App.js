import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import HomePage from './components/HomePage/Homepage';


import './App.css';
import Homepage from './components/HomePage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/Homepage" component={Homepage} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}



export default App;