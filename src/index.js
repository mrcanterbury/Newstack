import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Docs from './components/Docs';
import Blog from './components/Blog';
import Contact from './components/Contact';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);