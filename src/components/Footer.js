import React from 'react';
import { Link } from 'react-router-dom';
import logowht from '../img/logo_wht.svg'
import githubFooter from '../img/github-footer.svg'
import twitterFooter from '../img/twitter-footer.svg'
import facebookFooter from '../img/facebook-footer.svg'
import googleFooter from '../img/google-footer.svg'
import rssFooter from '../img/rss-footer.svg'
import top from '../img/top.svg'


const toTop = () =>{   window.scrollTo({top: 0, behavior: 'smooth'});};

function Footer() {
  return ( 
  <div>
      <div class="footer-container">
        <div class="footer-links-container">
            <div className="top-container">
                <button className="top-btn" title="Go to Top" onClick={toTop}><img className="icon" src={top} alt="To Top"/></button>
            </div>
            <div className="footer-links" id="footerLinks1">
                <ul>
                    <li className="footer-link-header">Community</li>
                    <li className="footer-link"><Link to="/contact">Contact</Link></li>
                    <li className="footer-link"><Link to="#Footer">Meet the Team</Link></li>
                    <li className="footer-link"><Link to="#Footer">Help Center</Link></li>
                    <li className="footer-link"><Link to="#Footer">Careers</Link></li>
                </ul>
            </div>
            <div className="footer-links" id="footerLinks2">
                <ul>
                    <li className="footer-link-header">Resources</li>
                    <li className="footer-link"><Link to="/docs">Documentation</Link></li>
                    <li className="footer-link"><Link to="/blog">Blog</Link></li>
                    <li className="footer-link"><Link to="#Footer">Components</Link></li>
                    <li className="footer-link"><Link to="#Footer">Dev Log</Link></li>
                </ul>
            </div>
            <div className="footer-links" id="footerLinks3">
                <ul>
                    <li className="footer-link-header">Enterprise</li>
                    <li className="footer-link"><Link to="#Footer">Affiliates</Link></li>
                    <li className="footer-link"><Link to="#Footer">Inquiries</Link></li>
                    <li className="footer-link"><Link to="#Footer">Advertising</Link></li>
                    <li className="footer-link"><Link to="#Footer">Sponsors</Link></li>
                </ul>
            </div>
            <div class="footer-logo-container">
                <div className="footer-logo">
                    <img className="icon" src={logowht} alt="Logo"/>
                    <Link to="/" className='logo'>newstack</Link>
                </div>
                <div>
                    <p>Lorem ipsum dolor ipsum</p>
                </div>
            </div>
        </div>
        <div class="footer-social-container">
            <div class="footer-icon">
                <img className="icon" src={githubFooter} alt="Github"/>
            </div>
            <div class="footer-icon">
                <img className="icon" src={twitterFooter} alt="Twitter"/>
            </div>
            <div class="footer-icon">
                <img className="icon" src={facebookFooter} alt="Facebook"/> 
            </div>
            <div class="footer-icon">
                <img className="icon" src={googleFooter} alt="Google"/>
            </div>
            <div class="footer-icon">
                <img className="icon" src={rssFooter} alt="RSS"/>
            </div>
        </div>
        <div class="footer-copy">
            <span>Copyright © Newstack 2021</span>
        </div>
      </div>
  </div>
  )
}

export default Footer;
