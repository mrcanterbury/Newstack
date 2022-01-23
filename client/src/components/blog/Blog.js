import { Link, Outlet } from 'react-router-dom';
import Articles from './Articles';

function Blog() {
    return (
      <div>

        <div className="blog-main-container">
          <div className="article-list-container">
            <Articles />
          </div>
          <div className="article-view-container">
            <Outlet />
          </div>
        </div>

      </div>
    );
  };
  
  export default Blog;
  