import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import githubNav from '../img/github-nav.svg'

function navOpen(){
    document.getElementById('nav-menu-mobile').style.display = 'block';
};

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
                    <Link to="/docs" className="nav-link">Documentation</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <a className="nav-link" href="http://www.github.com" target="_blank" rel="noopener noreferrer"><img className="github-link" src={githubNav} alt="Visit us on GitHub"/></a>
                </div>
            </div>
            <div id="nav-menu-mobile">
                <div className="nav-links-mobile">
                    <button id="nav-menu-button-close" ></button>
                    <Link to="/docs" className="nav-link">Documentation</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <a className="nav-link" href="http://www.github.com" target="_blank" rel="noopener noreferrer"><img className="github-link" src={githubNav} alt="Visit us on GitHub"/></a>
                </div>
            </div>
            <button id="nav-menu-button-open" onClick={navOpen}></button>
        </div>
    )
};

export default Navbar
