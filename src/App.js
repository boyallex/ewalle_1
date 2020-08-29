import React from 'react';
import './App.css';
import Login from "./pages/Login";
import { Route, Router } from 'react-router-dom';
import Home from "./pages/Home"
import Menu from './pages/Menu';


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
    </div>
  );
}

export default App;
