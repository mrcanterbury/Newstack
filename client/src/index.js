import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Docs from './components/Docs';
import Blog from './components/blog/Blog';
import Article from './components/blog/Article';
import NewArticle from './components/blog/NewArticle';
import Contact from './components/Contact';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Article />} />
      <Route path="/blog/new" element={<NewArticle />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);