import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { ChartsPage, HomePage } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
       <Switch>
         <Route path="/" exact component={HomePage}/>
         <Route path="/currencies" component={ChartsPage}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
