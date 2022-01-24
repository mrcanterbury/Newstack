import { useState } from 'react';
import Axios from 'axios';

function NewArticle() {

  const [id, setID] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const createArticle = () => {
    Axios.post("http://localhost:3001/createArticle", {
      id, 
      image,
      title,  
      content,
      category,
      date,
    }).then((response) => {
      response = console.log("Article Created Successfully");
    });
  };

    return (
      <div>
        <div className="new-article-container">
            <input type="text" placeholder="ID" onChange={(event) => {setID(event.target.value)}} />
            <input type="text" placeholder="Image URL..." onChange={(event) => {setImage(event.target.value)}} />
            <input type="text" placeholder="Title.." onChange={(event) => {setTitle(event.target.value)}} />
            <input type="text" placeholder="Article Summary" onChange={(event) => {setContent(event.target.value)}} />
            <input type="text" placeholder="Category.." onChange={(event) => {setCategory(event.target.value)}} />
            <input type="date"  onChange={(event) => {setDate(event.target.value)}} />
            <button onClick={createArticle}>Create Article</button>
        </div>
      </div>
    );
  };
  
  export default NewArticle;
  