import './App.css';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import Layout from "./components/Layout/Layout";
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart';
import AsideMenu from './components/AsideMenu/AsideMenu';

export const showCartProvider = React.createContext();
export const cartListProvider = React.createContext();
export const asideMenuProvider = React.createContext();



const cartlistLS = JSON.parse(localStorage.getItem("cartList"));
const initialState = cartlistLS ? cartlistLS : [];

if (!cartlistLS) {
  localStorage.setItem("cartList", JSON.stringify([]));
  
}
const reducer = (state, action) => {
  switch (action.type) {
    case "add":{
      let productsList = [...state]
      let product = action.product;
         
      productsList.push(product);  

      localStorage.setItem("cartList", JSON.stringify(productsList));
      return productsList;
    }
    
    case "upQuantity": {
      let productsList = [...state];
      let product = action.product;
      let productIndex = productsList.findIndex((p) => p.id === product.id);
      
      product.quantity += 1;
      productsList[productIndex] = product;

      localStorage.setItem("cartList", JSON.stringify(productsList));
      return productsList;
    }

    case "downQuantity": {
      let productsList = [...state];
      let product = action.product;
      let productIndex = productsList.findIndex((p) => p.id === product.id);
      
      product.quantity -= 1;
      productsList[productIndex] = product;
      
      if (product.quantity < 1) {
        productsList.splice(productIndex, 1);

        localStorage.setItem("cartList", JSON.stringify(productsList));
        return productsList;
      }
      else {
        localStorage.setItem("cartList", JSON.stringify(productsList));
        return productsList;
      }
    }

    case "remove": {
      let productsList = [...state];
      let product = action.product;
      let productIndex = productsList.findIndex((p) => p.id === product.id);
      
      productsList.splice(productIndex, 1);

      localStorage.setItem("cartList", JSON.stringify(productsList));
      return productsList;
    }

  
    default:
      break;
  }
}


function App() {

  const [showCart, setShowCart] = useState(false);
  const [showAsideMenu, setShowAsideMenu] = useState(false);
  const [cartList , dispatch] = useReducer(reducer, initialState);

  return (
    <asideMenuProvider.Provider value={[showAsideMenu, setShowAsideMenu]}>
      <showCartProvider.Provider value={[showCart, setShowCart]}>
        <cartListProvider.Provider value={[cartList, dispatch]}>
          <div className="App">
            <Layout>
            <AsideMenu />
            <Cart />
              <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/product-details/:id' element={<ProductDetails dispatch={dispatch} />} />
                <Route path='/shop' element={<Shop />} />
              </Routes>
            </Layout>
          </div>
        </cartListProvider.Provider>
      </showCartProvider.Provider>
    </asideMenuProvider.Provider>
  );
}

export default App;
