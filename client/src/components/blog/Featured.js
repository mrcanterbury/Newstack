import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


function Featured() {
    const [featuredArticle, setFeature] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getArticles").then((response) => {
            setFeature(response.data[2]) 
            response.data = featuredArticle
        })
    }, []);
    
    return (
      <div>

          <h1>Featured Article: {featuredArticle.title} </h1>
          {/* <img src={featuredArticle.image} alt={featuredArticle.title}></img> */}
          <h4>{featuredArticle.date}</h4>
          <h4>{featuredArticle.content}</h4>
          <h4>{featuredArticle.category}</h4>
          <hr />

      </div>
    );
  };
  
  export default Featured;
  