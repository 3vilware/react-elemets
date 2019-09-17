import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import MainWindow from './views/main'
import  ContentFeed from './components/ContentFeed'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Route path="/" exact component={TaskForm} />
          <Route path="/login" exact component={MainWindow} />
          <Route path="/content" exact component={ContentFeed} />
        </Router>
      </header>
    </div>
  );
}

export default App;
