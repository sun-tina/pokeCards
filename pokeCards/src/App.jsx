import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from "./components/layout/NavBar"

class App extends Component{
  render(){
    return <div className="App">
      <h1>good job, keep it up! keep going. you got this.</h1>
      <NavBar/>
    </div>
  }
}

export default App
