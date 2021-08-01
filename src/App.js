import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar sticky="top" />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services}/>
        <Route path='/about' component={About}/>
        <Route path='/sign-up' component={SignUp}/>
        

      </Switch>
      <Footer></Footer>
    
    </Router>
   );
}

export default App;
