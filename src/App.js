import React, { Component } from 'react';
import Routes from './routes';
import './bootstrap.min.css';
import './styles.css'
import Header from './components/Header';
const App = () =>(
	<div className="App">
            <h1> <Header /></h1>
            <Routes />
      </div>
	);
export default App;
