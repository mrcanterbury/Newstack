import { Link, Outlet } from 'react-router-dom';
import Featured from './Featured';
import Articles from './Articles';

function Blog() {
    return (
      <div>

        <div className="blog-main-container">
          <div className="blog-featured">
          </div>
            <Featured />
            <Articles />
        </div>

      </div>
    );
  };
  
  export default Blog;
  