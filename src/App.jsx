import React from 'react';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import data from './data.json';

function App() {

  return (
    <Router>
      <Navbar/>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Switch>
        <Route path='/products'>
          <Products products={data.products}/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/productDetail/:id'>
          <ProductDetail/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
