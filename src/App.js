import Navbar from './components/Navbar';
import './index.scss';
import Hero from './components/Hero';
import Brewing from './components/Brewing';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brewing />
      <div className="line-gray"></div>
    </>
  );
}

export default App;
