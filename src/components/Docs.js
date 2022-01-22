import {Link} from 'react-scroll';
import action from '../img/action.svg';
import codecopy from '../img/code-copy.svg';
import codetop from '../img/code-top.svg';

const toTop = () => { window.scrollTo({top: 0, behavior: 'smooth' });};

window.onscroll = () => {
  var codeTopBtn = document.getElementById("code-top-btn");
  if (window.scrollY) {
    codeTopBtn.style.display = "block";
  } else {
    codeTopBtn.style.display = "none";
  }
}

function Docs() {
  return (
    <div>
      <div className="docs-header-container">
       <div className="docs-image">
              <img src={action} alt="Documentation" />
        </div>
          <div className="docs-content-header">
            <h2 className="docs-content-header-title">Documentation</h2>
          </div>
      </div>
      <div className="docs-main-container">
        <button id="code-top-btn" title="Go to Top" onClick={toTop}><img src={codetop} alt="To Top"/></button>
          <div className="docs-navigation">
            <div>
              <ul>
                <span className="doc-nav-header">
                  Navigation
                </span>
                <hr />
                <li><Link to={"installation"} spy={true} smooth={true}>Installation</Link></li>
                <li><Link to={"domains"} spy={true} smooth={true}>Domains</Link></li>
                <li><Link to={"functions"} spy={true} smooth={true}>Functions</Link></li>
                <li><Link to={"testing"} spy={true} smooth={true}>Testing</Link></li>
                <li><Link to={"applications"} spy={true} smooth={true}>Applications</Link></li>
                <li><Link to={"grouping"} spy={true} smooth={true}>Grouping</Link></li>
                <li><Link to={"methods"} spy={true} smooth={true}>Methods</Link></li>
                <hr />
                <span className="doc-nav-header">
                  Resources
                </span>
                <hr />
                <li><Link to={"overview"} spy={true} smooth={true}>Overview</Link></li>
                <li><Link to={"preferences"} spy={true} smooth={true}>Preferences</Link></li>
                <li><Link to={"actions"} spy={true} smooth={true}>Actions</Link></li>
                <li><Link to={"sizing"} spy={true} smooth={true}>Sizing</Link></li>
                <hr />
                <span className="doc-nav-header">
                  Advanced
                </span>
                <hr />
                <li><Link to={"networking"} spy={true} smooth={true}>Networking</Link></li>
                <li><Link to={"api"} spy={true} smooth={true}>API Tokens</Link></li>
                <li><Link to={"graphql"} spy={true} smooth={true}>GraphQL</Link></li>
                <li><Link to={"onboarding"} spy={true} smooth={true}>Onboarding</Link></li>
              </ul>
            </div>
          </div>
          <div className="docs-content">
            <hr id="installation"/>
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Installation</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Domains</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Functions</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Testing</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Applications</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Grouping</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Methods</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Overview</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Preferences</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Actions</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Sizing</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Networking</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">API Tokens</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">GraphQL</h3>
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
            <div class="docs-content-module">
              <h3 className="docs-content-module-title">Onboarding</h3>
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
    </div>
  );
}

export default Docs;
