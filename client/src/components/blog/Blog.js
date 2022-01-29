import Articles from './Articles';

function Blog() {
    return (
      <div>
        <div className="blog-header-container">
          <div>
            <div>
              <span className="headline">Featured Posts</span>
            </div>
            <div>
              <span className="runner">From the Newstack Team</span>
            </div>
          </div>
        </div>
        <div className="blog-main-container">
            <Articles />
        </div>
      </div>
    );
  };
  
  export default Blog;
  