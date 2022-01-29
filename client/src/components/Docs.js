import React, { useState } from 'react';
import {Link} from 'react-scroll';
import action from '../img/action.svg';
import codecopy from '../img/code-copy.svg';
import codetop from '../img/code-top.svg';

function Docs() {

  const toTop = () => { window.scrollTo({top: 0, behavior: 'smooth' });};

  const [docOne, setDocOne] = useState(true);
  const [docTwo, setDocTwo] = useState(false);
  const [docThree, setDocThree] = useState(false);

  return (
    <>

      <div className="docs-header-container">
        <div className="docs-image">
          <img src={action} alt="Documentation" />
        </div>
        <div className="docs-content-header">
          <span>Documentation</span>
        </div>
      </div>

      <div className="docs-main-container">
        <button id="code-top-btn" title="Go to Top" onClick={toTop}><img src={codetop} alt="To Top"/></button>

          <div className="docs-navigation">
            <ul>
              <div className="doc-nav-header">
                <div className={docOne === true ? "doc-accordion" + ' ' + "active" : "doc-accordion"} onClick={() => setDocOne(!docOne)}>Introduction</div>
                {docOne && <div className="doc-dropdown">
                  <li><Link to={"installation"} spy={true} smooth={true}>Installation</Link></li>
                  <li><Link to={"domains"} spy={true} smooth={true}>Domains</Link></li>
                  <li><Link to={"functions"} spy={true} smooth={true}>Functions</Link></li>
                  <li><Link to={"testing"} spy={true} smooth={true}>Testing</Link></li>
                  <li><Link to={"applications"} spy={true} smooth={true}>Applications</Link></li>
                  <li><Link to={"grouping"} spy={true} smooth={true}>Grouping</Link></li>
                  <li><Link to={"methods"} spy={true} smooth={true}>Methods</Link></li>
                </div>}
              </div>

              <div className="doc-nav-header">
                <div className={docTwo === false ? "doc-accordion" : "doc-accordion" + ' ' + "active"} onClick={() => setDocTwo(!docTwo)}>Resources</div>
                {docTwo && <div className="doc-dropdown">
                  <li><Link to={"overview"} spy={true} smooth={true}>Overview</Link></li>
                  <li><Link to={"preferences"} spy={true} smooth={true}>Preferences</Link></li>
                  <li><Link to={"actions"} spy={true} smooth={true}>Actions</Link></li>
                  <li><Link to={"sizing"} spy={true} smooth={true}>Sizing</Link></li>
                </div>}
              </div>

              <div className="doc-nav-header">
                <div className={docThree === false ? "doc-accordion" : "doc-accordion" + ' ' + "active"} onClick={() => setDocThree(!docThree)}>Advanced</div>
                {docThree && <div className="doc-dropdown">
                  <li><Link to={"networking"} spy={true} smooth={true}>Networking</Link></li>
                  <li><Link to={"api"} spy={true} smooth={true}>API Tokens</Link></li>
                  <li><Link to={"graphql"} spy={true} smooth={true}>GraphQL</Link></li>
                  <li><Link to={"onboarding"} spy={true} smooth={true}>Onboarding</Link></li>
                </div>}
              </div>
            </ul>
          </div>

          <div className="docs-content">
            <hr id="installation"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">1. Installation</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="domains"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">2. Domains</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="functions"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">3. Functions</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="testing"/> 
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">4. Testing</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="applications"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">5. Applications</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="grouping"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">6. Grouping</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="methods"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">7. Methods</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="overview"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">8. Overview</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="preferences"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">9. Preferences</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="actions"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">10. Actions</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="sizing"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">11. Sizing</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="networking"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">12. Networking</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="api"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">13. API Tokens</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
            <hr id="graphql"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">14. GraphQL</h3>
              <span className="docs-content-header-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur adipiscing elit
                <br />
                <span className="code-purple">$ </span> etiam eu turpis molestie
                </div>
              </div>
            </div>
            <hr id="onboarding"/>
            <div className="docs-content-module">
              <h3 className="docs-content-module-title">15. Onboarding</h3>
              <span className="docs-content-header-subtext">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  
              </span>
              <div>
                <div className="code-body">
                <div className="code-copy-container"><img src={codecopy} alt="Copy Code" /></div>
                <span className="code-purple">$ </span>
                lorem ipsum dolor sit amet consectetur
                <br />
                <span className="code-purple">$ </span> ipsum dolor sit amet consectetur adipiscing
                </div>
              </div>
            </div>
          </div>
      </div>

    </>
  );
};

export default Docs;
