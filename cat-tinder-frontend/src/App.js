import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';


import  Routes  from './routes';
import Navbar from './navbar'


class App extends Component {
    render(){
      return (
        <div className="App">
            <HashRouter>
                <Navbar />
                <Routes />
            </HashRouter>
        </div>
      );
    }
}

export default App;
