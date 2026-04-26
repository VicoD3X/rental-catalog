import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './pages/Detail/Detail';
import NotFound from './pages/404/404';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

