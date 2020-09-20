import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import UserCard from './components/Cards/UserCard';
import LinksCard from './components/Cards/LinksCard';
import SignupForm from './components/UserForms/SignupForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <Switch>
            <Route exact path='/' use component={Home} />
            <Route exact path='/signup' use component={SignupForm} />
          </Switch>
        </div>
        <div className='col-span-1 p-5'>
          <UserCard />
          <LinksCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
