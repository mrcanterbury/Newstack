import { Link, Outlet } from 'react-router-dom';
import Articles from './Articles';

function Blog() {
    return (
      <div>

        <div className="blog-main-container">
          <div className="blog-main-header">
            <h2>Newstack Blog</h2>
          </div>
            <Articles />
        </div>

      </div>
    );
  };
  
  export default Blog;
  