import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import styled from "styled-components"
import { ChartsPage, HomePage } from './pages';
import { Header } from './components';

const CryptoContainer = styled.div`
  display: "flex";
  flex-direction: column;
  margin: auto;
  align-content: center;
  min-height: 100vh;
  width: 80vw;
`

function App() {
  return (
    <CryptoContainer>
     <Router>
     <Header />
       <Switch>
         <Route path="/" exact component={HomePage}/>
         <Route path="/currency/:id" component={ChartsPage}/>
       </Switch>
     </Router>
    </CryptoContainer>
  );
}

export default App;
