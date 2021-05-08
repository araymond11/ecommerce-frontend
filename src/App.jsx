import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Switch>
        <Route path='/products'>
          <Products/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
