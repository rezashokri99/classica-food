import './App.css';
import React, { useContext, useState } from 'react';
import Layout from "./components/Layout/Layout";
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart';
import { productsProvider } from './components/contexts/ProductsContext';


export const showCartProvider = React.createContext();
export const cartListProvider = React.createContext();
function App() {

  const [showCart, setShowCart] = useState(false);
  const cartlistLS = JSON.parse(localStorage.getItem("cartList"));
  const cartlistContext = useContext(productsProvider);
  const [cartList, setCartList] = useState(cartlistLS ? cartlistLS : cartlistContext );
  
  return (
      <showCartProvider.Provider value={[showCart, setShowCart]}>
      <cartListProvider.Provider value={[cartList, setCartList]}>
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
      </cartListProvider.Provider>
      </showCartProvider.Provider>
  );
}

export default App;
