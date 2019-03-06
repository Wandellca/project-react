import React, { Component } from 'react';
import './bootstrap.min.css';
import './styles.css'
import Header from './components/Header';
import Main from './pages/main';
const App = () =>(
	<div className="App">
            <h1> <Header /></h1>
            <Main />
      </div>
	);
export default App;
