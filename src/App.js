import './App.css';
import Home from './Home';
import Blog from './Blog';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
