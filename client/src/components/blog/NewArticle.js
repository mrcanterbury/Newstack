import { useState, useEffect } from 'react';
import Axios from 'axios';



function NewArticle() {

  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([]);

  const createArticle = () => {
    Axios.post("http://localhost:3001/createArticle", {
      id, 
      title, 
      subtitle, 
      content, 
      date, 
      categories,
    }).then((response) => {
      response = console.log("Article Created Successfully");
    });
  };

    return (
      <div>
        <div className="new-article-container">
            <input type="text" placeholder="ID" onChange={(event) => {setID(event.target.value)}} />
            <input type="text" placeholder="Title.." onChange={(event) => {setTitle(event.target.value)}} />
            <input type="text" placeholder="Subtitle.." onChange={(event) => {setSubtitle(event.target.value)}} />
            <input type="text" placeholder="Content.." onChange={(event) => {setContent(event.target.value)}} />
            <input type="date"  onChange={(event) => {setDate(event.target.value)}} />
            <input type="text" placeholder="Categories.." onChange={(event) => {setCategories(event.target.value)}} />
            <button onClick={createArticle}>Create Article</button>
        </div>
      </div>
    );
  };
  
  export default NewArticle;
  