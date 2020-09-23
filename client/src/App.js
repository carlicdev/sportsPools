import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import UserCard from './components/Cards/UserCard';
import LinksCard from './components/Cards/LinksCard';
import SignupForm from './components/UserForms/SignupForm';
import Footer from './components/Footer/Footer';
import Picksheet from './components/Picks/Picksheet';
import MyPools from './components/Pools/MyPools';
import PoolDetails from './components/Pools/PoolDetails';
import JoinPool from './components/Pools/JoinPool';
import NewPool from './components/Pools/NewPool';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <Switch>
            <Route exact path='/' use component={Home} />
            <Route exact path='/signup' use component={SignupForm} />
            <Route exact path='/my-pools' use component={MyPools} />
            <Route path='/my-pools/:slug' use component={PoolDetails} />
            <Route exact path='/join-pool' use component={JoinPool} />
            <Route exact path='/new-pool' use component={NewPool} />
            <Route exact path='/place-picks' use component={Picksheet} />
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
