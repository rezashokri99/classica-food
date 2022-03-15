import './App.css';
import Layout from "./components/Layout/Layout";
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import ProductsContext from './components/contexts/ProductsContext';
import Shop from './components/Shop/Shop';



function App() {
  return (
    <ProductsContext>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </Layout>
      </div>
    </ProductsContext>
  );
}

export default App;
