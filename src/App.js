import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';



import './App.css';
import Homepage from './components/HomePage/Homepage';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Todo" component={TodoList} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}



export default App;