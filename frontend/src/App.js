// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {/* Component for home page */}
        </Route>
        <Route path="/about">
      {/* Component for about page */}
        </Route>
    {/* Add more routes as needed */}
      </Switch>
    </Router>
    
  );
}

export default App;

