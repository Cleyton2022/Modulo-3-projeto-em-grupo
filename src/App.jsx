import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link, useRoutes, useLocation} from 'react-router-dom'
import Livros from "./components/pages/Livros";
import Genero from "./Genero";
import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import {AnimatePresence} from 'framer-motion';
import Buscas from './components/pages/Buscas';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Navbar/>
    <Container customClass="min-height">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/livros" element={<Livros/>}/>
      <Route path="/genero" element={<Genero/>}/> 
      <Route path="/buscas" element={<Buscas/>}/>
    </Routes>
    </Container>
    <Footer/>
    </AnimatePresence>
  )
}

export default App
