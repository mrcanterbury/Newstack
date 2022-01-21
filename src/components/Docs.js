import { Link } from 'react-router-dom';
import action from '../img/action.svg'


function Docs() {
  return (
    <div>
      <div className="docs-main-container">

          <div className="docs-navigation">

            <div>
              <ul>
                <span className="doc-nav-header">
                  Navigation
                </span>
                <li><Link to="/">Installation</Link></li>
                <li><Link to="/">Custom Domains</Link></li>
                <li><Link to="/">Functions</Link></li>
                <li><Link to="/">Testing</Link></li>
                <li><Link to="/">Applications</Link></li>
                <li><Link to="/">Surface Groups</Link></li>
                <li><Link to="/">Purpose Methods</Link></li>
                <hr />
                <span className="doc-nav-header">
                  Resources
                </span>
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/">Preferences</Link></li>
                <li><Link to="/">Actions</Link></li>
                <li><Link to="/">Sizing Methods</Link></li>
                <hr />
                <span className="doc-nav-header">
                  Advanced
                </span>
                <li><Link to="/">Networking</Link></li>
                <li><Link to="/">API Tokens</Link></li>
                <li><Link to="/">GraphQL</Link></li>
                <li><Link to="/">Onboarding</Link></li>
              </ul>
            </div>

            <div className="docs-image">
              <img src={action} alt="Documentation" />
            </div>

          </div>


          <div className="docs-content">

            <div className="docs-content-header">
              <h2>Welcome to Newstack</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
              </p>
              <p>
              Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.  
              </p>
            </div>

            <hr />

            <div class="docs-content-module">
              <h3 className="docs-content-module-title">1. Download Installation Package</h3>
              <span className="docs-content-module-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
              </span>
              <div className="docs-content-module-block">
                <code>$Code here</code>
              </div>
            </div>

          </div>
      </div>

    </div>
  );
}

export default Docs;
