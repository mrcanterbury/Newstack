import { useParams } from 'react-router-dom';

function Article() {
    let params = useParams();
    return (
      <div>
        <div>
            <h1>{params.articleTitle}</h1>
        </div>
        <div>
        </div>
      </div>
    );
  };
  
  export default Article;
  