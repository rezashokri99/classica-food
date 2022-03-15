import './App.css';
import Layout from "./components/Layout/Layout";
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
