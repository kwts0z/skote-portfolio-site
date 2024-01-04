import './App.css';
import Navbar from './components/navbar';
import Showreel from './components/showreelSection';
import ImplementationReels from './components/implementationReelsSection';
import Footer from './components/footer';
import About from './components/about';


function App() {
  return (
    <div class="App">
      <Navbar/>
      <main className='overflow-hidden'>
        <Showreel/>
        <ImplementationReels/>
        <About/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
