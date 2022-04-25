import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
          </nav>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route exact path='/products'>
          <Products/>
         </Route>
         <Route path='/products/:productId'>
          <ProductDetail/>
         </Route>
      </div>
    );
  }
  
}

export default App;
