import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contac from './components/Contac'
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <div id="classicformpage">
      <Router>
        <div>
          <Navbar  fixed ="bottom"/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contac" component={Contac} />
        </div>
      </Router>
      <br >
    </br>
      
      
      
     
      </div>
      
    );
  }
}

export default App;
