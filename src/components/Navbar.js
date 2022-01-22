import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import githubnav from '../img/github-nav.svg';
import mobilemenu from '../img/mobile-open.svg';

const navOpen = () => { document.getElementById('nav-menu-mobile').style.display = 'block' };

window.addEventListener('mouseup', function(e) {
    if (e.target !== document.querySelector("nav-links-mobile")) {
        document.getElementById('nav-menu-mobile').style.display = 'none';
    }
});

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-set">
                <img className="icon" src={logo} alt="Logo"/>
                <Link to="/" className="logo">newstack</Link>
            </div>
            <div id="nav-menu">
                <div className="nav-links">
                    <Link to="/docs" className="nav-link">Docs</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <a className="nav-link" href="https://github.com/mrcanterbury/newstack" target="_blank" rel="noopener noreferrer"><img className="github-link" src={githubnav} alt="View Project on GitHub"/></a>
                </div>
            </div>
            <div id="nav-menu-mobile">
                <div className="nav-links-mobile">
                    <button id="nav-menu-button-close" ></button>
                    <Link to="/docs" className="nav-link">Docs</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <a className="nav-link" href="https://github.com/mrcanterbury/newstack" target="_blank" rel="noopener noreferrer"><img className="github-link" src={githubnav} alt="View Project on GitHub"/></a>
                </div>
            </div>
            <button id="nav-menu-button-open" title="Mobile Menu" onClick={navOpen}><img className="icon" src={mobilemenu} alt="Mobile Menu"/></button>
        </div>
    )
};

export default Navbar
