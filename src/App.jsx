import React from 'react';
import Products from './pages/Products/Products';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Switch>
        <Route path='/products'>
          <Products/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
