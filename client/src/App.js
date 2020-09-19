import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' use component={Home} />
      </Switch>
    </div>
  );
}

export default App;
