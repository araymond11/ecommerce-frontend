import React from 'react';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About.tsx';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';
import data from './data.json';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/products' render={()=> <Products products={data.products}/>} />
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path='/productDetail/:id' component={ProductDetail}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
