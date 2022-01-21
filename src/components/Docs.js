
function Docs() {
  return (
    <div>
      <div className="docs-main-container">

          <div className="docs-navigation">
            <ul>
              <li className="doc-nav-header">
                Navigation
              </li>
              <li>Installation</li>
              <li>Custom Domains</li>
              <li>Functions</li>
              <li>Testing</li>
              <li>Applications</li>
              <li>Surface Groups</li>
              <li>Purpose Methods</li>
            </ul>

            <ul>
              <li className="doc-nav-header">
                Resources
              </li>
              <li>Overview</li>
              <li>Preferences</li>
              <li>Actions</li>
              <li>Sizing Methods</li>
            </ul>

            <ul>
              <li className="doc-nav-header">
                Advanced
              </li>
              <li>Networking</li>
              <li>API Tokens</li>
              <li>GraphQL</li>
              <li>Onboarding</li>
            </ul>
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
