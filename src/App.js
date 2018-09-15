import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Logo from './images/logo.png';
import './style/css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar logo={Logo}/>
        <Home />
      </div>
    );
  }
}

export default App;
