import './App.css';
import FreeDeliverySection from './components/FreeDeliverySection';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Suggestions from './components/Suggestions';
import TopPicks from './components/TopPicks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Suggestions />
      <TopPicks />
      <FreeDeliverySection />
    </div>
  );
}

export default App;
