import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
class App extends Component {
  render() {
    return (
      
      <div>
       <Header/>
       <div className="pageBody">
      <button>Add</button>
      <div>
      <span>Name</span><br />
      <span>Phone</span>
      </div>
      </div>
      </div>
    );
  }
}
export default App;