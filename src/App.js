import './assets/css/App.css';
import './assets/css/Media.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './pages/layout/NavBar';
import Home from './pages/home';
import Footer from './pages/layout/Footer';

const nome = 'AxSpear'

function App() {
  return (
    <Router>
        <NavBar nome={nome}/>
        <Routes>
          <Route path='/' element={<Home nome={nome}/>}/>
        </Routes>
        <Footer nome={nome}/>
    </Router>
  );
}

export default App;
