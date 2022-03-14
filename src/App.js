import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Suggestions />
    </div>
  );
}

export default App;
