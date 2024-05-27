import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');  // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content, category };  // Update this line
    try {
      await axios.post('http://localhost:5000/posts', newPost);
      setTitle('');
      setContent('');
      setCategory('');  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <div>
        <label>Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />  
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
