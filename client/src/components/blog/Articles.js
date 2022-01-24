import { useState, useEffect } from 'react';
import Axios from 'axios';


function Articles() {
  const [listArticles, setListOfArticles] = useState([]);

    useEffect(() => {
      Axios.get("http://localhost:3001/getArticles").then((response) => {
        setListOfArticles(response.data);
      })
    }, []);

    return (
      <div>
        <div className="article-list-container">
          {listArticles.map((article) => {
            return (
            <div className="article-display" key={article.title}>
              <div className="article-image">
                <img src={article.image} alt={article.title}></img>
              </div>
              <div className="article-category">{article.category}</div>
              <div className="article-display-header">
                <h4 className="article-title">{article.title}</h4>
                <h5 className="article-date">{article.date}</h5>
              </div>
                <div className="article-content">
                  <p>{article.content}</p>
                </div>
              <div className="article-link-container">
                <button className="article-link">Read More</button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  };
  
  export default Articles;
  