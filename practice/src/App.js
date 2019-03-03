import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Show from './component/Show';
import Form1 from './component/Form1';
//import Show1 from './component/Show1';


import {Provider} from '../src/context';
import Show1 from './component/Show1';



class App extends Component {
 
  render() {
    
    return (
      <Provider>
        <Router>
      <div className="App">
        <div className="Container">
          <Switch>
            <Route exact path="/" component={Form1}/>
            <Route exact path="/data" component={Show1}/>
          </Switch>
        
        </div>
      </div>
      </Router>
      </Provider>
      
    );
  }
}

export default App;
 