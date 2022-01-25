import Articles from './Articles';

function Blog() {
    return (
      <div>
        <div className="blog-main-container">
          <div className='blog-header-container'>
            <span>The Blog</span>
          </div>
            <Articles />
        </div>
      </div>
    );
  };
  
  export default Blog;
  