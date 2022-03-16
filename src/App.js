import './App.css';
import React, { useState } from 'react';
import Layout from "./components/Layout/Layout";
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import ProductsContext from './components/contexts/ProductsContext';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart';


export const showCartProvider = React.createContext();
function App() {

  const [showCart, setShowCart] = useState(false);
  
  
  return (
    <ProductsContext>
      <showCartProvider.Provider value={[showCart, setShowCart]}>
        <div className="App">
          <Layout>
          <Cart />
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/product-details/:id' element={<ProductDetails />} />
              <Route path='/shop' element={<Shop />} />
            </Routes>
          </Layout>
        </div>
      </showCartProvider.Provider>
    </ProductsContext>
  );
}

export default App;
