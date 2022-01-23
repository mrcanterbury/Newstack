import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


function Articles() {

  const [listArticles, setListOfArticles] = useState([]);

    useEffect(() => {
      Axios.get("http://localhost:3001/getArticles").then((response) => {
        setListOfArticles(response.data);
      })
    }, []);

    return (
      <div>

        <div className="list-article-display">
          {listArticles.map((article) => {
            return (
            <div key={article.title}>
                <h4>{article.title}</h4>
                <h5>{article.subtitle}</h5>
                <p>{article.content}</p>
                <p>{article.date}</p>
                <h5>{article.categories.reduce((a,b) => (a + ', ' + b))}</h5>
                <hr />
            </div>
            )
          })}

        </div>

      </div>
    );
  };
  
  export default Articles;
  