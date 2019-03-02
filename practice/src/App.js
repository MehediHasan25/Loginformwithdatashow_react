import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Show from './component/Show';




class App extends Component {
 
  render() {
    
    return (
      <div className="App">
        <div className="Container">
            <Show/>
        
        </div>
      </div>
    );
  }
}

export default App;
 